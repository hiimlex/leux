import React from "react";
import { ReactComponent as LeButtonMD } from "./button.md";
import { buttonAttr } from "./ButtonAttributes";

const ButtonPage = () => {
	return (
		<React.Fragment>
			<LeButtonMD {...buttonAttr} />
		</React.Fragment>
	);
};

export default ButtonPage;
