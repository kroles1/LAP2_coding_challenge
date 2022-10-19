
const formData = document.getElementById('new-post-form')

formData.addEventListener('submit', submitNewPost)

async function submitNewPost(e) {
    e.preventDefault();
    let postData = {
        title: e.target.title.value,
        name: e.target.name.value,
        content: e.target.content.value,
    }
    console.log(postData);
    const newPost = await fetch('http://localhost:3000/telegraph', {
        method: 'POST',
        body: JSON.stringify(postData)
    }).then(res => {
        console.log(res);
        return res.json()
    }).then(data => {
        console.log(data);
        return data
    }).catch(err => {
        console.log(err);
    })
    console.log("out of fetch function");
    console.log(newPost.title);
}
