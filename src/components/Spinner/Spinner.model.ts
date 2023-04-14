type SpinnerSizes = "small" | "medium" | "large";
type SpinnerVariants = "circle";
type SpinnerThemes = "primary" | "secondary" | "success" | "danger" | "warning" | "default";

interface SpinnerProps {
	size?: SpinnerSizes;
	variant?: SpinnerVariants;
	theme?: SpinnerThemes;
	customSpeed?: React.CSSProperties["animationDelay"];
	customColor?: React.CSSProperties["borderColor"];
	customSize?: React.CSSProperties["width"];
	customStyles?: React.CSSProperties;
	customClass?: string;
	role?: React.HTMLAttributes<HTMLDivElement>["role"];
}

export { SpinnerProps, SpinnerSizes, SpinnerThemes, SpinnerVariants };
