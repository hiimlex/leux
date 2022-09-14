import React from "react";
import { TopographyTypes } from "./Topography.model";

interface TopographyProps {
	children: React.ReactNode;
	type: TopographyTypes;
}

const Topography = ({ type, children }: TopographyProps) => {
	const handleType = () => {
		const typesArr: Record<string, () => React.ReactElement> = {
			h1: () => <h1 className="le-text--h1">{children}</h1>,
			h2: () => <h2 className="le-text--h2">{children}</h2>,
			h3: () => <h3 className="le-text--h3">{children}</h3>,
			h4: () => <h4 className="le-text--h4">{children}</h4>,
			h5: () => <h5 className="le-text--h5">{children}</h5>,
			h6: () => <h6 className="le-text--h6">{children}</h6>,
			"subtitle-1": () => <h6 className="le-text--subtitle-1">{children}</h6>,
			"subtitle-2": () => <h6 className="le-text--subtitle-1">{children}</h6>,
			"body-1": () => <p className="le-text--body-1">{children}</p>,
			"body-2": () => <p className="le-text--body-2">{children}</p>,
			button: () => <p className="le-text--button">{children}</p>,
			overline: () => <span className="le-text--overline">{children}</span>,
			caption: () => <span className="le-text--caption">{children}</span>,
		};

		return typesArr[type]();
	};

	return <React.Fragment>{handleType()}</React.Fragment>;
};

export { Topography, TopographyProps };
