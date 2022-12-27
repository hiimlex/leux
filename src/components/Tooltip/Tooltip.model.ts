type TooltipDirections = "top" | "bottom" | "left" | "right";
type TooltipThemes = "primary" | "secondary" | "success" | "danger" | "warning" | "default";

interface TooltipProps {
	direction?: TooltipDirections;
	theme?: TooltipThemes;
	customClass?: string;
	customStyles?: React.CSSProperties;
	title: string;
	children?: React.ReactNode;
}

export { TooltipProps, TooltipDirections };
