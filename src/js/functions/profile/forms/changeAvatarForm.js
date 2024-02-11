import { changeAvatar } from "../../../api/calls/profile/changeAvatar.js";
import { loadStorage } from "../../storage/localStorage.js";
import { saveStorage } from "../../storage/localStorage.js";

export function getAvatarData() {
  try {
    const localStorageProfile = loadStorage("profile");
    console.log(localStorageProfile);
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
