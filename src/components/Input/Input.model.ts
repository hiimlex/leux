import React from "react";

type InputTypes = React.HTMLInputTypeAttribute;
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
	onChange?: React.ChangeEventHandler<HTMLInputElement>;
	customStyles?: React.CSSProperties;
	customClass?: string;
	state?: InputState;
	inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
	inputRef?: React.RefObject<HTMLInputElement>;
}

export { InputProps, InputSizes, InputTypes, InputVariant, InputState };
