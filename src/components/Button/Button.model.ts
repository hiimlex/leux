export type ButtonVariants =
	| "primary"
	| "secondary"
	| "success"
	| "danger"
	| "warning"
	| "default";

export type ButtonTypes = "filled" | "outlined" | "ghost";

export interface ButtonState {
	disabled?: boolean;
}
