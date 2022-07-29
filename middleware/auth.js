const checkLogin = (req, res, next) => {
  const token = req.cookies.jwt;
  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Kamu belum login",
    });
  }
  next();
};

module.exports = { checkLogin };
