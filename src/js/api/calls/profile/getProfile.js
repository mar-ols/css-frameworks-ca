import { API_BASE, API_PROFILES, authorName } from "../../constants.js";
import { loadStorage } from "../../../functions/storage/localStorage.js";

export async function getProfile() {
  const getProfileAPI = `${API_BASE}${API_PROFILES}/${authorName}`;
  const token = loadStorage("token");
  try {
    const response = await fetch(getProfileAPI, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const user = await response.json();
    if (response.ok) {
      return user;
    }
  } catch (error) {
    console.error(error);
  }
}
