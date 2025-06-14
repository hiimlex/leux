type BadgeVariants = "dashed" | "ghost" | "outlined";
type BadgeThemes = "primary" | "secondary" | "success" | "danger" | "warning" | "default";
type BadgeSizes = "small" | "medium" | "large";

interface BadgeProps {
	variant?: BadgeVariants;
	theme?: BadgeThemes;
	children?: React.ReactNode | string;
	size?: BadgeSizes;
	customClass?: string;
	customStyles?: React.CSSProperties;
}

export { BadgeProps, BadgeThemes, BadgeSizes, BadgeVariants };
