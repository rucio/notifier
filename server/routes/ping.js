const express = require("express");
const router = express.Router();
const port = 3004;

router.get("/", (req, res) => {
  res.json({ info: `Rucio Notifier Running on ${port}` });
});

module.exports = router