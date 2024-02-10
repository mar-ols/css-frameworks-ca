import { createPost } from "../../api/calls/feed/create.js";
import { userFeedback } from "../userMessages/feed/postFeedbackTemplate.js";

export function getNewPostData() {
  try {
    const getCreateForm = document.querySelector("#createPost");

    if (getCreateForm) {
      getCreateForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const form = event.target;

        const title = form.title.value;
        const body = form.body.value;
        const media = form.postImgURL.value;

        const newPost = {
          title,
          body,
          media,
        };

        createPost(newPost);
        userFeedback(`Hurrah! Post created!`);
      });
    }
  } catch (error) {
    console.error(error);
  }
}
