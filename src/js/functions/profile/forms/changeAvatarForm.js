import { changeAvatar } from "../../../api/calls/profile/changeAvatar.js";
import { loadStorage } from "../../storage/localStorage.js";
import { saveStorage } from "../../storage/localStorage.js";

/**
 * This function takes the values from a text input to update or set the users avatar on their profile page. It calls on the changeAvatar function to send in the new or updated image and saves the updated user info in localStorage.
 */
export function getAvatarData() {
  try {
    const localStorageProfile = loadStorage("profile");
    const changeAvatarForm = document.querySelector("#changeAvatarForm");

    if (changeAvatarForm) {
      changeAvatarForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const form = event.target;

        const avatar = form.changeAvatar.value;

        const newAvatar = {
          avatar,
        };
        changeAvatar(newAvatar);

        saveStorage("profile", {
          userName: localStorageProfile.userName,
          userEmail: localStorageProfile.userEmail,
          userAvatar: avatar,
        });
      });
    }
  } catch (error) {
    console.error(error);
  }
}
