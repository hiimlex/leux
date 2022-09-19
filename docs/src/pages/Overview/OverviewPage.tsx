import React from "react";
import { NavLink } from "react-router-dom";

import {
	ReactComponent as OverviewMD,
	attributes as overviewAttr,
} from "./overview.md";

overviewAttr["NavLink"] = NavLink;

const OverviewPage = () => <OverviewMD {...overviewAttr} />;

export default OverviewPage;
