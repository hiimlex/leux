import React from "react";
import { BoxProps } from "./Box.model";
import "./Box.scss";

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
	gridSpan,
	flexWrap,
	alignItems,
	flex,
	flexDirection,
	justifyContent,
}: BoxProps) => {
	const handleGridSpan = () => {
		if (gridSpan) {
			return {
				gridRowEnd: `span ${gridSpan.row}`,
				gridColumnEnd: `span ${gridSpan.col}`,
			};
		}
	};

	return (
		<div
			style={{
				padding,
				margin,
				height,
				width,
				borderRadius,
				display: flex ? "flex" : undefined,
				justifyContent,
				alignItems,
				flexDirection,
				flexWrap,
				...handleGridSpan(),
				...customStyles,
			}}
			className={
				(bgColor ? `le-color-bg--${bgColor}` : "") +
				(customClass ? ` ${customClass}` : "") +
				(centered ? " le-box--centered" : "") +
				(textColor ? ` le-color-text--${textColor}` : "")
			}
			data-testid="leuxBox"
		>
			{children}
		</div>
	);
};

export { Box };
