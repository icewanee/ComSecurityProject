const UserModel = require("../../models/user");
const jwt = require("jsonwebtoken");
const bcryptUtils = require("../../utils/bcrypt");

const getUserByUsername = async (username) => {
  try {
    return await UserModel.findOne().where("username", username).lean();
  } catch (error) {
    console.log(error);
  }
};

const getUserWithoutPassword = async (userId) => {
  try {
    return await UserModel.findById(userId).select("-password").lean();
  } catch (error) {
    console.log(error);
  }
};

const validateLogin = (body) => {
  if (!body.username || !body.password)
    console.log("Please filled username or password !");
};

const login = () => async (req, res) => {
  validateLogin(req.body);
  const { username, password } = req.body;
  const _user = await getUserByUsername(username);

  if (_user) {
    if (await bcryptUtils.comparePassword(password, _user.password)) {
      const _userInfo = await getUserWithoutPassword(_user._id);

      const token = jwt.sign(_userInfo, process.env.SECRET, {
        expiresIn: "1d",
      });

      return res.json({ success: true, token: token, user: _userInfo });
    }
  }
  return res.json({
    success: false,
    message: "Username or password is incorrect !",
  });
};

module.exports = {
  getUserByUsername,
  getUserWithoutPassword,
  login,
};
