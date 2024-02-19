import { getUserPosts } from "../../api/calls/profile/getUserPosts.js";
import { authorName } from "../../api/constants.js";
import { errorMsg } from "../error.js";
import { removePost } from "../../api/calls/feed/delete.js";
import { userFeedback } from "../userMessages/feed/feedbackTemplate.js";
import { postCard } from "../displayTemplates/postCard.js";

export async function displayUserPosts() {
  try {
    const posts = await getUserPosts();

    const uniquePost = new Set();
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
              authorName,
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
  } catch (error) {
    errorMsg();
    console.error(error);
  }
}
