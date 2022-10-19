const { init } = require("../dbConfig");
const { ObjectId } = require("mongodb");

class Post {
  constructor(data) {
    this.title = data.title;
    this.name = data.name;
    this.body = data.body;
  }

  static findById(id) {
    return new Promise(async (resolve, reject) => {
      try {
        console.log("*********\n findBYId function in models");
        const db = await init();
        let postData = await db
          .collection("posts")
          .find({ _id: ObjectId(id) })
          .toArray();
          console.log(postData);
        let post = new Post({ ...postData[0], id: postData[0]._id });
        resolve(post);
      } catch (err) {
        reject("Post not found");
      }
    });
  }

  static create(title, name, body) {
    return new Promise(async (resolve, reject) => {
      try {
        console.log("**************\n create function in modles");
        const db = await init();
        let postData = await db
          .collection("posts")
          .insertOne({ title, name, body });
          console.log(postData);
        let newPost = new Post(postData.ops[0]);
        resolve(newPost);
      } catch (err) {
        reject("Error creating post");
      }
    });
  }
}

module.exports = Post;
