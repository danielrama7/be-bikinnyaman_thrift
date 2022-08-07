require("dotenv").config({ path: "./.env" });
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

cloudinary.getStorage = () => {
  return new CloudinaryStorage({
    cloudinary,
    params: {
      folder: `/Product/`,
      allowedFormats: ["jpeg", "jpg", "png"],
    },
  });
};

cloudinary.deleteCloudPicture = (gambar) => {
  const pictArr = gambar.split("/");
  const cloudFileName = pictArr
    .slice(pictArr.indexOf("Product"))
    .join("/")
    .replace(".jpg", "")
    .replace(".jepg", "")
    .replace(".png", "");

  return cloudinary.uploader.destroy(cloudFileName);
};

module.exports = cloudinary;
