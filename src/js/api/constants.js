export const API_BASE = "https://api.noroff.dev/api/v1/social";
export const API_REGISTER = "/auth/register";
export const API_LOGIN = "/auth/login";
export const API_POSTS = "/posts";
export const API_FEED = "/posts/following";
export const API_PROFILES = "/profiles";

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

export const id = params.get("id");
