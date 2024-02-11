/**
 *  Adds two numbers together
 * @param {number} a First value
 * @param {number} b Second value
 * @returns {number} Sum of params
 *
 * @example
 * ```js
 * // Add two numbers together
 * const a = 1;
 * const b = 2;
 * const sum = addNumbers(a, b);
 * // expect sum to be 3
 * ```
 */
function addNumbers(a, b) {
  return a + b;
}

import { getRegisterData } from "./functions/profile/forms/registerForm.js";
import { getLoginData } from "./functions/profile/forms/loginForm.js";

getRegisterData();
getLoginData();
