import React from "react";

type SelectOption = {
	value: string;
	label: string;
};

type SelectSizes = "small" | "medium" | "large";
type SelectTypes = "filled" | "outlined";
type SelectState = {
	disabled?: boolean;
};

interface SelectProps {
	fieldKey?: string;
	options?: SelectOption[];
	size?: SelectSizes;
	placeholder?: string;
	width?: React.CSSProperties["width"];
	type?: SelectTypes;
	focusStyle?: boolean;
	onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
	customStyles?: React.CSSProperties;
	customClass?: string;
	optionCustomStyles?: React.CSSProperties;
	optionCustomClass?: string;
	state?: SelectState;
}

export { SelectProps, SelectSizes, SelectOption, SelectState, SelectTypes };
