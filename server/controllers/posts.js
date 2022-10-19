const Post = require('../modles/post')


async function createNewPost(req, res) {
    console.log('Hitting post request on Controllers');
    try{
        console.log(req.body);
        const { title, name, body } = req.body
        const newPost = await Post.creat(title, name, body)
        res.status(201).send(newPost)
    }catch(err) {
        console.log(err);
    }
}