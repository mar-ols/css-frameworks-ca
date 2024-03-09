import { login } from "../../../api/calls/login.js";

/**
 * This function takes the values from the login form and calls on the login function to send in the user credentials and log in the user.
 */
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
