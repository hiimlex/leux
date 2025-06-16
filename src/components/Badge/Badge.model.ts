type BadgeVariants = "dashed" | "ghost" | "outlined" | "filled";
type BadgeThemes = "primary" | "secondary" | "success" | "danger" | "warning" | "default";
type BadgeSizes = "small" | "medium" | "large";

interface BadgeProps {
	variant?: BadgeVariants;
	theme?: BadgeThemes;
	children?: React.ReactNode | string;
	size?: BadgeSizes;
	customClass?: string;
	customStyles?: React.CSSProperties;
	clickable?: boolean;
	onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export { BadgeProps, BadgeThemes, BadgeSizes, BadgeVariants };
