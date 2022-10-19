const { init } = require ('../dbConfig')
const { ObjectId } = require('mongodb')

class Post {
    constructor(data) {
        this.title = data.title;
        this.user_name = data.user_name;
        this.body = data.body
    }
}