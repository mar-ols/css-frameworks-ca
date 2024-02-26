import { getPost } from "../../api/calls/feed/read.js";
import { id } from "../../api/constants.js";
import { updatePost } from "../../api/calls/feed/update.js";
import { userFeedback } from "../userMessages/feed/feedbackTemplate.js";

/**
 * This function sets the values of the update post form and allows the user to edit their post before calling on the updatePost function to send in the updated object to the database.
 */
export async function updatePostForm() {
  try {
    const getValues = await getPost(id);

    const setTitle = (document.querySelector(
      "#updatePostTitle"
    ).value = `${getValues.title}`);

    const setTags = (document.querySelector(
      "#updateTags1"
    ).value = `${getValues.tags}`);

    if (getValues.tags.length > 1) {
      for (let i = 0; i < getValues.tags.length; i++) {
        const setTags = (document.querySelector(
          "#updateTags1"
        ).value = `${getValues.tags[0]}`);
        const setTags2 = (document.querySelector(
          "#updateTags2"
        ).value = `${getValues.tags[1]}`);
        const setTags3 = (document.querySelector(
          "#updateTags3"
        ).value = `${getValues.tags[2]}`);
      }
    }

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
        const tag1 = form.updateTags1.value;
        const tag2 = form.updateTags2.value;
        const tag3 = form.updateTags3.value;

        tags.push(tag1, tag2, tag3);

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
