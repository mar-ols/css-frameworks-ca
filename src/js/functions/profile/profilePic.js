export function setUserPic(imgURL) {
  const imgContainer = document.querySelector("#profileImgContainer");
  const profilePic = document.createElement("img");
  profilePic.classList.add("img-fluid");
  profilePic.classList.add("rounded-circle");
  imgContainer.appendChild(profilePic);
  if (imgURL) {
    profilePic.src = `${imgURL}`;
  }
}
