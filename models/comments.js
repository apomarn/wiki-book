const mongoose = require("mongoose");
// const express  = require('express');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  title: { type: String, unique: true, trim: true },
  book_id: String,
  user_id: String,
  username: String,
  text: String,
  author: String
});

const comments = mongoose.model("comments", commentSchema);
module.exports = comments;
