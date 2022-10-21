const mongoose = require("mongoose");

const followSchema = new mongoose.Schema({
    following: {
        type: String
    },
    followers: {
        type: String
    }
})


module.exports = mongoose.model("follow", followSchema)