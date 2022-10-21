const Post = require("../models/post");

async function getAllPosts(req, res) {
  try {
    let posts = await Post.all()
    res.status(200).json(posts);
  } catch (err) {
    res.status(400).json({err})
  }
}

async function createNewPost(req, res) {
  try {
    const { title, name, body } = req.body;
    let newPost = await Post.create(title, name, body);
    res.status(201).send(newPost);
  } catch (err) {
    res.status(400).json({err})
  }
}

async function findById(req, res) {
    try{
        const post = await Post.findById(req.params.id)
        res.status(302).json(post)
    }catch(err) {
        res.status(404).json({err})
    }
}
module.exports = { createNewPost, findById, getAllPosts }