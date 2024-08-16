import React, { useMemo } from "react";
import { LeClassNamesArray } from "../../types";
import { BoxProps } from "./Box.model";
import "./Box.scss";

const Box: React.FC<BoxProps> = ({
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
}) => {
	const handleGridSpan:
		| {
				gridRowEnd: React.CSSProperties["gridRowEnd"];
				gridColumnEnd: React.CSSProperties["gridColumnEnd"];
		  }
		| undefined = useMemo(() => {
		if (gridSpan) {
			return {
				gridRowEnd: `span ${gridSpan.row || 1}`,
				gridColumnEnd: `span ${gridSpan.col || 1}`,
			};
		}
	}, [gridSpan]);

	const classNames: LeClassNamesArray = {
		leBox: () => [
			bgColor ? `le-color-bg--${bgColor}` : "",
			customClass || "",
			centered ? `le-box--centered` : "",
			textColor ? `le-color-text--${textColor}` : "",
		],
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
				...handleGridSpan,
				...customStyles,
			}}
			className={classNames["leBox"]().join(" ")}
			data-testid="leuxBox"
		>
			{children}
		</div>
	);
};

export { Box };
