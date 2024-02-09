import { getPosts } from "../feed/read.js";
import { loadStorage } from "../../../functions/storage/localStorage.js";
import { removePost } from "../feed/delete.js";
import { feedUserFeedback } from "../../../functions/userMessages/feed/postFeedbackTemplate.js";
import { setUserPic } from "../../../functions/profile/profilePic.js";

async function getUsersOwnPosts() {
  const posts = await getPosts();
  const uniquePost = new Set();
  const getProfile = loadStorage("profile");

  if (getProfile.userAvatar) {
    setUserPic(getProfile.userAvatar);
  }

  const setUserName = document.querySelector("#profileUsername");
  setUserName.innerText = getProfile.userName;

  posts.forEach((post) => {
    if (post.author.name === getProfile.userName) {
      if (post.title && post.body && post.media) {
        const postContent = `${post.title}${post.body}`;
        if (!uniquePost.has(postContent)) {
          uniquePost.add(postContent);

          const getPostsSection = document.querySelector("#usersOwnPosts");

          // Post container
          const postCard = document.createElement("div");
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
          postImage.classList.add("img-fluid");
          postImage.classList.add("rounded");
          postImage.src = `${post.media}`;
          postCard.appendChild(postImageContainer);
          postImageContainer.appendChild(postImage);

          // Post title link
          const titleLink = document.createElement("a");
          titleLink.href = "singlePost/index.html?id=" + `${post.id}`;
          titleLink.classList.add("text-secondary");
          // Post title text
          const postTitleContainer = document.createElement("h3");
          postTitleContainer.innerText = postTitleContainer;
          postTitleContainer.classList.add("px-2");
          postTitleContainer.classList.add("pt-2");
          postTitleContainer.innerText = `${post.title}`;

          // Post author
          const postAuthor = document.createElement("p");
          postAuthor.classList.add("px-2");
          postAuthor.classList.add("mb-0");
          postAuthor.innerText = `by ${post.author.name}`;

          // Post date
          const neaterDate = new Date(post.created).toLocaleDateString(
            "en-US",
            {
              year: "numeric",
              month: "long",
              day: "2-digit",
            }
          );
          const postDate = document.createElement("p");
          postDate.classList.add("px-2");
          postDate.classList.add("small");
          postDate.innerText = `${neaterDate}`;

          // Post body
          const postBodyContainer = document.createElement("p");
          postBodyContainer.classList.add("px-2");
          postBodyContainer.innerText = `${post.body}`;

          getPostsSection.appendChild(postCard);
          postCard.appendChild(titleLink);
          titleLink.appendChild(postTitleContainer);
          postCard.appendChild(postAuthor);
          postCard.appendChild(postDate);
          postCard.appendChild(postBodyContainer);

          // User action container
          const userActions = document.createElement("div");
          userActions.classList.add("userActions");
          userActions.classList.add("d-flex");
          userActions.classList.add("justify-content-between");

          // Update post
          const updatePostContainer = document.createElement("p");
          updatePostContainer.classList.add("text-secondary");
          updatePostContainer.classList.add("small");
          updatePostContainer.classList.add("px-2");
          updatePostContainer.classList.add("text-decoration-underline");
          updatePostContainer.innerText = `Update post`;

          // Delete post
          const deletePostContainer = document.createElement("p");
          deletePostContainer.setAttribute("id", `${post.id}`);
          deletePostContainer.classList.add("deleteBtn");
          deletePostContainer.classList.add("text-danger");
          deletePostContainer.classList.add("small");
          deletePostContainer.classList.add("px-2");
          deletePostContainer.classList.add("text-decoration-underline");
          deletePostContainer.innerText = `Delete post`;

          postCard.appendChild(userActions);
          userActions.appendChild(updatePostContainer);
          userActions.appendChild(deletePostContainer);

          const getDeleteBtn = document.getElementById(`${post.id}`);
          getDeleteBtn.addEventListener("click", () => {
            removePost(post.id);
            feedUserFeedback(`Post deleted!`);
          });
        }
      }
    }
  });
}

getUsersOwnPosts();
