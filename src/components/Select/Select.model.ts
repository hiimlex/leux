import React from "react";

type SelectOption = {
	value: string;
	label: string;
	state?: {
		disabled?: boolean;
		selected?: boolean;
	};
};

type SelectSizes = "small" | "medium" | "large";
type SelectVariant = "filled" | "outlined";
type SelectState = {
	disabled?: boolean;
};

interface SelectProps {
	fieldKey?: string;
	size?: SelectSizes;
	placeholder?: string;
	width?: React.CSSProperties["width"];
	variant?: SelectVariant;
	focusStyle?: boolean;
	onChange?: (value: string[]) => void;
	customStyles?: React.CSSProperties;
	customClass?: string;
	state?: SelectState;
	defaultValue?: string[];
	multiple?: boolean;
	options: SelectOption[];
	optionCustomClass?: string;
	optionCustomStyles?: React.CSSProperties;
	clickHide?: boolean;
	clickOutsideHide?: boolean;
}

export { SelectProps, SelectSizes, SelectOption, SelectState, SelectVariant };
