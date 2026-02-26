const express = require("express");
const fs = require("fs");
const router = express.Router();
const Papa = require("papaparse");
const { delimiter } = require("path");

router.get("/BlogAndNews", (req, res) => {
  const fileContent = fs.readFileSync("./data/BlogAndNews.csv", "utf-8");

  const jsonFile = Papa.parse(fileContent, {
    header: true,
    dynamicTyping: true,
  });

  res.status(200).json(jsonFile.data);
});

module.exports = router;
