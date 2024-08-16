import React from "react";
import { TypographyProps } from "./Typography.model";

const Typography: React.FC<TypographyProps> = ({
	variant = "body-1",
	children,
	customClass = "",
	customStyles,
}) => {
	const typesArr: Record<string, React.ReactElement> = {
		h1: (
			<h1
				className={"le-text--h1 " + customClass}
				style={customStyles}
				data-testid="leuxTypography"
			>
				{children}
			</h1>
		),
		h2: (
			<h2
				className={"le-text--h2 " + customClass}
				style={customStyles}
				data-testid="leuxTypography"
			>
				{children}
			</h2>
		),
		h3: (
			<h3
				className={"le-text--h3 " + customClass}
				style={customStyles}
				data-testid="leuxTypography"
			>
				{children}
			</h3>
		),
		h4: (
			<h4
				className={"le-text--h4 " + customClass}
				style={customStyles}
				data-testid="leuxTypography"
			>
				{children}
			</h4>
		),
		h5: (
			<h5
				className={"le-text--h5 " + customClass}
				style={customStyles}
				data-testid="leuxTypography"
			>
				{children}
			</h5>
		),
		h6: (
			<h6
				className={"le-text--h6 " + customClass}
				style={customStyles}
				data-testid="leuxTypography"
			>
				{children}
			</h6>
		),
		"subtitle-1": (
			<h6
				className={"le-text--subtitle-1 " + customClass}
				style={customStyles}
				data-testid="leuxTypography"
			>
				{children}
			</h6>
		),
		"subtitle-2": (
			<h6
				className={"le-text--subtitle-2 " + customClass}
				style={customStyles}
				data-testid="leuxTypography"
			>
				{children}
			</h6>
		),
		"body-1": (
			<p
				className={"le-text--body-1 " + customClass}
				style={customStyles}
				data-testid="leuxTypography"
			>
				{children}
			</p>
		),
		"body-2": (
			<p
				className={"le-text--body-2 " + customClass}
				style={customStyles}
				data-testid="leuxTypography"
			>
				{children}
			</p>
		),
		button: (
			<p
				className={"le-text--button " + customClass}
				style={customStyles}
				data-testid="leuxTypography"
			>
				{children}
			</p>
		),
		overline: (
			<span
				className={"le-text--overline " + customClass}
				style={customStyles}
				data-testid="leuxTypography"
			>
				{children}
			</span>
		),
		caption: (
			<span
				className={"le-text--caption " + customClass}
				style={customStyles}
				data-testid="leuxTypography"
			>
				{children}
			</span>
		),
	};

	return typesArr[variant];
};

export { Typography };
