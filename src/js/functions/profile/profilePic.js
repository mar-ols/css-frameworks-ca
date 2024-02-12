export function setUserPic(imgURL) {
  const imgContainer = document.querySelector(".profileImgContainer");
  const profilePic = document.createElement("img");
  profilePic.setAttribute("alt", "No alt text provided");
  profilePic.classList.add("img-fluid");
  profilePic.classList.add("rounded");
  profilePic.classList.add("border");
  profilePic.classList.add("border-secondary");
  imgContainer.appendChild(profilePic);
  if (imgURL) {
    profilePic.src = `${imgURL}`;
  }
}
