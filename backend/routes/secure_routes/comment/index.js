const express = require("express");
const router = express.Router();

//service
const CommentService = require("../../../services/comment");

router
  .route("")
  .post(CommentService.createComment())
  .put(CommentService.updateComment())
  .delete(CommentService.deleteComment());

router
  .route("/:id")
  .get(CommentService.getAllCommentsById());

module.exports = router;
