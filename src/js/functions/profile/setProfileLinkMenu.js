import { loadStorage } from "../storage/localStorage.js";
import { authorName } from "../../api/constants.js";

export function setProfileLink() {
  const getStorageProfile = loadStorage("profile");
  const loggedInUser = getStorageProfile.userName;

  const getProfileLinkInProfile = document.querySelector(
    ".setProfileLinkInProfile"
  );
  const getProfileLinkInFeed = document.querySelector(".setProfileLinkInFeed");
  const getProfileLinkInSinglePost = document.querySelector(
    ".setProfileLinkInSinglePost"
  );
  const getProfileLinkInUpdate = document.querySelector(
    ".setProfileLinkInUpdate"
  );

  if (getProfileLinkInProfile) {
    getProfileLinkInProfile.href = `?author=${loggedInUser}`;
    if (authorName === loggedInUser) {
      getProfileLinkInProfile.classList.add("text-info");
    }
  }

  if (getProfileLinkInFeed) {
    getProfileLinkInFeed.href = `../profile/index.html?author=${loggedInUser}`;
  }

  if (getProfileLinkInSinglePost) {
    getProfileLinkInSinglePost.href = `../../profile/index.html?author=${loggedInUser}`;
  }

  if (getProfileLinkInUpdate) {
    getProfileLinkInUpdate.href = `../../profile/index.html?author=${loggedInUser}`;
  }
}

setProfileLink();
