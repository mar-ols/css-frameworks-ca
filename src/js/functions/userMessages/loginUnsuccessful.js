export function loginUnsuccessful() {
  const unsuccessfulLoginDialog = document.querySelector(
    "#unSuccessfulLoginDialog"
  );
  const closeBtn = document.querySelector("#unSuccessLoginCloseBtn");

  unsuccessfulLoginDialog.showModal();
  closeBtn.addEventListener("click", () => {
    unsuccessfulLoginDialog.close();
  });

  window.onclick = function (event) {
    if (event.target == unsuccessfulLoginDialog) {
      unsuccessfulLoginDialog.close();
    }
  };
}
