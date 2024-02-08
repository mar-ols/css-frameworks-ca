function createPostSuccess() {
  const closeCreatePostBtn = document.querySelector("#closeCreatePostBtn");

  closeCreatePostBtn.addEventListener("click", () => {
    location.reload();
  });

  window.onclick = function (event) {
    if (event.target == successDialog) {
      location.reload();
    }
  };
}
