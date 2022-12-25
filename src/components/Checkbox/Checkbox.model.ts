type CheckboxState = {
	disabled?: boolean;
};

type CheckboxSizes = "small" | "medium" | "large";

interface CheckboxProps {
	fieldKey: string;
	label?: string;
	size?: CheckboxSizes;
	defaultChecked?: boolean;
	state?: CheckboxState;
	width?: React.CSSProperties["width"];
	customClass?: string;
	customStyles?: React.CSSProperties;
	customInputClass?: string;
	customInputStyles?: React.CSSProperties;
	customLabelClass?: string;
	customLabelStyles?: React.CSSProperties;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export { CheckboxProps, CheckboxState, CheckboxSizes };
