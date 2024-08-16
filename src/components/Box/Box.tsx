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
	flexGap,
	inset,
	insets,
	margins,
	paddings,
}: BoxProps) => {
	const gridSpanStyles:
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

	const boxBoundingStyles: React.CSSProperties = useMemo(
		() => ({
			top: insets?.all || insets?.horizontal || insets?.top,
			bottom: insets?.all || insets?.horizontal || insets?.bottom,
			left: insets?.all || insets?.vertical || insets?.left,
			right: insets?.all || insets?.vertical || insets?.right,
			inset,
			padding,
			paddingTop: paddings?.all || paddings?.vertical || paddings?.top,
			paddingBottom: paddings?.all || paddings?.vertical || paddings?.bottom,
			paddingLeft: paddings?.all || paddings?.horizontal || paddings?.left,
			paddingRight: paddings?.all || paddings?.horizontal || paddings?.right,
			margin,
			marginTop: margins?.all || margins?.vertical || margins?.top,
			marginBottom: margins?.all || margins?.vertical || margins?.bottom,
			marginLeft: margins?.all || margins?.horizontal || margins?.left,
			marginRight: margins?.all || margins?.horizontal || margins?.right,
			width,
			height,
		}),
		[padding, margin, height, width, paddings, insets, margins]
	);

	return (
		<div
			style={{
				borderRadius,
				display: flex ? "flex" : undefined,
				justifyContent,
				alignItems,
				flexDirection,
				flexWrap,
				gap: flexGap,
				...boxBoundingStyles,
				...gridSpanStyles,
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
