const { init } = require ('../dbConfig')
const { ObjectId } = require('mongodb')

class Post {
    constructor(data) {
        this.title = data.title;
        this.name = data.name;
        this.body = data.body
    }
}


module.exports = Post