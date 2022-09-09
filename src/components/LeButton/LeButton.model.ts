import { LeSizes } from "src/types";

export type LeButtonVariants =
	| "primary"
	| "secondary"
	| "success"
	| "danger"
	| "warning"
	| "default";

export type LeButtonTypes = "filled";

export interface LeButtonState {
	disabled?: boolean;
}

export interface LeButtonProps {
	label?: string;
	variant?: LeButtonVariants;
	type?: LeButtonTypes;
	size?: LeSizes;
	onClick?: (event?: any) => void;
	state?: LeButtonState;
	children?: React.ReactNode;
}
