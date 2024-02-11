import { getPost } from "../../api/calls/feed/read.js";
import { errorMsg } from "../error.js";
import { id } from "../../api/constants.js";
import { logout } from "../profile/logout.js";

async function displayPost() {
  try {
    const getSinglePost = await getPost(id);

    const getH1 = document.querySelector("#singlePostH1");
    getH1.classList.add("text-secondary");
    getH1.innerText = getSinglePost.title;

    const imgContainer = document.querySelector("#imgContainer");
    const singlePostImg = document.createElement("img");
    singlePostImg.classList.add("img-fluid");
    singlePostImg.classList.add("rounded-top");
    singlePostImg.classList.add("col-12");
    singlePostImg.src = getSinglePost.media;
    imgContainer.appendChild(singlePostImg);

    const authorContainer = document.querySelector("#singlePostAuthor");
    authorContainer.innerText = `by ${getSinglePost.author.name}`;

    const singlePostDate = document.querySelector("#singlePostDate");
    let neaterDate = new Date(getSinglePost.created).toLocaleDateString(
      "en-US",
      {
        year: "numeric",
        month: "long",
        day: "2-digit",
      }
    );
    singlePostDate.innerText = neaterDate;

    const singlePostBody = document.querySelector("#singlePostBody");
    singlePostBody.innerText = getSinglePost.body;
  } catch {
    errorMsg();
  }
}

function backBtn() {
  const getBtn = document.querySelector("#backBtn");

  getBtn.addEventListener("click", () => {
    window.history.back();
  });
}

displayPost();
backBtn();
logout();
