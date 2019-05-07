const express = require("express");
const router = express.Router();
const Book = require("../models/book");
const Comments = require("../models/comments");
const User = require("../models/user");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

// router.get("/title", (req, res, next) => {
//   Book.find({ $text: { $search: req.query.title } })
//     .then(books => {
//       const book = books[0];
//       console.log(book);
//       console.log("It worked?????", book._id);
//       Comments.find({ book_id: book._id }).then(comments => {
//         console.log(comments);

//         res.render("../views/books/bytitle.hbs", { found: book, comments: comments });
//       });
//     })

//     .catch(err => {
//       console.log("error!!!! --->", err);
//     });
// });

router.get("/profile", isLoggedIn, async (req, res, next) => {
  try {
    console.log("try this");
    console.log(req.user);
    const comments = await Comments.find({ username: req.user.username });
    const user = await User.find({ username: req.query.username });

    console.log(comments);
    res.render("profile", { user, comments });
  } catch (err) {
    console.log("error!!!! --->", err);
  }
});

router.get("/title", async (req, res, next) => {
  try {
    const books = await Book.find({ $text: { $search: req.query.title } });
    const book = books[0];
    const comments = await Comments.find({ book_id: book._id });

    res.render("../views/books/bytitle.hbs", { book, comments });
  } catch (err) {
    console.log("error!!!! --->", err);
  }
});

router.get("/author", async (req, res, next) => {
  try {
    const book = await Book.find({ $text: { $search: req.query.author } });
    console.log(book);
    const comments = await Comments.find({ author: req.query.author.toUpperCase() + " " });

    res.render("../views/books/byauthor.hbs", { book, comments, author: req.query.author.toUpperCase() });
  } catch (error) {
    console.log(error);
  }
});

router.get("/genre/:name", async (req, res) => {
  const books = await Book.find({ $text: { $search: req.params.name } });

  console.log(books);
  res.render("../views/books/genre.hbs", { books, genre: req.params.name.toUpperCase() });
});

router.get("/fiction", (req, res, next) => {
  res.render("../views/books/fiction.hbs");
});

router.get("/non-fiction", (req, res, next) => {
  res.render("../views/books/non-fiction.hbs");
});

router.post("/addComment", isLoggedIn, (req, res, next) => {
  console.log("add comment", req.body, req.body._id);
  let comment = {
    text: req.body.comment,
    user_id: req.user._id,
    username: req.user.username,
    book_id: req.body.bookId,
    author: req.body.author
  };
  Comments.create(comment)
    .then(result => {
      res.redirect("back");
    })
    .catch(err => {
      console.log(err);
    });
});

router.post("/addCommentAuthor", isLoggedIn, (req, res, next) => {
  console.log("add comment", req.body, req.body._id);
  const comment = {
    text: req.body.comment,
    user_id: req.user._id,
    username: req.user.username,
    book_id: req.body.bookId,
    author: req.body.author
  };
  Comments.create(comment)
    .then(result => {
      console.log("New comment for author -------- ", result);
      res.redirect("back");
    })
    .catch(err => {
      console.log(err);
    });
});

router.get("/comment/edit", (req, res, next) => {
  console.log("idk ", req.params, req.user, req.query, req.file, req.body);
  Comments.findOne({ _id: req.query.id })
    .then(comment => {
      Book.findById(comment.book_id)
        .then(theBook => {
          data = {
            comment: comment,
            theBook: theBook
          };
          console.log("hereeeee", comment);
          console.log("the book info ---------- ", theBook);
          res.render("edit", data);
        })
        .catch(err => {
          next(err);
        });
    })
    .catch(error => {
      console.log(error);
    });
});

router.post("/comment/edit/:id", (req, res, next) => {
  console.log("the req body ============ ", req.body);
  Comments.findById(req.params.id)
    .then(comment => {
      comment.text = req.body.title;
      comment
        .save()
        .then(updatedComment => {
          Book.findById(updatedComment.book_id)
            .then(theBook => {
              data = {
                comment: updatedComment,
                theBook: theBook
              };
              console.log("hereeeee >>>>>>>>>>>>>>>>", updatedComment);
              console.log("the book info ---------- ", theBook);
              // res.render("edit", data);
              res.redirect(`/title?title=${theBook.title}`);
            })
            .catch(err => {
              next(err);
            });
        })
        .catch(err => {
          next(err);
        });
    })
    .catch(error => {
      console.log(error);
    });
});

router.get("/title/delete", (req, res, next) => {
  console.log(req.query);
  Comments.findByIdAndRemove(req.query.id)
    .then(deletedThing => {
      console.log("deleted!!!!!!!!!");
      res.redirect("back");
    })
    .catch(error => {
      console.log(error);
    });
});

router.get("/author/delete", (req, res, next) => {
  console.log(req.query);
  Comments.findByIdAndRemove(req.query.id)
    .then(deletedThing => {
      console.log("deleted!!!!!!!!!");
      res.redirect("back");
    })
    .catch(error => {
      console.log(error);
    });
});

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/login");
}
module.exports = router;
