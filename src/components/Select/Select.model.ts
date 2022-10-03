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
	state?: SelectState;
	defaultValue?: string[];
	multiple?: boolean;
	options: SelectOption[];
	clickOptionHide?: boolean;
	clickOutsideHide?: boolean;
	valueSeparator?: string;
	selectCustomClass?: string;
	selectCustomStyles?: React.CSSProperties;
	optionCustomClass?: string;
	optionCustomStyles?: React.CSSProperties;
	dropdownCustomClass?: string;
	dropdownCustomStyles?: React.CSSProperties;
}

export { SelectProps, SelectSizes, SelectOption, SelectState, SelectVariant };
