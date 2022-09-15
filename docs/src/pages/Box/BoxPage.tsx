import { LeSourceButton } from "@/components";
import React from "react";
import { ReactComponent as BoxMD, attributes as boxAttr } from "./box.md";

const BoxPage = () => {
	boxAttr["LeSourceButton"] = LeSourceButton;

	return (
		<React.Fragment>
			<BoxMD {...boxAttr} />
		</React.Fragment>
	);
};

export default BoxPage;
