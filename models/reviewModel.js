// review, rating, createdAt, ref to tour, ref to user
const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    review: {
        type: String,
        required: [true, 'You must send a review'],
        trim: true,
    },
    rating: {
        type: Number,
        default: 4.5,
        min: [1, 'The rating must be above 1.0'],
        max: [5, 'The rating must be below 5.0'],
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    tour: {
        type: mongoose.Schema.ObjectId,
        ref: 'Tour',
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
    },
});
