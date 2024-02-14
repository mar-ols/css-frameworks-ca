import { getPosts } from "../../api/calls/feed/read.js";
import { errorMsg } from "../error.js";
import { removePost } from "../../api/calls/feed/delete.js";
import { userFeedback } from "../userMessages/feed/feedbackTemplate.js";
import { postCard } from "../displayTemplates/postCard.js";
// import { filterPosts } from "./filterPosts.js";
import { searchPosts } from "./searchPosts.js";

export async function displayPosts() {
  try {
    const posts = await getPosts();
    const uniquePost = new Set();

    searchPosts();

    const getPostsSection = document.querySelector(".postsSection");
    const getFilterSelector = document.querySelector(".dropdown-menu");
    posts.forEach((post) => {
      if (post.title && post.body && post.media) {
        const postContent = `${post.title}${post.body}`;
        if (!uniquePost.has(postContent)) {
          uniquePost.add(postContent);

          // if (post.tags) {
          //   for (let i = 0; i < post.tags.length; i++) {
          //     const spreadArray = [...post.tags[i]];
          //     if (spreadArray.length > 2) {
          //       console.log()
          //     }
          //   }
          // }

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

          // filterPosts(post.tags);

          const getDeleteBtn = document.getElementById(`${post.id}`);
          if (getDeleteBtn) {
            getDeleteBtn.addEventListener("click", () => {
              removePost(post.id);
              userFeedback(`Post deleted!`);
            });
          }
        }
      }
    });
  } catch {
    errorMsg();
  }
}
