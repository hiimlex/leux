import React from "react";
import { ReactComponent as TopographyMD } from "./topography.md";
import { topographyAttr } from "./TopographyAttributes";

const TopographyPage = () => {
	return (
		<React.Fragment>
			<TopographyMD {...topographyAttr} />
		</React.Fragment>
	);
};

export default TopographyPage;
