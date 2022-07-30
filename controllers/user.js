require("dotenv").config({ path: "./.env" });
const db = require("../models/index.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

module.exports.login = async function (req, res) {
  try {
    const user = await db.user.findOne({
      where: { email: req.body.email },
    });
    if (user) {
      const password = bcrypt.compareSync(req.body.password, user.password);
      if (password) {
        const token = await jwt.sign(
          {
            id: user.id,
            namaLengkap: user.namaLengkap,
            email: user.email,
          },
          process.env.JWT_SECRET_TOKEN,
          { expiresIn: "1h" }
        );
        res.cookie("jwt", token, {
          maxAge: 60 * 60 * 1000,
          httpOnly: true,
          secure: true,
          sameSite: "none",
        });
        return res.status(200).json({
          success: true,
          message: "Login berhasil",
          data: {
            id: user.id,
            email: user.email,
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

module.exports.editInformasiAkun = async function (req, res) {
  try {
    const token = req.cookies.jwt;
    const jwtPayload = jwt.verify(
      token,
      process.env.JWT_SECRET_TOKEN?.toString() || ""
    );
    const id = jwtPayload.id;
    const {
      namaLengkap,
      alamat,
      provinsi,
      kabupatenKota,
      kecamatan,
      kelurahan,
      kodePos,
      noTelp,
    } = req.body;

    const editData = {
      namaLengkap,
      alamat,
      provinsi,
      kabupatenKota,
      kecamatan,
      kelurahan,
      kodePos,
      noTelp,
    };
    console.log(jwtPayload);
    const editedData = await db.user.findByPk(id);

    if (!editedData) {
      return res.status(404).json({
        sucess: false,
        message: "User tidak ditemukan",
      });
    }

    editedData.update(editData);

    return res.status(200).json({
      success: true,
      data: editedData,
      message: "Edit berhasil",
    });
  } catch (error) {
    return res.status(400).json({
      sucess: false,
      error: error,
      message: error.message,
    });
  }
};

module.exports.logout = (req, res) => {
  res.cookie("jwt", "", { maxAge: 1 });

  return res.status(200).json({
    success: true,
    message: "Logout Success",
  });
};

module.exports.register = async function (req, res) {
  const { namaLengkap, email, password } = req.body;

  const updateData = {
    namaLengkap,
    email,
    password,
  };

  try {
    // check if name exist
    const existEmail = await db.user.findOne({ where: { email } });
    if (existEmail) {
      return res.status(409).json({
        success: false,
        message: "Email sudah digunakan",
      });
    }
    updateData.password = await bcrypt.hash(password, 12);
    const updatedData = await db.user.create(updateData);

    return res.status(200).json({
      success: true,
      data: updatedData,
      message: "Daftar Berhasil!",
    });
  } catch (error) {
    return res.status(400).json({
      sucess: false,
      error: error,
      message: error.message,
    });
  }
};
