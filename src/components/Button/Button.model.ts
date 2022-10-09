import { MouseEvent } from "react";

type ButtonVariants = "primary" | "secondary" | "success" | "danger" | "warning" | "default";

type ButtonTypes = "filled" | "outlined" | "ghost";

type ButtonSizes = "small" | "medium" | "large";

interface ButtonState {
	disabled?: boolean;
}

interface ButtonProps {
	variant?: ButtonVariants;
	type?: ButtonTypes;
	size?: ButtonSizes;
	onClick?: (event?: MouseEvent<HTMLButtonElement>) => void;
	state?: ButtonState;
	children?: React.ReactNode;
	customClass?: string;
	customStyles?: React.CSSProperties;
}

export { ButtonProps, ButtonVariants, ButtonTypes, ButtonState, ButtonSizes };
