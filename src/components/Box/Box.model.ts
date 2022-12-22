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
	customClass?: string;
	customStyles?: React.CSSProperties;
	children?: React.ReactNode;
	gridSpan?: {
		row?: number;
		col?: number;
	};
}

export { BoxVariants, BoxProps, BoxTextColor };
