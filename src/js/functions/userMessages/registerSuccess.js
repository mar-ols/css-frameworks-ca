export function registerSuccess() {
  const successDialog = document.querySelector("#successDialog");
  const closeBtn = document.querySelector("#closeBtn");

  successDialog.showModal();
  closeBtn.addEventListener("click", () => {
    successDialog.close();
  });

  window.onclick = function (event) {
    if (event.target == successDialog) {
      successDialog.close();
    }
  };
}
