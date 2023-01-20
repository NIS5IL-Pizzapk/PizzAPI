const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = (req, res, next) => {
  try {
    console.log("req.headers.authorization", req.headers.authorization);
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, process.env.JWT_KEY);
    console.log("decodedToken", decodedToken);
    const userId = decodedToken.userId;
    const admin = decodedToken.admin;
    req.auth = {
      userId: userId,
      admin: admin,
    };
    next();
  } catch (error) {
    res.status(401).json({
      error: req.headers.authorization ? error : "No token provided",
    });
  }
};
