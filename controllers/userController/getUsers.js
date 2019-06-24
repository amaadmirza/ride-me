const { User } = require("../../models");
module.exports = async (req, res, next) => {
  const dbUsers = await User.find();
  if (dbUsers.length > 0) {
    return res.status(200).json({
      users: dbUsers
    });
  }

  // if no user found, send user an error in response
  const error = new Error("User Not Found");
  error.status = 404;
  return next(error);
};
