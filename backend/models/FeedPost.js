const mongoose = require('mongoose');

const FeedPostSchema = new mongoose.Schema(
    {
        userId: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            default: '',
        },
        content: {
            type: String,
            default: '',
        },
        image: {
            type: String,
            default: '',
        },
        description: {
            type: String,
            default: '',
        },
        likes: {
            type: Array,
            default: [],
        },
        disLikes: {
            type: Array,
            default: [],
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('FeedPost', FeedPostSchema);
