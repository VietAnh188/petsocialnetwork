const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');

// register a new user
router.post('/register', async (req, res) => {
    try {
        const existUsername = await User.findOne({
            username: req.body.username,
        });
        const existEmail = await User.findOne({ email: req.body.email });
        if (!existUsername && !existEmail) {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(req.body.password, salt);

            const newUser = new User({
                username: req.body.username,
                email: req.body.email,
                password: hashedPassword,
            });

            const savedUser = await newUser.save();

            return res.status(200).json(savedUser);
        } else {
            return res.status(400).json('Username or email already exist');
        }
    } catch (error) {
        return res.status(500).json(error);
    }
});

// login a user
router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(404).json('User not found');
        }

        const validPassword = await bcrypt.compare(
            req.body.password,
            user.password
        );

        if (!validPassword) {
            return res.status(400).json('Wrong password');
        }

        return res.status(200).json(user);
    } catch (err) {
        return res.status(500).json(err);
    }
});

module.exports = router;
