import { displayPosts } from "../functions/feed/displayPosts.js";
import { getNewPostData } from "../functions/feed/createPostForm.js";
import { logout } from "../functions/profile/logout.js";

displayPosts();
getNewPostData();
logout();
