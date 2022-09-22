import React from "react";

type InputTypes = "text" | "password" | "email";
type InputSizes = "small" | "medium" | "large";
type InputVariant = "outlined" | "filled";

interface InputProps {
	fieldKey?: string;
	type?: InputTypes;
	size?: InputSizes;
	variant?: InputVariant;
	width?: React.CSSProperties["width"];
	placeholder?: string;
	focusStyle?: boolean;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	customStyles?: React.CSSProperties;
	customClass?: string;
	state?: {
		disabled?: boolean;
	};
}

export { InputProps };
