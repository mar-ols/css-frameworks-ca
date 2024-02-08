import { getPosts } from "../../api/calls/feed/read.js";
import { errorMsg } from "../../error.js";

async function displayPosts() {
  try {
    const posts = await getPosts();
    posts.forEach((post) => {
      if (post.title && post.body && post.media) {
        const getPostsSection = document.querySelector("#postsSection");

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
        postImage.classList.add("rounded");
        postImage.src = `${post.media}`;

        postCard.appendChild(postImageContainer);
        postImageContainer.appendChild(postImage);

        // Post title link
        const titleLink = document.createElement("a");
        titleLink.href = "singlePost/index.html?id=" + `${post.id}`;
        titleLink.classList.add("text-secondary");
        // Post title text
        const postTitleContainer = document.createElement("h3");
        postTitleContainer.innerText = postTitleContainer;
        postTitleContainer.classList.add("px-2");
        postTitleContainer.classList.add("pt-2");
        postTitleContainer.innerText = `${post.title}`;

        // Post author
        const postAuthor = document.createElement("p");
        postAuthor.classList.add("px-2");
        postAuthor.innerText = `by ${post.author.name}`;

        // Post date
        const neaterDate = new Date(post.created).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "2-digit",
        });
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
        postCard.appendChild(postAuthor);
        postCard.appendChild(postDate);
        postCard.appendChild(postBodyContainer);
      }
    });
  } catch {
    errorMsg();
  }
}

displayPosts();

/* <div class="col-md-5 mx-auto border border-secondary rounded m-1">
<img src="../images/posts/mock_post_1.jpg" alt="" class="img-fluid" />
<i class="fa-regular fa-heart fa-lg" style="color: #516c56"></i> 17
<i class="fa-regular fa-comment fa-lg" style="color: #516c56"></i> 4
<p class="pb-3">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur,
  numquam? Magnam alias dolore sapiente debitis?
</p>
</div> */
