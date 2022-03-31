const router = require('express').Router()
const User = require('../models/User')
const bcrypt = require('bcrypt')

// get a user by id or username
router.get('/', async (req, res) => {
    const userId = req.query.userId
    const username = req.query.username
    try {
        const currentUser = userId
            ? await User.findById(userId)
            : await User.findOne({ username: username })
        const { password, updatedAt, ...theRest } = currentUser._doc
        return res.status(200).json(theRest)
    } catch (error) {
        return res.status(500).json(error)
    }
})

// update user's profile
router.put('/:id', async (req, res) => {
    if (req.body.userId === req.params.id || req.body.isAdmin) {
        if (req.body.password) {
            try {
                const salt = await bcrypt.genSalt(10)
                const hashedPassword = await bcrypt.hash(
                    req.body.password,
                    salt
                )
                req.body.password = hashedPassword
            } catch (error) {
                return res.status(500).json(error)
            }
        }
        try {
            await User.findByIdAndUpdate(req.params.id, {
                $set: req.body,
            })
            return res.status(200).json('User updated')
        } catch (error) {
            return res.status(500).json(error)
        }
    } else {
        return res.status(403).json('You are not authorized')
    }
})

// delete user by id
router.delete(':id', async (req, res) => {
    if (req.body.userId === req.params.id || req.body.isAdmin) {
        try {
            await User.findByIdAndDelete(req.params.id)
            return res.status(200).json('User deleted')
        } catch (error) {
            return res.status(500).json(error)
        }
    } else {
        return res.status(403).json('You are not authorized')
    }
})

// get all following users
router.get('/followings/:userId', async (req, res) => {
    try {
        const currentUser = await User.findById(req.params.userId)
        const followings = await Promise.all(
            currentUser.followings.map(followingId => {
                return User.findById(followingId)
            })
        )
        const followingList = followings.map(following => {
            const { _id, username, avatar } = following
            return { _id, username, avatar }
        })
        return res.status(200).json(followingList)
    } catch (error) {
        return res.status(500).json(error)
    }
})

// follow a user
router.put('/:id/follow', async (req, res) => {
    if (req.body.userId !== req.params.id) {
        try {
            const user = await User.findById(req.params.id)
            const currentUser = await User.findById(req.body.userId)
            if (!user.followers.includes(currentUser._id)) {
                await user.updateOne({
                    $push: {
                        followers: currentUser._id,
                    },
                })
                await currentUser.updateOne({
                    $push: {
                        followings: user._id,
                    },
                })
                return res.status(200).json('User followed')
            } else {
                return res
                    .status(403)
                    .json('You are already following this user')
            }
        } catch (error) {
            return res.status(500).json(error)
        }
    } else {
        return res.status(403).json('You cannot follow yourself')
    }
})

// unfollow a user
router.put('/:id/unfollow', async (req, res) => {
    if (req.body.userId !== req.params.id) {
        try {
            const user = await User.findById(req.params.id)
            const currentUser = await User.findById(req.body.userId)
            if (user.followers.includes(currentUser._id)) {
                await user.updateOne({
                    $pull: {
                        followers: currentUser._id,
                    },
                })
                await currentUser.updateOne({
                    $pull: {
                        followings: user._id,
                    },
                })
                return res.status(200).json('User unfollowed')
            } else {
                return res.status(403).json('You are not following this user')
            }
        } catch (error) {
            return res.status(500).json(error)
        }
    } else {
        return res.status(403).json('You cannot unfollow yourself')
    }
})

module.exports = router
