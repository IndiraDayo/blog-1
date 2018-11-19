const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const articleScheme = new Schema({
    title: {
        type: String,
        unique: true
    },
    description: {
        type: String
    },
    image: {
        type: String
    },
    author_id: {
        type: Schema.Types.ObjectId, 
        ref: 'User'
    },
    like: { 
        type:Number
    },
    dislike: { 
        type:Number
    },
    comments: [{
        type: Schema.Types.ObjectId, 
        ref: 'Comment'
    }]
}, {
    timestamps: true
});

const Article = mongoose.model('Article', articleScheme)
module.exports = Article