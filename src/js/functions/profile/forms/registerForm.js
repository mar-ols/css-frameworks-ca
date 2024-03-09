import { register } from "../../../api/calls/register.js";

/**
 * This function takes the values from the register form and calls on the register function to send in the user credentials.
 */
export function getRegisterData() {
  const getRegisterForm = document.querySelector("#registerForm");

  if (getRegisterForm) {
    getRegisterForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.target;

      const name = form.name.value;
      const email = form.email.value;
      const password = form.password.value;
      const avatar = form.avatar.value;

      const user = {
        name,
        email,
        password,
        avatar,
      };

      register(user);
    });
  }
}
