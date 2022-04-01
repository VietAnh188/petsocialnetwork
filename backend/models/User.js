const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true,
            min: 3,
            max: 20,
        },
        password: {
            type: String,
            required: true,
            min: 5,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        avatar: {
            type: String,
            default: '',
        },
        coverPicture: {
            type: String,
            default: '',
        },
        followings: {
            type: Array,
            default: [],
        },
        followers: {
            type: Array,
            default: [],
        },
        isAdmin: {
            type: Boolean,
            default: false,
        },
        address: {
            type: String,
            default: '',
        },
        description: {
            type: String,
            default: '',
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('User', UserSchema);
