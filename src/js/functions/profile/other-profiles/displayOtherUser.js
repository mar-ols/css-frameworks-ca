import { getOtherUser } from "../../../api/calls/profile/other-profiles/getOtherUser.js";
import { getOthersPosts } from "../../../api/calls/profile/other-profiles/getOthersPosts.js";
import { errorMsg } from "../../error.js";
import { setUserPic } from "../profilePic.js";

export async function displayOtherUser() {
  try {
    const otherUser = await getOtherUser();
    const posts = await getOthersPosts();

    const uniquePost = new Set();

    const userName = document.querySelector(".otherUsername");
    userName.innerText = `${otherUser.name}`;

    if (otherUser.avatar !== null) {
      const userAvatar = document.querySelector(".defaultImg");
      userAvatar.classList.add("visually-hidden");
      setUserPic(otherUser.avatar);
    }

    if (otherUser._count.posts <= 2) {
      const mainElement = document.querySelector("main");
      mainElement.classList.add("vh-100");
    }

    const following = document.querySelector(".following");
    following.innerText = `Following (${otherUser._count.following})`;
    const followers = document.querySelector(".followers");
    followers.innerText = `Followers (${otherUser._count.followers})`;

    console.log(otherUser);

    posts.forEach((post) => {
      if (post.title && post.body && post.media) {
        const postContent = `${post.title}${post.body}`;
        if (!uniquePost.has(postContent)) {
          uniquePost.add(postContent);

          const getPostsSection = document.querySelector("#otherUserPosts");

          // Post container
          const postCard = document.createElement("div");
          postCard.classList.add("bg-primary");
          postCard.classList.add("text-secondary");
          postCard.classList.add("col-md-8");
          postCard.classList.add("mx-auto");
          postCard.classList.add("border");
          postCard.classList.add("border-secondary");
          postCard.classList.add("rounded");
          postCard.classList.add("m-1");

          // Post image container
          const postImageContainer = document.createElement("div");
          // Post image
          const postImage = document.createElement("img");
          postImage.classList.add("img-fluid");
          postImage.classList.add("rounded-top");
          postImage.src = `${post.media}`;
          postCard.appendChild(postImageContainer);
          postImageContainer.appendChild(postImage);

          // Post title link
          const titleLink = document.createElement("a");
          titleLink.href =
            "../../feed/singlePost/index.html?id=" + `${post.id}`;
          titleLink.classList.add("text-secondary");
          // Post title text
          const postTitleContainer = document.createElement("h5");
          postTitleContainer.classList.add("px-2");
          postTitleContainer.classList.add("pt-2");
          postTitleContainer.innerText = `${post.title}`;

          // Post date
          const neaterDate = new Date(post.created).toLocaleDateString(
            "en-US",
            {
              year: "numeric",
              month: "long",
              day: "2-digit",
            }
          );
          const postDate = document.createElement("p");
          postDate.classList.add("px-2");
          postDate.classList.add("small");
          postDate.innerText = `${neaterDate}`;

          // Post body
          const postBodyContainer = document.createElement("p");
          postBodyContainer.classList.add("px-2");
          postBodyContainer.innerText = `${post.body}`;

          getPostsSection.appendChild(postCard);
          postCard.appendChild(titleLink);
          titleLink.appendChild(postTitleContainer);
          postCard.appendChild(postDate);
          postCard.appendChild(postBodyContainer);
        }
      }
    });
  } catch (error) {
    errorMsg();
    console.error(error);
  }
}
