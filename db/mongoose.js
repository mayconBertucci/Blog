const { Mongoose } = require("mongoose");

const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://admin:admin@cluster0.bijll.mongodb.net/blogDB?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});