import { loadStorage } from "../storage/localStorage.js";

const location = window.location.href;

const feed = location.includes("feed");
const profile = location.includes("profile");
const singlePost = location.includes("single");

/**
 * This function takes several parameters, creates and returns HTML that contain the data from the posts in the database.
 * @param {string} image
 * @param {string} title
 * @param {string} name
 * @param {string} date
 * @param {string} body
 * @param {number} id
 * @param {array.<string>} tags
 * @returns HTML containing data from parameters
 */
export function postCard(image, title, name, date, body, id, tags) {
  const getProfile = loadStorage("profile");

  // Post container
  const postCard = document.createElement("div");
  postCard.classList.add(
    "postCard",
    "bg-primary",
    "text-secondary",
    "col-md-8",
    "mx-auto",
    "border",
    "border-secondary",
    "rounded",
    "m-1"
  );

  // Post image container
  const postImageContainer = document.createElement("div");
  // Post image
  const postImage = document.createElement("img");
  postImage.src = `${image}`;
  postImage.setAttribute("alt", "No alt text provided");
  postImage.classList.add("img-fluid", "col-12", "rounded-top");
  postCard.appendChild(postImageContainer);
  postImageContainer.appendChild(postImage);

  // Post title link
  const titleLink = document.createElement("a");
  if (feed) {
    titleLink.href = "singlePost/index.html?id=" + `${id}`;
  }
  if (profile) {
    titleLink.href = "../feed/singlePost/index.html?id=" + `${id}`;
  }
  titleLink.classList.add("text-secondary");
  // Post title text
  const postTitleContainer = document.createElement("h5");
  postTitleContainer.classList.add("px-2", "pt-2");
  postTitleContainer.innerText = `${title}`;
  titleLink.appendChild(postTitleContainer);
  postCard.appendChild(titleLink);

  if (tags) {
    const tagsContainer = document.createElement("div");
    tagsContainer.classList.add("d-flex", "flex-wrap", "m-0");
    postCard.appendChild(tagsContainer);
    for (let i = 0; i < tags.length; i++) {
      const spreadArray = [...tags[i]];
      if (spreadArray.length > 2) {
        const tagContainer = document.createElement("p");
        tagContainer.classList.add(
          "tags",
          "col-3",
          "mx-1",
          "my-2",
          "bg-info",
          "text-black",
          "text-center",
          "border",
          "border-secondary",
          "rounded",
          "small"
        );
        tagContainer.innerText = tags[i];
        tagsContainer.appendChild(tagContainer);
      }
    }
  }

  // Post author
  const postAuthor = document.createElement("p");
  postAuthor.classList.add("px-2", "mb-0");
  postAuthor.innerText = `by `;
  // Post author link
  const authorLink = document.createElement("a");
  if (feed) {
    authorLink.href = "../profile/index.html?author=" + `${name}`;
  }
  if (singlePost) {
    authorLink.href = "../../profile/index.html?author=" + `${name}`;
  }
  authorLink.classList.add("text-secondary");
  authorLink.innerText = `${name}`;
  postAuthor.appendChild(authorLink);

  // Post date
  const neaterDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });
  const postDate = document.createElement("p");
  postDate.classList.add("px-2", "small");
  postDate.innerText = `${neaterDate}`;

  // Post body
  const postBodyContainer = document.createElement("p");
  postBodyContainer.classList.add("px-2");
  postBodyContainer.innerText = `${body}`;

  if (feed || singlePost) {
    postCard.appendChild(postAuthor);
  }
  postCard.appendChild(postDate);
  postCard.appendChild(postBodyContainer);

  if (getProfile.userName === name) {
    //User action container
    const userActions = document.createElement("div");
    userActions.classList.add(
      "userActions",
      "d-flex",
      "justify-content-between"
    );

    // Update post
    const updatePostContainer = document.createElement("p");

    // Update post link
    const updatePostLink = document.createElement("a");
    if (feed) {
      updatePostLink.href = "singlePost/update.html?id=" + `${id}`;
    }
    if (profile) {
      updatePostLink.href = "../feed/singlePost/update.html?id=" + `${id}`;
    }
    updatePostLink.classList.add(
      "text-secondary",
      "small",
      "px-2",
      "text-decoration-underline"
    );
    updatePostLink.innerText = `Update post`;

    // Delete post
    const deletePostContainer = document.createElement("p");
    deletePostContainer.setAttribute("id", `${id}`);
    deletePostContainer.classList.add(
      "deleteBtn",
      "text-danger",
      "small",
      "px-2",
      "text-decoration-underline"
    );
    deletePostContainer.innerText = `Delete post`;

    postCard.appendChild(userActions);
    updatePostContainer.appendChild(updatePostLink);
    userActions.appendChild(updatePostContainer);
    userActions.appendChild(deletePostContainer);
  }

  return postCard;
}
