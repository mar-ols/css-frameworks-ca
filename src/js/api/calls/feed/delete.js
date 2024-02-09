import { API_BASE, API_POSTS } from "../../constants.js";
import { loadStorage } from "../../../functions/storage/localStorage.js";

export async function removePost(id) {
  const token = loadStorage("token");
  try {
    if (!id) {
      throw new Error("Delete requires a post ID.");
    }
    const removePostAPI = API_BASE + API_POSTS + `/` + id;
    const response = await fetch(removePostAPI, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await response.json();
    if (response.ok) {
      return result;
    }
  } catch (error) {
    console.error(error);
  }
}
