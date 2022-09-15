import React from "react";
import { ButtonVariants } from "../Button";

export type BoxVariants = ButtonVariants;

interface BoxProps {
	width?: string;
	height?: string;
	padding?: number;
	margin?: number;
	borderRadius?: number;
	bgColor?: BoxVariants;
	children?: React.ReactNode;
}

const Box = ({
	width,
	children,
	padding,
	margin,
	height,
	bgColor,
	borderRadius,
}: BoxProps) => {
	return (
		<div
			style={{ padding, margin, height, width, borderRadius }}
			className={bgColor ? `le-bg--${bgColor}` : ""}
		>
			{children}
		</div>
	);
};

export { Box };
