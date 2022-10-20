const Post = require("../models/post");

async function getAllPosts(req, res) {
  console.log("Hitting get all posts", req.headers.host);
  const port = req.headers.host.slice(-4);
  console.log(port);
  try {
    let posts = await Post.all()
    console.log("from controllers:\n All posts: \n", posts);
    res.status(200).json(posts);
  } catch (err) {
    console.log(err);
    res.status(400).json({err})
  }
}

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
// async function createNewPosts(req, res) {
//   console.log("Hitting post request on Controllers");
//   try {
//     console.log(req.body);
//     // const { title, name, body } = req.body;
//     let newPost = await Post.insertMoreThanPost(req.body);
//     res.status(201).send(newPost);
//   } catch (err) {
//     console.log(err);
//     res.status(400).json({err})
//   }
// }
module.exports = { createNewPost, findById, getAllPosts }