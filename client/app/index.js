const formData = document.getElementById("new-post-form");
const resultsContainer = document.getElementById("results");


formData.addEventListener("submit", submitNewPost);



async function submitNewPost(e) {
  e.preventDefault();
  let postData = {
    title: e.target.title.value,
    name: e.target.name.value,
    body: e.target.content.value,
  };
  console.log(postData);
  const newPost = await fetch("http://localhost:3000/telegraph", {
    method: "POST",
    body: JSON.stringify(postData),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => {
      console.log(err);
    });
  console.log("out of fetch function");
  console.log(newPost);
  appanedNewPost(newPost);
//   redirectToSinglePage(newPost._id)
location.href = `http://127.0.0.1:5500/client/singlePost.html?_id=${newPost._id}`
}

function appanedNewPost(postData) {
    const { title, name, body } = postData;
    const postHeader = document.createElement('h1')
    postHeader.textContent = title
    resultsContainer.appendChild(postHeader)
  
    const createdBy = document.createElement('h3')
    createdBy.textContent = name
    resultsContainer.appendChild(createdBy)
  
    const postBody = document.createElement('p')
    postBody.textContent = body
    resultsContainer.appendChild(postBody)

    
  }