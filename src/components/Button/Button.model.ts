import { MouseEvent } from "react";

type ButtonThemes = "primary" | "secondary" | "success" | "danger" | "warning" | "default";
type ButtonVariants = "filled" | "outlined" | "ghost";
type ButtonTypes = "submit" | "reset" | "button";
type ButtonSizes = "small" | "medium" | "large";

interface ButtonState {
	disabled?: boolean;
}

interface ButtonProps {
	theme?: ButtonThemes;
	variant?: ButtonVariants;
	type?: ButtonTypes;
	size?: ButtonSizes;
	onClick?: (event?: MouseEvent<HTMLButtonElement>) => void;
	state?: ButtonState;
	children?: React.ReactNode;
	customClass?: string;
	customStyles?: React.CSSProperties;
}

export { ButtonProps, ButtonVariants, ButtonThemes, ButtonState, ButtonSizes, ButtonTypes };
