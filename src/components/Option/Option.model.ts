type OptionState = {
	disabled?: boolean;
};

interface OptionProps {
	value: string;
	children?: React.ReactNode;
	customClass?: string;
	customStyles?: React.CSSProperties;
	state?: OptionState;
}

export { OptionProps, OptionState };
