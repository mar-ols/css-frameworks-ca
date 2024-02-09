export function feedUserFeedback(text) {
  const getDialog = document.querySelector(".dialog");
  getDialog.showModal();
  const getDialogTextContainer = document.querySelector(".dialogText");
  getDialogTextContainer.innerText = `${text}`;

  const getCloseDialogBtn = document.querySelector(".closeDialogBtn");

  getCloseDialogBtn.addEventListener("click", () => {
    location.reload();
  });

  window.onclick = function (event) {
    if (event.target == getDialog) {
      location.reload();
    }
  };
}
