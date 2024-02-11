import {
  API_BASE,
  API_PROFILES,
  authorName,
  API_POSTS,
} from "../../../constants.js";
import { loadStorage } from "../../../../functions/storage/localStorage.js";

export async function getOthersPosts() {
  const getUserProfileAPI = `${API_BASE}${API_PROFILES}/${authorName}${API_POSTS}`;
  const token = loadStorage("token");
  try {
    const response = await fetch(getUserProfileAPI, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const otherUserPosts = await response.json();
    if (response.ok) {
      return otherUserPosts;
    }
  } catch (error) {
    console.error(error);
  }
}
