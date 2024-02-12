import { displayUserPosts } from "../functions/profile/displayUserPosts.js";
import { logout } from "../functions/profile/logout.js";
import { displayChangeAvatar } from "../functions/profile/displayChangeAvatar.js";
import { getAvatarData } from "../functions/profile/forms/changeAvatarForm.js";
import { displayProfile } from "../functions/profile/displayProfile.js";
import { setProfileLink } from "../functions/profile/setProfileLinkMenu.js";

displayUserPosts();
displayChangeAvatar();
displayProfile();
getAvatarData();
setProfileLink();
logout();
