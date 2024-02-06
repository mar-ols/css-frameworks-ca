import { login } from "../../api/calls/login.js";

export function getLoginData() {
  const getLoginForm = document.querySelector("#loginForm");

  if (getLoginForm) {
    getLoginForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.target;

      const email = form.enterEmail.value;
      const password = form.enterPassword.value;

      const user = {
        email,
        password,
      };

      login(user);
    });
  }
}
