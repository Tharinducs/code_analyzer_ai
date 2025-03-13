const express = require("express");
const { explainCode } = require("../controllers/codeController");

const router = express.Router();

router.post("/explain-code", explainCode);

module.exports = router;