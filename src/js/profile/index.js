import { displayUserPosts } from "../functions/profile/displayOwnPosts.js";
import { logout } from "../functions/profile/logout.js";
import { displayChangeAvatar } from "../functions/profile/displayChangeAvatar.js";
import { getAvatarData } from "../functions/profile/forms/changeAvatarForm.js";

displayUserPosts();
displayChangeAvatar();
getAvatarData();
logout();
