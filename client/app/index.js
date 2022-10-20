const formData = document.getElementById("new-post-form");

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
  location.href = `http://127.0.0.1:5500/client/singlePost.html?_id=${newPost._id}`;
}


function darkMode() {
  const body = document.body;
  body.classList.toggle("dark-mode");
  const btn = document.getElementById("submit");
  btn.classList.toggle("dark-mode")

}
