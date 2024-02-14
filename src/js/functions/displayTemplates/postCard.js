import { loadStorage } from "../storage/localStorage.js";

const location = window.location.href;

const feed = location.includes("feed");
const profile = location.includes("profile");
const singlePost = location.includes("single");

export function postCard(image, title, name, date, body, id, tags) {
  const getProfile = loadStorage("profile");

  if (getProfile.userName === name) {
    // Post container
    const postCard = document.createElement("div");
    postCard.classList.add("postCard");
    postCard.classList.add("bg-primary");
    postCard.classList.add("text-secondary");
    postCard.classList.add("col-md-8");
    postCard.classList.add("mx-auto");
    postCard.classList.add("border");
    postCard.classList.add("border-secondary");
    postCard.classList.add("rounded");
    postCard.classList.add("m-1");

    // Post image container
    const postImageContainer = document.createElement("div");
    // Post image
    const postImage = document.createElement("img");
    postImage.setAttribute("alt", "No alt text provided");
    postImage.classList.add("img-fluid");
    postImage.classList.add("col-12");
    postImage.classList.add("rounded-top");
    postImage.src = `${image}`;
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
    postTitleContainer.classList.add("px-2");
    postTitleContainer.classList.add("pt-2");
    postTitleContainer.innerText = `${title}`;
    titleLink.appendChild(postTitleContainer);
    postCard.appendChild(titleLink);

    if (tags) {
      const tagsContainer = document.createElement("div");
      tagsContainer.classList.add("d-flex");
      tagsContainer.classList.add("flex-wrap");
      tagsContainer.classList.add("m-0");
      postCard.appendChild(tagsContainer);
      for (let i = 0; i < tags.length; i++) {
        const spreadArray = [...tags[i]];
        if (spreadArray.length > 2) {
          const tagContainer = document.createElement("p");
          // tagContainer.classList.add(`${tags[i]}`);
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
          tagContainer.innerText = tags[i];
          tagsContainer.appendChild(tagContainer);
        }
      }
    }

    // Post author
    const postAuthor = document.createElement("p");
    postAuthor.classList.add("px-2");
    postAuthor.classList.add("mb-0");
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
    postDate.classList.add("px-2");
    postDate.classList.add("small");
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

    //User action container
    const userActions = document.createElement("div");
    userActions.classList.add("userActions");
    userActions.classList.add("d-flex");
    userActions.classList.add("justify-content-between");

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
    updatePostLink.classList.add("text-secondary");
    updatePostLink.classList.add("small");
    updatePostLink.classList.add("px-2");
    updatePostLink.classList.add("text-decoration-underline");
    updatePostLink.innerText = `Update post`;

    // Delete post
    const deletePostContainer = document.createElement("p");
    deletePostContainer.setAttribute("id", `${id}`);
    deletePostContainer.classList.add("deleteBtn");
    deletePostContainer.classList.add("text-danger");
    deletePostContainer.classList.add("small");
    deletePostContainer.classList.add("px-2");
    deletePostContainer.classList.add("text-decoration-underline");
    deletePostContainer.innerText = `Delete post`;

    postCard.appendChild(userActions);
    updatePostContainer.appendChild(updatePostLink);
    userActions.appendChild(updatePostContainer);
    userActions.appendChild(deletePostContainer);

    return postCard;
  } else {
    // Post container
    const postCard = document.createElement("div");
    postCard.classList.add("postCard");
    postCard.classList.add("bg-primary");
    postCard.classList.add("text-secondary");
    postCard.classList.add("col-md-8");
    postCard.classList.add("mx-auto");
    postCard.classList.add("border");
    postCard.classList.add("border-secondary");
    postCard.classList.add("rounded");
    postCard.classList.add("m-1");

    // Post image container
    const postImageContainer = document.createElement("div");
    // Post image
    const postImage = document.createElement("img");
    postImage.setAttribute("alt", "No alt text provided");
    postImage.classList.add("img-fluid");
    postImage.classList.add("col-12");
    postImage.classList.add("rounded-top");
    postImage.src = `${image}`;
    postCard.appendChild(postImageContainer);
    postImageContainer.appendChild(postImage);
    postCard.appendChild(postImageContainer);

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
    postTitleContainer.classList.add("px-2");
    postTitleContainer.classList.add("pt-2");
    postTitleContainer.innerText = `${title}`;
    titleLink.appendChild(postTitleContainer);

    postCard.appendChild(titleLink);

    if (tags) {
      const tagsContainer = document.createElement("div");
      tagsContainer.classList.add("d-flex");
      tagsContainer.classList.add("flex-wrap");
      tagsContainer.classList.add("m-0");
      postCard.appendChild(tagsContainer);
      for (let i = 0; i < tags.length; i++) {
        const spreadArray = [...tags[i]];
        if (spreadArray.length > 2) {
          // const badTag = tags[i].includes(" ");
          // if (!badTag) {
          const tagContainer = document.createElement("p");
          // tagContainer.classList.add(`${tags[i]}`);
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
          tagContainer.innerText = tags[i];
          tagsContainer.appendChild(tagContainer);
          // }
        }
      }
    }

    // Post author
    const postAuthor = document.createElement("p");
    postAuthor.classList.add("px-2");
    postAuthor.classList.add("mb-0");
    postAuthor.innerText = `by `;
    // Post author link
    const authorLink = document.createElement("a");
    if (feed) {
      authorLink.href = "../profile/index.html?author=" + `${name}`;
    }
    if (singlePost) {
      authorLink.href = "../../profile/index.html?author=" + `${name}`;
    }
    if (profile) {
      console.log("hello");
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
    postDate.classList.add("px-2");
    postDate.classList.add("small");
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
    return postCard;
  }
}
