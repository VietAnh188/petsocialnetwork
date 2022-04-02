const router = require('express').Router();
const FeedPost = require('../models/FeedPost');
const User = require('../models/User');

// create a new post
router.post('/', async (req, res) => {
    const newPost = new FeedPost(req.body);
    try {
        const savedPost = await newPost.save();
        return res.status(200).json(savedPost);
    } catch (error) {
        return res.status(500).json(error);
    }
});

// update a post
router.put('/:id', async (req, res) => {
    try {
        const post = await FeedPost.findById(req.params.id);
        if (!post) {
            return res.status(404).json('Post not found');
        }
        if (post.userId === req.body.userId) {
            await post.updateOne({ $set: req.body });
            return res.status(200).json('This post has been updated');
        } else {
            return res
                .status(403)
                .json('You are not authorized to update this post');
        }
    } catch (error) {
        return res.status(500).json(error);
    }
});

// delete a post
router.delete('/:id', async (req, res) => {
    try {
        const post = await FeedPost.findById(req.params.id);
        if (!post) {
            return res.status(404).json('Post not found');
        }
        if (post.userId === req.body.userId) {
            await post.deleteOne();
            return res.status(200).json('This post has been deleted');
        } else {
            return res
                .status(403)
                .json('You are not authorized to delete this post');
        }
    } catch (error) {
        return res.status(500).json(error);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const post = await FeedPost.findById(req.params.id);
        if (!post) {
            return res.status(404).json('Post not found');
        }
        return res.status(200).json(post);
    } catch (error) {
        return res.status(500).json(error);
    }
});

// get all post in newfeed
router.get('/feed/:userId', async (req, res) => {
    try {
        const currentUser = await User.findById(req.params.userId);
        const userPosts = await FeedPost.find({ userId: currentUser._id });
        const followingPosts = await Promise.all(
            currentUser.followings.map(followingId => {
                return FeedPost.find({ userId: followingId });
            })
        );
        // const allPosts = [...userPosts, ...followingPosts];
        const allPosts = userPosts.concat(...followingPosts);
        return res.status(200).json(allPosts);
    } catch (error) {
        return res.status(500).json(error);
    }
});

// get all post in user's profile
router.get('/profile/:username', async (req, res) => {
    try {
        const currentUser = await User.findOne({
            username: req.params.username,
        });
        const userPosts = await FeedPost.find({ userId: currentUser._id });
        return res.status(200).json(userPosts);
    } catch (error) {
        return res.status(500).json(error);
    }
});

module.exports = router;
