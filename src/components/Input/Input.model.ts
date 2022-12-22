import React from "react";

type InputTypes = "text" | "password" | "email";
type InputSizes = "small" | "medium" | "large";
type InputVariant = "outlined" | "filled";
type InputState = {
	disabled?: boolean;
};

interface InputProps {
	fieldKey?: string;
	type?: InputTypes;
	size?: InputSizes;
	variant?: InputVariant;
	width?: React.CSSProperties["width"];
	placeholder?: string;
	focusStyle?: boolean;
	onChange?: (value: string, event?: React.ChangeEvent<HTMLInputElement>) => void;
	customStyles?: React.CSSProperties;
	customClass?: string;
	state?: InputState;
}

export { InputProps, InputSizes, InputTypes, InputVariant, InputState };
