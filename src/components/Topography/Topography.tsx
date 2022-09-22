import React from "react";
import { TopographyProps } from "./Topography.model";

const Topography = ({
	type,
	children,
	customClass = "",
	customStyles,
}: TopographyProps) => {
	const typesArr: Record<string, React.ReactElement> = {
		h1: (
			<h1
				className={"le-text--h1 " + customClass}
				style={customStyles}
				data-testid="leuxTopography"
			>
				{children}
			</h1>
		),
		h2: (
			<h2
				className={"le-text--h2 " + customClass}
				style={customStyles}
				data-testid="leuxTopography"
			>
				{children}
			</h2>
		),
		h3: (
			<h3
				className={"le-text--h3 " + customClass}
				style={customStyles}
				data-testid="leuxTopography"
			>
				{children}
			</h3>
		),
		h4: (
			<h4
				className={"le-text--h4 " + customClass}
				style={customStyles}
				data-testid="leuxTopography"
			>
				{children}
			</h4>
		),
		h5: (
			<h5
				className={"le-text--h5 " + customClass}
				style={customStyles}
				data-testid="leuxTopography"
			>
				{children}
			</h5>
		),
		h6: (
			<h6
				className={"le-text--h6 " + customClass}
				style={customStyles}
				data-testid="leuxTopography"
			>
				{children}
			</h6>
		),
		"subtitle-1": (
			<h6
				className={"le-text--subtitle-1 " + customClass}
				style={customStyles}
				data-testid="leuxTopography"
			>
				{children}
			</h6>
		),
		"subtitle-2": (
			<h6
				className={"le-text--subtitle-2 " + customClass}
				style={customStyles}
				data-testid="leuxTopography"
			>
				{children}
			</h6>
		),
		"body-1": (
			<p
				className={"le-text--body-1 " + customClass}
				style={customStyles}
				data-testid="leuxTopography"
			>
				{children}
			</p>
		),
		"body-2": (
			<p
				className={"le-text--body-2 " + customClass}
				style={customStyles}
				data-testid="leuxTopography"
			>
				{children}
			</p>
		),
		button: (
			<p
				className={"le-text--button " + customClass}
				style={customStyles}
				data-testid="leuxTopography"
			>
				{children}
			</p>
		),
		overline: (
			<span
				className={"le-text--overline " + customClass}
				style={customStyles}
				data-testid="leuxTopography"
			>
				{children}
			</span>
		),
		caption: (
			<span
				className={"le-text--caption " + customClass}
				style={customStyles}
				data-testid="leuxTopography"
			>
				{children}
			</span>
		),
	};

	return typesArr[type] ? typesArr[type] : typesArr["body-1"];
};

export { Topography };
