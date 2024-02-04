export function registerUnsuccessful() {
  const unsuccessfulDialog = document.querySelector("#unSuccessfulDialog");
  const closeBtn = document.querySelector("#unSuccessCloseBtn");

  unsuccessfulDialog.showModal();
  closeBtn.addEventListener("click", () => {
    unsuccessfulDialog.close();
  });

  window.onclick = function (event) {
    if (event.target == unsuccessfulDialog) {
      unsuccessfulDialog.close();
    }
  };
}
