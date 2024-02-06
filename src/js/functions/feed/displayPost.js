import { getPost } from "../../api/calls/feed/read.js";

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

async function displayPost() {
  const getSinglePost = await getPost(id);
}

displayPost();
