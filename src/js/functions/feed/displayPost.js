import { getPost } from "../../api/calls/feed/read.js";

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

async function displayPost() {
  const getSinglePost = await getPost(id);

  const getH1 = document.querySelector("#singlePostH1");
  getH1.innerText = getSinglePost.title;

  const imgContainer = document.querySelector("#imgContainer");
  const singlePostImg = document.createElement("img");
  singlePostImg.classList.add("img-fluid");
  singlePostImg.classList.add("col-12");
  singlePostImg.src = getSinglePost.media;
  imgContainer.appendChild(singlePostImg);

  const singlePostDate = document.querySelector("#singlePostDate");
  let neaterDate = new Date(getSinglePost.created).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });
  singlePostDate.innerText = neaterDate;

  const singlePostBody = document.querySelector("#singlePostBody");
  singlePostBody.innerText = getSinglePost.body;
}

displayPost();

function backBtn() {
  const getBtn = document.querySelector("#backBtn");

  getBtn.addEventListener("click", () => {
    window.history.back();
  });
}

backBtn();
