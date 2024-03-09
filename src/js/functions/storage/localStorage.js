/**
 * This function stringifies and saves information in localStorage with a key name and its value.
 * @param {string} key Name of key
 * @param {*} value Value of key
 * @example
 * ```
 * saveStorage("user", {
 *   userName: json.name,
 *   userEmail: json.email,
 *   userAvatar: json.avatar,
 * })
 * ```
 */
export function saveStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

/**
 * This function retrieves a key from localStorage and parses the value to JSON format, returns null is no such key exists.
 * @param {string} key Name of key in localStorage
 * @returns Key value in json format
 * @example
 * ```
 * const getUser = loadStorage("user");
 * ```
 */
export function loadStorage(key) {
  try {
    const value = localStorage.getItem(key);
    return JSON.parse(value);
  } catch {
    return null;
  }
}

/**
 * This function deletes a key in localStorage.
 * @param {string} key Name of key in localStorage
 * @example
 * ```
 * removeStorage("user");
 * ```
 */
export function removeStorage(key) {
  localStorage.removeItem(key);
}
