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
	size?: SelectSizes;
	placeholder?: string;
	width?: React.CSSProperties["width"];
	type?: SelectTypes;
	focusStyle?: boolean;
	onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
	customStyles?: React.CSSProperties;
	customClass?: string;
	state?: SelectState;
	children?: React.ReactNode;
	defaultValue?: string;
}

export { SelectProps, SelectSizes, SelectOption, SelectState, SelectTypes };
