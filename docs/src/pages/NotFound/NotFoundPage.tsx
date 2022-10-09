import { NavLink } from "react-router-dom";
import { ReactComponent as NotFoundMD, attributes as notFoundAttr } from "./NotFound.md";

notFoundAttr["NavLink"] = NavLink;

const NotFoundPage = () => <NotFoundMD {...notFoundAttr}></NotFoundMD>;

export default NotFoundPage;
