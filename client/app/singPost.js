// grap the window link wich contain query
const link = window.location.href;
// split the link on query sign ?
const [header, query] = link.split("?");
console.log(query);
const postId = query.split("=")[1];
console.log(postId);

const resultsContainer = document.getElementById("results");

async function fetchPostData() {
  try {
    const rawData = await fetch(`http://localhost:3000/telegraph/${postId}`);
    console.log(rawData);
    const postData = await rawData.json();
    console.log(postData);
    appanedNewPost(postData);
  } catch (err) {
    console.log(err);
  }
}
fetchPostData();
function appanedNewPost(postData) {
  const { title, name, body } = postData;
  document.querySelector("title").textContent = title;

  const headerContainer = document.createElement("div");
  const postHeader = document.createElement("h1");
  postHeader.textContent = title;
  headerContainer.appendChild(postHeader);
  resultsContainer.appendChild(headerContainer);

  const createdByContainer = document.createElement("div");
  createdByContainer.classList.add("created-by");
  const createdBy = document.createElement("h3");
  createdBy.classList.add("created-by-name");
  createdBy.textContent = name;
  const text = document.createElement('p');
  text.classList.add("created-by-text");
  text.textContent = 'Published by';
  createdByContainer.appendChild(text)
  createdByContainer.appendChild(createdBy);
  resultsContainer.appendChild(createdByContainer);

  const contentContainer = document.createElement("div");
  const postBody = document.createElement("p");
  postBody.textContent = body;
  contentContainer.appendChild(postBody);
  resultsContainer.appendChild(contentContainer);
}
