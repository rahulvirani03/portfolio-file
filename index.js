require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

//DB Connection

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.listen(
  process.env.PORT || 5000,
  console.log(`Server running on PORT ${process.env.PORT}`)
);
//Routes
app.get("/resume-download", (req, res) => {
  res.download(`${process.cwd()}/resume.pdf`);
});
