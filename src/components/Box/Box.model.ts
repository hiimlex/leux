type BoxVariants = "primary" | "secondary" | "success" | "danger" | "warning" | "default";
type BoxTextColor = "dark" | "light" | "darker" | "lighter";

interface BoxProps {
	bgColor?: BoxVariants;
	textColor?: BoxTextColor;
	centered?: boolean;
	width?: React.CSSProperties["width"];
	height?: React.CSSProperties["height"];
	padding?: React.CSSProperties["margin"];
	margin?: React.CSSProperties["margin"];
	borderRadius?: React.CSSProperties["borderRadius"];
	flex?: boolean;
	flexDirection?: React.CSSProperties["flexDirection"];
	justifyContent?: React.CSSProperties["justifyContent"];
	alignItems?: React.CSSProperties["alignItems"];
	flexWrap?: React.CSSProperties["flexWrap"];
	customClass?: string;
	customStyles?: React.CSSProperties;
	children?: React.ReactNode;
	gridSpan?: {
		row?: number;
		col?: number;
	};
}

export { BoxVariants, BoxProps, BoxTextColor };
