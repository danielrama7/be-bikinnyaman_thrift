const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const apiRouter = require("./routes/index");

const app = express();

const allowedOrigin = [
  "http://localhost:3000/",
  "http://localhost:3000",
  "https://bikinnyaman-thrift.vercel.app/",
  "https://bikinnyaman-thrift.vercel.app",
];

const corsOptions = {
  origin: allowedOrigin,
  credentials: true, //access-control-allow-cr0edentials:true
  optionSuccessStatus: 200,
  allowedHeaders: ["content-type", "Authorization"],
};

app.use(cors(corsOptions));

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) =>
  res.send("Selamat Datang di API Bikinnyaman_thrift")
);
app.use("/api", apiRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`This App is Running on port ${PORT}`));

module.exports = app;
