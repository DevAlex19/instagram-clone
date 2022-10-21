const mongoose = require('mongoose')


const postsSchema = new mongoose.Schema({
    email: {
        required: true,
        type: String
    },
    image: {
        type: String
    },
    likes: {
        type: Number,
        default: 0
    },
    date: {
        type: Date
    },
    comments: [
        {
            user: String,
            comment: String,
            img: String,
            subcomments: [{
                user: String,
                comment: String,
                img: String,
            }]
        }
    ]
})


module.exports = mongoose.model('posts', postsSchema)