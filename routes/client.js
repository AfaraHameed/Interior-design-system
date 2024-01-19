const express = require("express");
const router = express.Router();
const clientController = require('../controller/cllient')
const { verifyTokenHandler } = require("../middlewares/jwtHandler");
router.get('/faq',[verifyTokenHandler],clientController.getFAQ)
module.exports = router