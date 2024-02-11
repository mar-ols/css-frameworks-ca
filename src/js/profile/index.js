import { displayUserPosts } from "../functions/profile/displayUserPosts.js";
import { logout } from "../functions/profile/logout.js";
import { displayChangeAvatar } from "../functions/profile/displayChangeAvatar.js";
import { getAvatarData } from "../functions/profile/changeAvatarForm.js";

displayUserPosts();
displayChangeAvatar();
getAvatarData();
logout();
