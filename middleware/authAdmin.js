const checkLoginAdmin = async (req, res, next) => {
  const token = req.cookies.jwtAdmin;
  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Kamu belum login",
    });
  }
  next();
};

module.exports = { checkLoginAdmin };
