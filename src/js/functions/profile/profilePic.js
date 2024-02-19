export function setUserPic(imgURL) {
  const imgContainer = document.querySelector(".profileImgContainer");
  const userAvatar = document.querySelector(".defaultImg");
  const profilePic = document.createElement("img");
  profilePic.setAttribute("alt", "No alt text provided");
  profilePic.classList.add("userPic");
  profilePic.classList.add("img-fluid");
  profilePic.classList.add("rounded");
  profilePic.classList.add("border");
  profilePic.classList.add("border-secondary");
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
