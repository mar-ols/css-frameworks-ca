import { getPost } from "../../api/calls/feed/read.js";
import { errorMsg } from "../error.js";
import { id } from "../../api/constants.js";
import { loadStorage } from "../storage/localStorage.js";

export async function displayPost() {
  try {
    const getSinglePost = await getPost(id);

    const getProfile = loadStorage("profile");

    const getH1 = document.querySelector("#singlePostH1");
    getH1.classList.add("text-secondary");
    getH1.innerText = getSinglePost.title;

    const imgContainer = document.querySelector("#imgContainer");
    const singlePostImg = document.createElement("img");
    singlePostImg.setAttribute("alt", "No alt text provided");
    singlePostImg.classList.add("img-fluid");
    singlePostImg.classList.add("rounded-top");
    singlePostImg.classList.add("col-12");
    singlePostImg.src = getSinglePost.media;
    imgContainer.appendChild(singlePostImg);

    const authorContainer = document.querySelector("#singlePostAuthor");
    authorContainer.innerText = `by `;

    // Post author link
    const authorLink = document.createElement("a");
    authorLink.classList.add("text-secondary");
    authorLink.innerText = `${getSinglePost.author.name}`;
    authorContainer.appendChild(authorLink);

    authorLink.href =
      "../../profile/index.html?author=" + `${getSinglePost.author.name}`;

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

export function backBtn() {
  const getBtn = document.querySelector("#backBtn");

  getBtn.addEventListener("click", () => {
    window.history.back();
  });
}
