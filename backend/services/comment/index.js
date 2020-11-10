const CommentModel = require("../../models/comment");
const { handleError, ErrorHandler, HttpStatus } = require("../../utils/error");


const getAllCommentsById = () => async (req, res) => {
    try {
        return res.json({data: await CommentModel.find({post_id:req.params.id})});
    } catch (err) {
        return handleError(err,res);
    }
};

const validateReq = (body) => {
    if (!body.post_id)
      throw new ErrorHandler(HttpStatus.BAD_REQUEST, "Please filled post_id");
    if (!body.text)
      throw new ErrorHandler(HttpStatus.BAD_REQUEST, "Please filled text");
};

const createComment = () => async (req, res) => {
    try {
        if (req.user.role != "user")
          throw new ErrorHandler(HttpStatus.FORBIDDEN, "Not have permission");
        validateReq(req.body);
        const { text,post_id } = req.body;
        const newComment = new CommentModel({
          creator: req.user.username,
          text,
          post_id,
        });
        data = await newComment.save();
        return res.status(HttpStatus.CREATED).json({ success: true, data });
      } catch (err) {
        return handleError(err, res);
      }
};

const updateComment = () => async (req, res) => {
    try {
      const { text,id } = req.body;
  
  
      if (!text) {
        throw new ErrorHandler(400, "Text is null");
      }
  
      data = await CommentModel.findOneAndUpdate({creator:req.user.username,_id:id}, { text });
      if(data==null){
        throw new ErrorHandler(HttpStatus.FORBIDDEN, "Not have permission");
      }
      return res.json({ success: true, data });
    } catch (error) {
      return handleError(error, res);
    }
};

const deleteComment = () => async (req, res) => {
    try {
      const { id } = req.body;
      data = await CommentModel.findOneAndRemove({creator:req.user.username,_id:id});
      if(data==null){
        throw new ErrorHandler(HttpStatus.FORBIDDEN, "Not have permission");
      }
      return res.json({ success: true });
    } catch (error) {
      console.log(error);
      return handleError(error, res);
    }
};  

module.exports = {
    getAllCommentsById,
    createComment,
    updateComment,
    deleteComment,
};