import React from "react";
import { NavLink } from "react-router-dom";

import {
	ReactComponent as OverviewMD,
	attributes as overviewAttr,
} from "./overview.md";

const OverviewPage = () => {
	overviewAttr["NavLink"] = NavLink;

	return (
		<React.Fragment>
			<OverviewMD {...overviewAttr} />
		</React.Fragment>
	);
};

export default OverviewPage;
