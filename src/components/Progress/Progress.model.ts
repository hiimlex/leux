import { LeSizes } from "../../types";

type ProgressColorScheme = "primary" | "secondary" | "success" | "danger" | "warning";

type ProgressProps = {
	showIcon?: boolean;
	icon?: React.ReactNode;
	progressText?: string;
	progress: number;
	colorScheme?: ProgressColorScheme;
	customColor?: string;
	size?: LeSizes;
	isActive?: boolean;
	width?: React.CSSProperties["width"];
};

export { ProgressColorScheme, ProgressProps };
