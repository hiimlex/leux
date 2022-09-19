import React from "react";
import { TopographyTypes } from "./Topography.model";

interface TopographyProps {
	children?: React.ReactNode;
	type: TopographyTypes;
	customClass?: string;
	customStyles?: React.CSSProperties;
}

const Topography = ({
	type,
	children,
	customClass,
	customStyles,
}: TopographyProps) => {
	const handleType = () => {
		const typesArr: Record<string, () => React.ReactElement> = {
			h1: () => (
				<h1 className={"le-text--h1 " + customClass} style={customStyles}>
					{children}
				</h1>
			),
			h2: () => (
				<h2 className={"le-text--h2 " + customClass} style={customStyles}>
					{children}
				</h2>
			),
			h3: () => (
				<h3 className={"le-text--h3 " + customClass} style={customStyles}>
					{children}
				</h3>
			),
			h4: () => (
				<h4 className={"le-text--h4 " + customClass} style={customStyles}>
					{children}
				</h4>
			),
			h5: () => (
				<h5 className={"le-text--h5 " + customClass} style={customStyles}>
					{children}
				</h5>
			),
			h6: () => (
				<h6 className={"le-text--h6 " + customClass} style={customStyles}>
					{children}
				</h6>
			),
			"subtitle-1": () => (
				<h6
					className={"le-text--subtitle-1 " + customClass}
					style={customStyles}
				>
					{children}
				</h6>
			),
			"subtitle-2": () => (
				<h6
					className={"le-text--subtitle-2 " + customClass}
					style={customStyles}
				>
					{children}
				</h6>
			),
			"body-1": () => (
				<p className={"le-text--body-1 " + customClass} style={customStyles}>
					{children}
				</p>
			),
			"body-2": () => (
				<p className={"le-text--body-2 " + customClass} style={customStyles}>
					{children}
				</p>
			),
			button: () => (
				<p className={"le-text--button " + customClass} style={customStyles}>
					{children}
				</p>
			),
			overline: () => (
				<span
					className={"le-text--overline " + customClass}
					style={customStyles}
				>
					{children}
				</span>
			),
			caption: () => (
				<span
					className={"le-text--caption " + customClass}
					style={customStyles}
				>
					{children}
				</span>
			),
		};

		return typesArr[type]();
	};

	return <React.Fragment>{handleType()}</React.Fragment>;
};

export { Topography, TopographyProps };
