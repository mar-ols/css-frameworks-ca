import { postCard } from "../displayTemplates/postCard.js";
import { removePost } from "../../api/calls/feed/delete.js";
import { userFeedback } from "../userMessages/feed/feedbackTemplate.js";
import { displayPosts } from "./displayPosts.js";

/**
 * This function takes an array of posts as the parameter and filters out any posts that don't have tags. It also filters out tags that are empty arrays as some tags return as true despite not having any values.
 * @param {array} posts Array containing all the posts from the database
 */
export function filterPosts(posts) {
  const getPostsSection = document.querySelector(".postsSection");
  const getFilterBtn = document.querySelector("#filterByTag");
  const getAllPostsBtn = document.querySelector("#allPosts");

  getFilterBtn.addEventListener("click", () => {
    const filteredPosts = new Set();
    getPostsSection.innerHTML = "";
    posts.filter((post) => {
      for (let i = 0; i < post.tags.length; i++) {
        const postContent = `${post.title}${post.body}`;
        const spreadArray = [...post.tags[i]];
        if (spreadArray.length > 2) {
          if (!filteredPosts.has(postContent)) {
            filteredPosts.add(postContent);

            getPostsSection.append(
              postCard(
                post.media,
                post.title,
                post.author.name,
                post.created,
                post.body,
                post.id,
                post.tags
              )
            );
          }
        }
        const getDeleteBtn = document.getElementById(`${post.id}`);
        if (getDeleteBtn) {
          getDeleteBtn.addEventListener("click", () => {
            removePost(post.id);
            userFeedback(`Post deleted!`);
          });
        }
      }
    });
  });

  getAllPostsBtn.addEventListener("click", () => {
    displayPosts();
  });
}
