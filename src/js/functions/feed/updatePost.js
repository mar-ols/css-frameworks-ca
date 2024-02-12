import { getPost } from "../../api/calls/feed/read.js";
import { id } from "../../api/constants.js";
import { updatePost } from "../../api/calls/feed/update.js";
import { userFeedback } from "../userMessages/feed/feedbackTemplate.js";

export async function updatePostForm() {
  try {
    const getValues = await getPost(id);

    const setTitle = (document.querySelector(
      "#updatePostTitle"
    ).value = `${getValues.title}`);

    const setTags = (document.querySelector(
      "#updatePostTags"
    ).value = `${getValues.tags}`);

    const setImg = (document.querySelector(
      "#updatePostImgURL"
    ).value = `${getValues.media}`);

    const setBody = (document.querySelector(
      "#updatePostBody"
    ).value = `${getValues.body}`);

    const getUpdateForm = document.querySelector("#updatePost");

    if (getUpdateForm) {
      getUpdateForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const form = event.target;

        const tags = [];

        const title = form.updateTitle.value;
        const body = form.updateBody.value;
        const media = form.updatePostImgURL.value;
        const tagList = form.updateTags.value;

        tags.push(tagList);

        const updatedPost = {
          title,
          body,
          media,
          tags,
        };
        updatePost(updatedPost);
        userFeedback(`Post updated`);
      });
    }
  } catch (error) {
    console.error(error);
  }
}
