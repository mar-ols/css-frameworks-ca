export function loginRegSuccess(text) {
  const getDialog = document.querySelector(".dialog");
  getDialog.showModal();

  const getDialogText = document.querySelector(".dialogText");
  getDialogText.innerText = `${text}`;

  const closeBtn = document.querySelector(".closeDialogBtn");

  if (
    text === `Wrong email or password!` ||
    `Looks like this user already exists, please choose a unique username and email.`
  ) {
    closeBtn.addEventListener("click", () => {
      getDialog.close();
    });

    window.onclick = function (event) {
      if (event.target === getDialog) {
        getDialog.close();
      }
    };
  }

  if (text === `Registration successful! You can now log in.`) {
    closeBtn.addEventListener("click", () => {
      window.location.href = "../../";
    });

    window.onclick = function (event) {
      if (event.target === getDialog) {
        window.location.href = "../../";
      }
    };
  }
}
