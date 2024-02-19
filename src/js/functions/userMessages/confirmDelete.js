import { removePost } from "../../api/calls/feed/delete.js";
import { userFeedback } from "./feed/feedbackTemplate.js";

export function confirmDelete(id) {
  const getDeleteDialog = document.querySelector(".deleteDialog");
  const closeBtn = document.querySelector(".closeDeleteDialog");

  getDeleteDialog.showModal();

  const getNoBtn = document.querySelector(".noBtn");
  getNoBtn.addEventListener("click", () => {
    getDeleteDialog.close();
  });

  closeBtn.addEventListener("click", () => {
    getDeleteDialog.close();
  });

  window.onclick = function (event) {
    if (event.target === getDeleteDialog) {
      getDeleteDialog.close();
    }
  };

  const getYesBtn = document.querySelector(".yesBtn");
  getYesBtn.addEventListener("click", () => {
    removePost(id);
    userFeedback(`Post deleted!`);
  });
}
