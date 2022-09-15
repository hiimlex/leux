import React from "react";
import { LeVariants } from "src/types";
import "./Box.scss";

export type BoxVariants = LeVariants;

interface BoxProps {
	centered?: boolean;
	bgColor?: BoxVariants;
	width?: React.CSSProperties["width"];
	height?: React.CSSProperties["height"];
	padding?: React.CSSProperties["margin"];
	margin?: React.CSSProperties["margin"];
	borderRadius?: React.CSSProperties["borderRadius"];
	customClass?: string;
	customStyles?: React.CSSProperties;
	children?: React.ReactNode;
	textColor?: "dark" | "light" | "darker" | "lighter";
}

const Box = ({
	width,
	children,
	padding,
	margin,
	height,
	bgColor,
	borderRadius,
	customClass,
	customStyles,
	centered,
	textColor,
}: BoxProps) => {
	return (
		<div
			style={{ padding, margin, height, width, borderRadius, ...customStyles }}
			className={
				(bgColor ? `le-bg--${bgColor}` : "") +
				(customClass ? " " + customClass : "") +
				(centered ? " le-box--centered" : "") +
				(textColor ? " le-color-text--" + textColor : "")
			}
		>
			{children}
		</div>
	);
};

export { Box };
