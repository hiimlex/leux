import React from "react";

type TopographyTypes =
	| "h1"
	| "h2"
	| "h3"
	| "h4"
	| "h5"
	| "h6"
	| "subtitle-1"
	| "subtitle-2"
	| "body-1"
	| "body-2"
	| "caption"
	| "button"
	| "overline";

interface TopographyProps {
	children?: React.ReactNode;
	variant?: TopographyTypes;
	customClass?: string;
	customStyles?: React.CSSProperties;
}

export { TopographyProps, TopographyTypes };
