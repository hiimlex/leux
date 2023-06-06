import { ReactComponent as AvatarMD } from "./avatar.md";
import { avatarAttr } from "./AvatarAttributes";

const AvatarPage = () => {
	return <AvatarMD {...avatarAttr} />;
};

export default AvatarPage;
