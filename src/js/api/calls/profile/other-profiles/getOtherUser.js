import { API_BASE, API_PROFILES, authorName } from "../../../constants.js";
import { loadStorage } from "../../../../functions/storage/localStorage.js";
import { loader } from "../../../../functions/loader.js";

export async function getOtherUser() {
  loader();
  const getUserProfileAPI = `${API_BASE}${API_PROFILES}/${authorName}`;
  const token = loadStorage("token");
  try {
    const response = await fetch(getUserProfileAPI, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const user = await response.json();
    if (response.ok) {
      const getLoader = document.querySelector(".loader");
      if (getLoader) {
        getLoader.classList.remove("loader");
      }
      return user;
    }
  } catch (error) {
    console.error(error);
  }
}
