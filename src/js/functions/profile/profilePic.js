/**
 * This function sets the users avatar on their profile and removes existing avatar if a blank form is sent.
 * @param {string} imgURL Value from input form to set/change user avatar
 */
export function setUserPic(imgURL) {
  const imgContainer = document.querySelector(".profileImgContainer");
  const userAvatar = document.querySelector(".defaultImg");
  const profilePic = document.createElement("img");
  profilePic.setAttribute("alt", "No alt text provided");
  profilePic.classList.add(
    "userPic",
    "img-fluid",
    "rounded",
    "border",
    "border-secondary"
  );
  imgContainer.appendChild(profilePic);
  if (imgURL) {
    profilePic.src = `${imgURL}`;
  }

  const avatarLink = imgURL.length;

  if (avatarLink === 0) {
    const userPic = document.querySelector(".userPic");
    userAvatar.classList.remove("visually-hidden");
    userPic.classList.add("visually-hidden");
  }
}
