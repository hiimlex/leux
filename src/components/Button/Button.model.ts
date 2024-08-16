import { MouseEvent } from "react";

type ButtonColorScheme = "primary" | "secondary" | "success" | "danger" | "warning" | "default";
type ButtonVariants = "filled" | "outlined" | "ghost";
type ButtonTypes = "submit" | "reset" | "button";
type ButtonSizes = "small" | "medium" | "large";

interface ButtonState {
	disabled?: boolean;
}

interface ButtonProps {
	colorScheme?: ButtonColorScheme;
	variant?: ButtonVariants;
	type?: ButtonTypes;
	size?: ButtonSizes;
	onClick?: (event?: MouseEvent<HTMLButtonElement>) => void;
	state?: ButtonState;
	children?: React.ReactNode;
	customClass?: string;
	customStyles?: React.CSSProperties;
	buttonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
}

export { ButtonProps, ButtonVariants, ButtonColorScheme, ButtonState, ButtonSizes, ButtonTypes };
