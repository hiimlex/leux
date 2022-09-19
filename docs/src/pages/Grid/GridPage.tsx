import React from "react";
import { ReactComponent as GridMD } from "./grid.md";
import { gridAttr } from "./GridAttributes";

const GridPage = () => {
	return (
		<React.Fragment>
			<GridMD {...gridAttr} />
		</React.Fragment>
	);
};

export default GridPage;
