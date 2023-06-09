import React from "react";

type TypographyVariants =
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

interface TypographyProps {
	children?: React.ReactNode;
	variant?: TypographyVariants;
	customClass?: string;
	customStyles?: React.CSSProperties;
}

export { TypographyProps, TypographyVariants };
