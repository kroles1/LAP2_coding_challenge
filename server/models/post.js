const { init } = require("../dbConfig");
const { ObjectId } = require("mongodb");

class Post {
  constructor(data) {
    this._id = data._id
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
        let postData = { title, name, body }
        const db = await init();
        postData._id = (await db
          .collection("posts")
          .insertOne(postData)).insertedId;
          console.log("*****Inserted new post to db*****\n",postData);
          console.log(postData._id, typeof postData._id);
          // const post = await db.collection('posts).find
        let newPost = new Post(postData);
        resolve(newPost);
      } catch (err) {
        console.log(err);
        reject("Error creating post");
      }
    });
  }
}

module.exports = Post;
