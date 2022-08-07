require("dotenv").config({ path: "./.env" });
const db = require("../models/index.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

module.exports.loginAdmin = async function (req, res) {
  try {
    const admin = await db.admin.findOne({
      where: { email: req.body.email },
    });
    if (admin) {
      const password = bcrypt.compareSync(req.body.password, admin.password);
      if (password) {
        const token = await jwt.sign(
          {
            id: admin.id,
            email: admin.email,
          },
          process.env.JWT_SECRET_TOKEN_ADMIN,
          { expiresIn: "1h" }
        );
        res.cookie("jwtAdmin", token, {
          maxAge: 60 * 60 * 1000,
          httpOnly: true,
          secure: true,
          sameSite: "none",
        });
        return res.status(200).json({
          success: true,
          message: "Login berhasil",
          data: {
            id: admin.id,
            email: admin.email,
            token,
          },
        });
      }
      return res.status(401).json({
        success: false,
        message: "Email and Password tidak cocok",
      });
    }
    return res.status(401).json({
      success: false,
      message: "Email tidak ditemukan",
    });
  } catch (error) {
    return res.status(400).json({
      sucess: false,
      error: error,
      message: error.message,
    });
  }
};

module.exports.logoutAdmin = (req, res) => {
  res.cookie("jwtAdmin", "", { maxAge: 1 });

  return res.status(200).json({
    success: true,
    message: "Logout Success",
  });
};
