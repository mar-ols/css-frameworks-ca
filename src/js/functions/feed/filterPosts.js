// import { removePost } from "../../api/calls/feed/delete.js";
// import { userFeedback } from "../userMessages/feed/feedbackTemplate.js";

// export function filterPosts(posts) {
//   const getPostsSection = document.querySelector(".postsSection");
//   const getFilterBtn = document.querySelector("#filterByTag");
//   const getTagsOptions = document.querySelectorAll(".tags");

//   const filterTaggedPosts = new Set();

//   getFilterBtn.addEventListener("click", () => {
//     posts.forEach((post) => {
//       if (post.tags) {
//         for (let i = 0; i < post.tags.length; i++) {
//           const spreadArray = [...post.tags[i]];
//           if (spreadArray.length > 2) {
//             console.log(post.tags);
//           }
//         }
//       }

//       // if (post.title && post.body && post.media) {
//       //   const filteredPostContent = `${post.title}${post.body}`;
//       //   if (!filterTaggedPosts.has(filteredPostContent)) {
//       //     filterTaggedPosts.add(filteredPostContent);

//       //     const getDeleteBtn = document.getElementById(`${post.id}`);
//       //     if (getDeleteBtn) {
//       //       getDeleteBtn.addEventListener("click", () => {
//       //         removePost(post.id);
//       //         userFeedback(`Post deleted!`);
//       //       });
//       //     }
//       //   }
//       // }
//     });
//   });
// }
