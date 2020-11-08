const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    creator: {
      type: String,
      required: true,
    },
  },
  {
    collection: "Post",
  }
);

const Post = (module.exports = mongoose.model("Post", PostSchema));
