import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ReactComponent as BoxMD } from "./box.md";
import { boxAttr } from "./BoxAttributes";

const BoxPage = () => {
	const location = useLocation();

	const handleHashScroll = () => {
		console.log(location);
	};

	useEffect(() => {
		handleHashScroll();
	}, []);

	return (
		<React.Fragment>
			<BoxMD {...boxAttr} />
		</React.Fragment>
	);
};

export default BoxPage;
