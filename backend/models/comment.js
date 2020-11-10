const mongoose = require("mongoose");
const Schema = mongoose.Schema

const CommentSchema = new Schema(
    {
        creator:{
            type: String,
            required: true,
        },
        date:{
            type:Date,
            default: Date.now,
        },
        text:{
            type:String,
            required:true,
        },
        post_id:{
            type:String,
            required:true,
        },
    },
    {
        collection: "Comment",
    }
);

const Comment = (module.exports = mongoose.model("Comment", CommentSchema));