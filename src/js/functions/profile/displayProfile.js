import { getProfile } from "../../api/calls/profile/getProfile.js";
import { errorMsg } from "../error.js";
import { setUserPic } from "./profilePic.js";

export async function displayProfile() {
  try {
    const profile = await getProfile();

    const userName = document.querySelector("#profileUsername");
    userName.innerText = `${profile.name}`;

    if (profile.avatar !== null) {
      const userAvatar = document.querySelector(".defaultImg");
      userAvatar.classList.add("visually-hidden");
      setUserPic(profile.avatar);
    }

    const following = document.querySelector(".following");
    following.innerText = `Following (${profile._count.following})`;
    const followers = document.querySelector(".followers");
    followers.innerText = `Followers (${profile._count.followers})`;
  } catch (error) {
    errorMsg();
    console.error(error);
  }
}
