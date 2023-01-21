type TextAreaVariants = "outlined" | "filled";
type TextAreaSizes = "small" | "medium" | "large";

type TextAreaState = {
	disabled?: boolean;
};

interface TextAreaProps {
	fieldKey?: string;
	variant?: TextAreaVariants;
	size?: TextAreaSizes;
	minRows?: number;
	rows?: number;
	defaultValue?: string;
	onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
	state?: TextAreaState;
	placeholder?: string;
	resize?: boolean;
	width?: React.CSSProperties["width"];
	customClass?: string;
	customStyles?: React.CSSProperties;
	textAreaProps?: React.TextareaHTMLAttributes<HTMLTextAreaElement>;
	textAreaRef?: React.RefObject<HTMLTextAreaElement>;
}

export { TextAreaProps, TextAreaSizes, TextAreaState, TextAreaVariants };
