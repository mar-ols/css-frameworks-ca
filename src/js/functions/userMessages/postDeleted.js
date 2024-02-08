export function postDeleted() {
  const getDeletedPostDialog = document.querySelector("#postDeleted");
  getDeletedPostDialog.showModal();

  const closeDeletedPostBtn = document.querySelector("#closeDeletedPost");

  closeDeletedPostBtn.addEventListener("click", () => {
    location.reload();
  });

  window.onclick = function (event) {
    if (event.target == getDeletedPostDialog) {
      location.reload();
    }
  };
}
