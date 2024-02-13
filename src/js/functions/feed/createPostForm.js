import { createPost } from "../../api/calls/feed/create.js";
import { userFeedback } from "../userMessages/feed/feedbackTemplate.js";

export function getNewPostData() {
  try {
    const getCreateForm = document.querySelector("#createPost");

    if (getCreateForm) {
      getCreateForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const form = event.target;

        const tags = [];

        const title = form.title.value;
        const body = form.body.value;
        const media = form.postImgURL.value;
        const tag1 = form.tag1.value;
        const tag2 = form.tag2.value;
        const tag3 = form.tag3.value;

        tags.push(tag1, tag2, tag3);

        const newPost = {
          title,
          body,
          media,
          tags,
        };

        createPost(newPost);
        userFeedback(`Hurrah! Post created!`);
      });
    }
  } catch (error) {
    console.error(error);
  }
}
