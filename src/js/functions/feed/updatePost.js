import { getPost } from "../../api/calls/feed/read.js";
import { id } from "../../api/constants.js";
import { updatePost } from "../../api/calls/feed/update.js";
import { userFeedback } from "../userMessages/feed/feedbackTemplate.js";
import { logout } from "../profile/logout.js";

async function updatePostForm() {
  try {
    const getValues = await getPost(id);

    const setTitle = (document.querySelector(
      "#updatePostTitle"
    ).value = `${getValues.title}`);

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

        const title = form.updateTitle.value;
        const body = form.updateBody.value;
        const media = form.updatePostImgURL.value;

        const updatedPost = {
          title,
          body,
          media,
        };
        updatePost(updatedPost);
        userFeedback(`Post updated`);
      });
    }
  } catch (error) {
    console.error(error);
  }
}

updatePostForm();
logout();
