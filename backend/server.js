const express = require("express");
const { default: mongoose } = require("mongoose");
require("dotenv").config();
const userRoutes = require("./routes/userRoutes")

const app = express();

const PORT = process.env.PORT;
const DB_URI = process.env.MONGO_URI;

// middleware
app.use(express.json())

// routes
app.use("/api/user", userRoutes);

mongoose
  .connect(DB_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server listening at ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

app.get("/", (req, res) => {
  res.send("Hello from backend");
});

let serverState = true;
app.get("/health", (req, res) => {
  const currentTime = new Date().toLocaleTimeString();
  if (serverState) {
    res.status(200).json({
      servername: "job-listing-server",
      serverStatus: "active",
      time: currentTime,
    });
  } else {
    res.status(500).json({
      servername: "job-listing-server",
      serverStatus: "inactive",
      time: currentTime,
    });
  }
});

// error handler middleware
app.use((req, res, next) => {
  const err = new Error("Something went wrong! Please try after some time")
  err.status = 404;
  next(err);
})

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    error: {
      status: err.status || 500,
      message: err.message
    }
  })
})
