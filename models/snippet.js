const mongoose = require('mongoose');

const Snippet = mongoose.model('Snippet', {
    title: {
        type: String,
        required: true,
        trim: true
    },
    snippet: {
        type: String,
        required: true,
        trim: true
    },
    body: {
        type: String,
        required: true,
        trim: true
    }
});

module.exports = Snippet;