import { getPost } from "../../api/calls/feed/read.js";
import { errorMsg } from "../error.js";
import { id } from "../../api/constants.js";

/**
 * This function creates the HTML to display a single post from the database. It takes the getPost function to retrieve the info to display in the post.
 */
export async function displayPost() {
  try {
    const getSinglePost = await getPost(id);

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

    if (getSinglePost.tags) {
      const postTags = document.querySelector(".singlePostTags");
      for (let i = 0; i < getSinglePost.tags.length; i++) {
        const spreadArray = [...getSinglePost.tags[i]];
        if (spreadArray.length > 2) {
          const tagContainer = document.createElement("p");
          tagContainer.classList.add("tags");
          tagContainer.classList.add("col-3");
          tagContainer.classList.add("mx-1");
          tagContainer.classList.add("my-2");
          tagContainer.classList.add("bg-info");
          tagContainer.classList.add("text-black");
          tagContainer.classList.add("text-center");
          tagContainer.classList.add("border");
          tagContainer.classList.add("border-secondary");
          tagContainer.classList.add("rounded");
          tagContainer.classList.add("small");
          tagContainer.innerText = getSinglePost.tags[i];
          postTags.appendChild(tagContainer);
        }
      }
    }

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

/**
 * This function makes the back button on the single post page functional.
 */
export function backBtn() {
  const getBtn = document.querySelector("#backBtn");

  getBtn.addEventListener("click", () => {
    window.history.back();
  });
}
