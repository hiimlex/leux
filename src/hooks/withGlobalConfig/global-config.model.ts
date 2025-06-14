import {
	ButtonProps,
	BadgeProps,
	InputProps,
	CheckboxProps,
	RadioProps,
	SelectProps,
	TextAreaProps,
	DropdownProps,
	TooltipProps,
	TableProps,
	ToastProps,
	ModalProps,
	SpinnerProps,
	TypographyProps,
} from "../../components";

type LeGlobalConfigComponents = {
	button?: Partial<ButtonProps>;
	badge?: Partial<BadgeProps>;
	input?: Partial<InputProps>;
	checkbox?: Partial<CheckboxProps>;
	radio?: Partial<RadioProps>;
	select?: Partial<SelectProps>;
	textarea?: Partial<TextAreaProps>;
	dropdown?: Partial<DropdownProps>;
	tooltip?: Partial<TooltipProps>;
	table?: Partial<TableProps>;
	toast?: Partial<ToastProps>;
	modal?: Partial<ModalProps>;
	spinner?: Partial<SpinnerProps>;
	typography?: Partial<TypographyProps>;
};

type LeGlobalConfig = LeGlobalConfigComponents & { fontFamily?: string };

type ConfigKey = keyof LeGlobalConfigComponents;

export { LeGlobalConfig, LeGlobalConfigComponents, ConfigKey };
