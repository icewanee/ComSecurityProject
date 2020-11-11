const express = require("express");
const router = express.Router();

//service
const postService = require("../../../services/post");

router.route("").get(postService.getAllPosts()).post(postService.createPost());

router
  .route("/:id")
  .get(postService.getPostById())
  .put(postService.updatePost())
  .delete(postService.deletePost());

module.exports = router;
