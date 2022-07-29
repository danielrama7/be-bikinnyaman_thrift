var express = require("express");
var apiRouter = express.Router();
const riwayatPemesananRoutes = require("./API/riwayatPemesananRoutes");
const userRoutes = require("./API/userRoutes");

apiRouter.use("/user", userRoutes);
apiRouter.use("/riwayatPemesanan", riwayatPemesananRoutes);

module.exports = apiRouter;
