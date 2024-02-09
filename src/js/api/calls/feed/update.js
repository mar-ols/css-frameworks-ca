import { API_BASE, API_POSTS } from "../../constants.js";
import { loadStorage } from "../../../functions/storage/localStorage.js";

// export async function updatePost(postData) {
//   const token = loadStorage("token");
//   if (!id) {
//     throw new Error("Update requires a post ID.");
//   }
//   const updatePostAPI = API_BASE + API_POSTS + `/` + postData.id;
//   try {

//     const postData = {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//       body: JSON.stringify(postData),
//     };
//     const response = await fetch(createPostAPI, postData);
//     const newPostResult = await response.json();
//     if (newPostResult.ok) {
//       return newPostResult;
//     }

//   } catch (error) {
//     console.error(error);
//   }
// }
