const express = require("express");
const fs = require("fs");
const router = express.Router();
const Papa = require("papaparse");
const dotenv = require("dotenv");

dotenv.config();

router.get("/BlogAndNews", (req, res) => {
  const fileContent = fs.readFileSync("./data/BlogAndNews.csv", "utf-8");

  const jsonFile = Papa.parse(fileContent, {
    header: true,
    dynamicTyping: true,
  });

  res.status(200).json(jsonFile.data);
});

// router.get("/BlogAndNews/:blogAndNewsId", (req, res) => {
//   const id = req.params.blogAndNewsId;
//   const fileContent = fs.readFileSync("./data/BlogAndNews.csv", "utf8");

//   const jsonFile = Papa.parse(fileContent, {
//     header: true,
//     dynamicTyping: true,
//   });

//   let result = jsonFile.data.find((a) => a.ID == id);

//   res.status(200).json(result);
//   console.log(result);
// });

module.exports = router;
