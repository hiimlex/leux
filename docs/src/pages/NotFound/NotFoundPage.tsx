import { NavLink } from "react-router-dom";
import { ReactComponent as NotFoundMD, attributes as notFoundAttr } from "./NotFound.md";
import React from "react";

notFoundAttr["NavLink"] = NavLink;

const NotFoundPage = () => <NotFoundMD {...notFoundAttr}></NotFoundMD>;

export default NotFoundPage;
