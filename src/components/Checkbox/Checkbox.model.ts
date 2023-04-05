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
	checkBoxProps?: React.InputHTMLAttributes<HTMLInputElement>;
	checkboxRef?: React.RefObject<HTMLInputElement>;
}

export { CheckboxProps, CheckboxState, CheckboxSizes };
