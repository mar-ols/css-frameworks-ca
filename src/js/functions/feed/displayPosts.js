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
    posts.forEach((post) => {
      if (post.title && post.body && post.media) {
        const postContent = `${post.title}${post.body}`;
        if (!uniquePost.has(postContent)) {
          uniquePost.add(postContent);

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
    // filterPosts(posts);
  } catch {
    errorMsg();
  }
}
