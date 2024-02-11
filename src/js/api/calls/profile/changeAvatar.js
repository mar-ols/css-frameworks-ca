import { API_BASE, API_PROFILES, API_MEDIA } from "../../constants.js";
import { loadStorage } from "../../../functions/storage/localStorage.js";
import { userFeedback } from "../../../functions/userMessages/feed/feedbackTemplate.js";

export async function changeAvatar(avatar) {
  const getUser = loadStorage("profile");
  const token = loadStorage("token");

  const changeAvatarAPI = `${API_BASE}${API_PROFILES}/${getUser.userName}${API_MEDIA}`;

  try {
    const postAvatar = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(avatar),
    };
    const response = await fetch(changeAvatarAPI, postAvatar);
    const result = await response.json();
    if (response.ok) {
      userFeedback(`Avatar updated`);
      return result;
    }
  } catch (error) {
    console.error(error);
  }
}
