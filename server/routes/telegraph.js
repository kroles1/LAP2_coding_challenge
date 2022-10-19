const express = require("express");
const router = express.Router();
const postControllers = require("../controllers/posts")

router.get('/:id', postControllers.findById)
module.exports = router;
