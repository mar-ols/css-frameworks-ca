import { authorName } from "../../api/constants.js";
import { loadStorage } from "../storage/localStorage.js";

/**
 * This function displays an input field to set or change a users avatar on their profile, and removes it on profiles of other users.
 */
export function displayChangeAvatar() {
  const getStorageProfile = loadStorage("profile");
  const editProfilePic = document.querySelector("#editProfilePic");

  if (getStorageProfile.userName !== authorName) {
    const getChangeAvatarForm = document.querySelector("#changeAvatarForm");
    editProfilePic.remove();
    getChangeAvatarForm.remove();
  }

  const hiddenDiv = document.querySelector(".visually-hidden");
  editProfilePic.addEventListener("click", () => {
    hiddenDiv.classList.toggle("visually-hidden");
  });
}
