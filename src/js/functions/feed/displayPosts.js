import { getPosts } from "../../api/calls/feed/read.js";
import { errorMsg } from "../../error.js";
import { loadStorage } from "../storage/localStorage.js";
import { removePost } from "../../api/calls/feed/delete.js";
import { feedUserFeedback } from "../userMessages/feed/postFeedbackTemplate.js";

export async function displayPosts() {
  try {
    const posts = await getPosts();
    const uniquePost = new Set();

    const getProfile = loadStorage("profile");

    posts.forEach((post) => {
      if (post.title && post.body && post.media) {
        const postContent = `${post.title}${post.body}`;

        if (!uniquePost.has(postContent)) {
          uniquePost.add(postContent);

          const getPostsSection = document.querySelector("#postsSection");

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
          const postTitleContainer = document.createElement("p");
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

          getPostsSection.appendChild(postCard);
          postCard.appendChild(titleLink);
          titleLink.appendChild(postTitleContainer);
          postCard.appendChild(postAuthor);
          postCard.appendChild(postDate);
          postCard.appendChild(postBodyContainer);

          if (getProfile.userName === post.author.name) {
            //User action container
            const userActions = document.createElement("div");
            userActions.classList.add("userActions");
            userActions.classList.add("d-flex");
            userActions.classList.add("justify-content-between");

            // Update post
            const updatePostContainer = document.createElement("p");

            // Update post link
            const updatePostLink = document.createElement("a");
            updatePostLink.href = "singlePost/update.html?id=" + `${post.id}`;
            updatePostLink.classList.add("text-secondary");
            updatePostLink.classList.add("small");
            updatePostLink.classList.add("px-2");
            updatePostLink.classList.add("text-decoration-underline");
            updatePostLink.innerText = `Update post`;

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
            updatePostContainer.appendChild(updatePostLink);
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
  } catch {
    errorMsg();
  }
}
