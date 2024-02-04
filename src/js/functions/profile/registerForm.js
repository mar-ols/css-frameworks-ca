import { register } from "./register.js";

export function getRegisterData() {
  const getRegisterForm = document.querySelector("#registerForm");

  getRegisterForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.target;

    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const banner = form.banner.value;
    const avatar = form.avatar.value;

    const user = {
      name,
      email,
      password,
      banner,
      avatar,
    };

    register(user);
  });
}
