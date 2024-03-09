import { removeStorage } from "../storage/localStorage.js";

/**
 * This function removes the token and profile information from localStorage when a user logs out.
 */
export function logout() {
  const getLogout = document.querySelector(".logout");

  getLogout.addEventListener("click", () => {
    removeStorage("token");
    removeStorage("profile");
  });
}
