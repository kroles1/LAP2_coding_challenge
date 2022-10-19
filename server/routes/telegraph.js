const express = require("express");
const router = express.Router();
const postControllers = require("../controllers/posts")

router.post('/', postControllers.createNewPost)
router.get('/:id', postControllers.findById)
module.exports = router;
