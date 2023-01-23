import React from "react";

type CustomSelectOption = {
	value: string;
	label: string;
	state?: {
		disabled?: boolean;
		selected?: boolean;
	};
};

type CustomSelectSizes = "small" | "medium" | "large";
type CustomSelectVariant = "filled" | "outlined";
type CustomSelectState = {
	disabled?: boolean;
};

interface CustomSelectProps {
	fieldKey?: string;
	size?: CustomSelectSizes;
	placeholder?: string;
	width?: React.CSSProperties["width"];
	variant?: CustomSelectVariant;
	onChange?: (value: string[]) => void;
	state?: CustomSelectState;
	defaultValue?: string[];
	multiple?: boolean;
	options: CustomSelectOption[];
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

export {
	CustomSelectProps,
	CustomSelectSizes,
	CustomSelectOption,
	CustomSelectVariant,
	CustomSelectState,
};
