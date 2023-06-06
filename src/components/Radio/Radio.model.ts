type RadioSizes = "small" | "medium" | "large";
type RadioState = {
	disabled?: boolean;
};

interface RadioProps {
	fieldKey: string;
	label: string;
	value: string;
	size?: RadioSizes;
	state?: RadioState;
	defaultChecked?: boolean;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	radioProps?: React.InputHTMLAttributes<HTMLInputElement>;
	customClass?: string;
	customStyles?: React.CSSProperties;
	customLabelClass?: string;
	customLabelStyles?: React.CSSProperties;
	customInputClass?: string;
	customInputStyles?: React.CSSProperties;
	radioRef?: React.Ref<HTMLInputElement>;
}

export { RadioProps, RadioSizes, RadioState };
