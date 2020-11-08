const PostModel = require("../../models/post");
const { handleError, ErrorHandler, HttpStatus } = require("../../utils/error");

const getAllPosts = () => async (req, res) => {
  try {
    const page = req.query.page || 1;
    const size = req.query.size || 25;

    const [_results, _count] = await Promise.all([
      PostModel.find().skip(calSkip(page, size)).limit(size).exec(),
      PostModel.countDocuments().exec(),
    ]);

    return res.json({
      currentPage: page,
      pages: calPage(_count, size),
      currentCount: _results.length,
      totalCount: _count,
      data: _results,
    });
  } catch (error) {
    console.log(error);
  }
};

const validateReq = (body) => {
  if (!body.title)
    throw new ErrorHandler(HttpStatus.BAD_REQUEST, "Please filled title");
  if (!body.description)
    throw new ErrorHandler(HttpStatus.BAD_REQUEST, "Please filled description");
};

const createPost = () => async (req, res) => {
  try {
    validateReq(req.body);
    const { title, description } = req.body;
    const newBook = new PostModel({
      author: req.user._id,
      title,
      description,
      createdBy: req.user._id,
    });
    data = await PostModel.createPost(newBook);
    return res.status(HttpStatus.CREATED).json({ success: true, data });
  } catch (err) {
    return handleError(err, res);
  }
};

const getPostById = () => async (req, res) => {
  try {
    return res.json({ data: await PostModel.getById(req.params.id) });
  } catch (err) {
    // return handleError(err, res);
    // console.log(err);
    // return res.status(500).json({ message: err.message });
  }
};

const updatePost = () => async (req, res) => {
  try {
    const { title, description } = req.body;
    const id = req.params.id;

    if (!title) {
      throw new ErrorHandler(400, "Title is null");
    }
    if (!description) {
      throw new ErrorHandler(400, "Description is null");
    }

    data = await PostModel.updatePost(id, {
      title,
      description,
      updatedBy: req.user._id,
    });

    return res.json({ success: true, data });
  } catch (error) {
    return handleError(error, res);
  }
};

const deletePost = () => async (req, res) => {
  try {
    const id = req.params.id;
    await PostModel.deletePost(id);
    return res.json({ success: true });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllPosts,
  createPost,
  getPostById,
  updatePost,
  deletePost,
};

// books = await PostModel.getAllBook();
// _page = parseInt(req.query.page) || 1;
// const [_results, _count] = await Promise.all([
//   PostModel.find()
//     .skip(req.skip)
//     .limit(req.query.limit)
//     .exec(),
//   PostModel.countDocuments().exec()
// ]);

// _pages = Math.ceil(_count / req.query.limit);
// _hasNext = paginate.hasNextPages(req)(_page);

// return res.json({
//   currentPage: _page,
//   pages: _pages,
//   currentCount: _results.length,
//   totalCount: _count,
//   data: _results
// });
