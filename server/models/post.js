const { init } = require("../dbConfig");
const { ObjectId } = require("mongodb");

class Post {
  constructor(data) {
    this._id = data._id;
    this.title = data.title;
    this.name = data.name;
    this.body = data.body;
  }

  static all() {
    return new Promise(async (resolve, reject) => {
      try {
        const db = await init();
        const postsData = await db.collection("post").find().toArray();
        let posts = postsData.map(
          (post) => new Post({ ...post, id: post._id })
        );
        resolve(posts);
      } catch (err) {
        reject("empty list");
      }
    });
  }

  static findById(id) {
    return new Promise(async (resolve, reject) => {
      try {
        const db = await init();
        let postData = await db
          .collection("posts")
          .find({ _id: ObjectId(id) })
          .toArray();
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
        let postData = { title, name, body };
        const db = await init();
        postData._id = (
          await db.collection("posts").insertOne(postData)
        ).insertedId;
        let newPost = new Post(postData);
        resolve(newPost);
      } catch (err) {
        reject("Error creating post");
      }
    });
  }
}

module.exports = Post;
