const mongoose = require("mongoose");
// const express  = require('express');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, unique: true, trim: true },
  author: String,
  publisher: String,
  publication_date: Date, //yyyy/mm/dd
  pages: Number,
  genre: Array,
  description: String,
  image: String
});

bookSchema.index({ title: "text", author: "text", genre: "text" });

const books = mongoose.model("books", bookSchema);
module.exports = books;
