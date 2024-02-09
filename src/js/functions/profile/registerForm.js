import { register } from "../../api/calls/register.js";

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
