import React from "react";

export type LeTopographyTypes =
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

export interface LeTopographyProps {
	children: React.ReactNode;
	type: LeTopographyTypes;
}
