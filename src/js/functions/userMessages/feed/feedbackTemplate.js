import { id } from "../../../api/constants.js";

export function userFeedback(text) {
  const getDialog = document.querySelector(".dialog");
  getDialog.showModal();

  const getDialogText = document.querySelector(".dialogText");
  getDialogText.innerText = `${text}`;

  const closeBtn = document.querySelector(".closeDialogBtn");

  if (text === `Hurrah! Post created!` || `Post deleted!`) {
    closeBtn.addEventListener("click", () => {
      location.reload();
    });

    window.onclick = function (event) {
      if (event.target === getDialog) {
        location.reload();
      }
    };
  }

  if (text === `Post updated`) {
    closeBtn.addEventListener("click", () => {
      window.location.href = `index.html?id=${id}`;
    });

    window.onclick = function (event) {
      if (event.target === getDialog) {
        window.location.href = `index.html?id=${id}`;
      }
    };
  }
}
