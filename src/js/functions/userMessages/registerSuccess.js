export function registerSuccess() {
  const successDialog = document.querySelector("#successDialog");
  const closeBtn = document.querySelector("#closeBtn");

  successDialog.showModal();
  closeBtn.addEventListener("click", () => {
    window.location.href = "../index.html";
  });

  window.onclick = function (event) {
    if (event.target == successDialog) {
      window.location.href = "../index.html";
    }
  };
}
