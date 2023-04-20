import { ChangeEventHandler } from "react";

type SelectSizes = "small" | "medium" | "large";
type SelectVariants = "filled" | "outlined";
type SelectOption = {
	label: string;
	value: string;
	selected?: boolean;
	disabled?: boolean;
};

type SelectState = {
	disabled?: boolean;
};

interface SelectProps {
	fieldKey?: string;
	size?: SelectSizes;
	variant?: SelectVariants;
	showPlaceholderAsOption?: boolean;
	placeholder?: string;
	width?: React.CSSProperties["width"];
	onChange?: ChangeEventHandler<HTMLSelectElement>;
	customStyles?: React.CSSProperties;
	customClass?: string;
	options?: SelectOption[];
	defaultValue?: string;
	state?: SelectState;
	selectRef?: React.Ref<HTMLSelectElement>;
	selectProps?: React.HTMLProps<HTMLSelectElement>;
}

export { SelectProps, SelectSizes, SelectVariants, SelectState, SelectOption };
