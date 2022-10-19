const Post = require("../models/post");

async function createNewPost(req, res) {
  console.log("Hitting post request on Controllers");
  try {
    console.log(req.body);
    const { title, name, body } = req.body;
    let newPost = await Post.create(title, name, body);
    res.status(201).send(newPost);
  } catch (err) {
    console.log(err);
    res.status(400).json({err})
  }
}

async function findById(req, res) {
    console.log("Hitting find a specific post on conrollers");
    try{
        console.log(req.params.id);
        const post = await Post.findById(req.params.id)
        console.log(post);
        res.status(302).json(post)
    }catch(err) {
        console.log(err);
        res.status(404).json({err})
    }
}
module.exports = { createNewPost, findById }