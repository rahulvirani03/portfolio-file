const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 8080;
//DB Connection

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.listen(PORT, console.log(`Server running on PORT ${PORT}`));
//Routes
app.get("/resume-download", (req, res) => {
  res.download(`${process.cwd()}/resume.pdf`);
});
