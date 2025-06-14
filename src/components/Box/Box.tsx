import React, { useMemo } from "react";
import { leClassNames, TestId } from "../../types";
import { BoxGridSpanStyles, BoxProps } from "./Box.model";
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
	const gridSpanStyles: BoxGridSpanStyles | undefined = useMemo(() => {
		if (gridSpan) {
			return {
				gridRowEnd: `span ${gridSpan.row || 1}`,
				gridColumnEnd: `span ${gridSpan.col || 1}`,
			};
		}
	}, [gridSpan]);

	const classNames = useMemo(
		() =>
			leClassNames([
				bgColor && `le-bg-${bgColor}`,
				customClass,
				centered && `le-box--centered`,
				textColor && `le-color-${textColor}`,
			]),
		[bgColor, customClass, centered, textColor]
	);

	const boxBoundingStyles = useMemo(
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

	const styles = useMemo(
		() => ({
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
		}),
		[
			borderRadius,
			flex,
			justifyContent,
			alignItems,
			flexDirection,
			flexWrap,
			flexGap,
			boxBoundingStyles,
			gridSpanStyles,
			customStyles,
		]
	);

	return (
		<div style={styles} className={classNames} data-testid={TestId.Box}>
			{children}
		</div>
	);
};

export { Box };
