const mongoose = require("mongoose");
// const express  = require('express');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  title: String,
  book_id: String,
  user_id: { type: Schema.Types.ObjectId, ref: "User" },
  username: String,
  text: String,
  author: String
});

const comments = mongoose.model("comments", commentSchema);
module.exports = comments;
