const PostModel = require("../../models/post");
const { handleError, ErrorHandler, HttpStatus } = require("../../utils/error");

const getAllPosts = () => async (req, res) => {
  try {
    const result = await PostModel.find();

    return res.json({
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const validateReq = (body) => {
  if (!body.title)
    throw new ErrorHandler(HttpStatus.BAD_REQUEST, "Please filled title");
};

const createPost = () => async (req, res) => {
  try {
    if (req.user.role != "user")
      throw new ErrorHandler(HttpStatus.FORBIDDEN, "Not have permission");
    validateReq(req.body);
    const { title } = req.body;
    const newPost = new PostModel({
      creator: req.user.username,
      title,
    });
    data = await newPost.save();
    return res.status(HttpStatus.CREATED).json({ success: true, data });
  } catch (err) {
    return handleError(err, res);
  }
};

const getPostById = () => async (req, res) => {
  try {
    return res.json({ data: await PostModel.findById(req.params.id) });
  } catch (err) {
    // return handleError(err, res);
    // console.log(err);
    // return res.status(500).json({ message: err.message });
  }
};

const updatePost = () => async (req, res) => {
  try {
    const { title } = req.body;
    const id = req.params.id;

    if (!title) {
      throw new ErrorHandler(400, "Title is null");
    }

    if (req.user.role == "modulator") {
      data = await PostModel.findOneAndUpdate({ _id: id }, { title });
    } else {
      data = await PostModel.findOneAndUpdate(
        { creator: req.user.username, _id: id },
        { title }
      );
    }

    return res.status("201").json({ success: true, data });
  } catch (error) {
    return handleError(error, res);
  }
};

const deletePost = () => async (req, res) => {
  try {
    const id = req.params.id;
    await PostModel.findByIdAndRemove(id);
    return res.json({ success: true });
  } catch (error) {
    console.log(error);
    return res.json({ success: false });
  }
};

module.exports = {
  getAllPosts,
  createPost,
  getPostById,
  updatePost,
  deletePost,
};
