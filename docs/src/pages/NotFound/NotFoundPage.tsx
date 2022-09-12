import { NavLink } from "react-router-dom";
import {
	ReactComponent as NotFoundMD,
	attributes as notFoundAttr,
} from "./NotFound.md";

const NotFoundPage = () => {
	notFoundAttr["NavLink"] = NavLink;

	return <NotFoundMD {...notFoundAttr}></NotFoundMD>;
};

export default NotFoundPage;
