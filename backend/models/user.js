const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    role: {
      type: String,
      enum: ["modulator", "user"],
      default: "user",
    },
  },
  {
    collection: "User",
  }
);

const User = (module.exports = mongoose.model("User", UserSchema));
