type BoxVariants = "primary" | "secondary" | "success" | "danger" | "warning" | "default";
type BoxTextColor = "dark" | "light" | "darker" | "lighter";

interface BoxProps {
	bgColor?: BoxVariants;
	textColor?: BoxTextColor;
	centered?: boolean;
	width?: React.CSSProperties["width"];
	height?: React.CSSProperties["height"];
	padding?: React.CSSProperties["padding"];
	paddings?: {
		all?: React.CSSProperties["padding"];
		top?: React.CSSProperties["paddingTop"];
		bottom?: React.CSSProperties["paddingBottom"];
		left?: React.CSSProperties["paddingLeft"];
		right?: React.CSSProperties["paddingRight"];
		horizontal?: React.CSSProperties["paddingLeft"] | React.CSSProperties["paddingRight"];
		vertical?: React.CSSProperties["paddingTop"] | React.CSSProperties["paddingBottom"];
	};
	margin?: React.CSSProperties["margin"];
	margins?: {
		all?: React.CSSProperties["margin"];
		top?: React.CSSProperties["marginTop"];
		bottom?: React.CSSProperties["marginBottom"];
		left?: React.CSSProperties["marginLeft"];
		right?: React.CSSProperties["marginRight"];
		horizontal?: React.CSSProperties["marginLeft"] | React.CSSProperties["marginRight"];
		vertical?: React.CSSProperties["marginTop"] | React.CSSProperties["marginBottom"];
	};
	inset?: React.CSSProperties["inset"];
	insets?: {
		all?: React.CSSProperties["inset"];
		top?: React.CSSProperties["top"];
		bottom?: React.CSSProperties["bottom"];
		left?: React.CSSProperties["left"];
		right?: React.CSSProperties["right"];
		horizontal?: React.CSSProperties["left"] | React.CSSProperties["right"];
		vertical?: React.CSSProperties["top"] | React.CSSProperties["bottom"];
	};
	borderRadius?: React.CSSProperties["borderRadius"];
	flex?: boolean;
	flexDirection?: React.CSSProperties["flexDirection"];
	justifyContent?: React.CSSProperties["justifyContent"];
	alignItems?: React.CSSProperties["alignItems"];
	flexWrap?: React.CSSProperties["flexWrap"];
	flexGap?: React.CSSProperties["gap"];
	customClass?: string;
	customStyles?: React.CSSProperties;
	children?: React.ReactNode;
	gridSpan?: {
		row?: number;
		col?: number;
	};
}

type BoxGridSpanStyles = {
	gridRowEnd: React.CSSProperties["gridRowEnd"];
	gridColumnEnd: React.CSSProperties["gridColumnEnd"];
};

export { BoxVariants, BoxProps, BoxTextColor, BoxGridSpanStyles };
