import { loadStorage } from "../storage/localStorage.js";
import { postCard } from "../displayTemplates/postCard.js";
import { userFeedback } from "../userMessages/feed/feedbackTemplate.js";
import { removePost } from "../../api/calls/feed/delete.js";

/**
 * This function searches the title and body of the posts to match the value of the search bar input.
 */
export function searchPosts() {
  const getSearchInput = document.querySelector("#search");
  const getSearchForm = document.querySelector("#searchForm");
  const getPostsSection = document.querySelector(".postsSection");
  const storagePosts = loadStorage("posts");

  getSearchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    getPostsSection.innerHTML = "";
    const searchValue = getSearchInput.value.trim().toLowerCase();
    storagePosts.filter((posts) => {
      if (posts.title && posts.body && posts.media) {
        const postTitle = posts.title.trim().toLowerCase();
        const postBody = posts.body.trim().toLowerCase();
        if (postTitle.includes(searchValue) || postBody.includes(searchValue)) {
          getSearchInput.value = "";

          getPostsSection.append(
            postCard(
              posts.media,
              posts.title,
              posts.author.name,
              posts.created,
              posts.body,
              posts.id,
              posts.tags
            )
          );

          if (searchValue.length === 0) {
            location.reload();
          }

          const getDeleteBtn = document.getElementById(`${posts.id}`);
          if (getDeleteBtn) {
            getDeleteBtn.addEventListener("click", () => {
              removePost(posts.id);
              userFeedback(`Post deleted!`);
            });
          }
        }
      }
    });
  });
}
