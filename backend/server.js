const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const port = 5000;
mongoose.set("strictQuery", false);

const url = "mongodb://127.0.0.1:27017/schoolapp";
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch(() => {
    console.log("Error in MongoDB connection");
  });
app.get("/", (req, res) => {
  res.send("hello world");
});
app.use(cors());
app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`app is running on port ${port} `);
});
