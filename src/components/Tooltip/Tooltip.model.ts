type TooltipDirections = "top" | "bottom" | "left" | "right";
type TooltipColorScheme = "primary" | "secondary" | "success" | "danger" | "warning" | "default";

interface TooltipProps {
	direction?: TooltipDirections;
	colorScheme?: TooltipColorScheme;
	customClass?: string;
	customStyles?: React.CSSProperties;
	title: string;
	children?: React.ReactNode;
}

export { TooltipProps, TooltipDirections, TooltipColorScheme };
