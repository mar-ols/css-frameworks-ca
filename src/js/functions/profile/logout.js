import { removeStorage } from "../storage/localStorage.js";

export function logout() {
  const getLogout = document.querySelector(".logout");

  getLogout.addEventListener("click", () => {
    removeStorage("token");
    removeStorage("profile");
  });
}
