let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let BookSchema = new Schema({
    title: {
        type: String
    },
    author: {
        type: String
    },
    date: {
        type: Date
    },
    cantity: {
        type: Number
    },
    image : {
        type: String
    },
    category: {
        type: String
    },
    
    specifications: mongoose.Schema.Types.Mixed
});

module.exports = mongoose.model('Book', BookSchema);