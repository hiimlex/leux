import { createContext } from "react";
import {
	ButtonProps,
	CheckboxProps,
	DropdownProps,
	InputProps,
	ModalProps,
	RadioProps,
	SpinnerProps,
	TableProps,
	TextAreaProps,
	ToastProps,
	TooltipProps,
	TypographyProps,
	SelectProps,
	BadgeProps,
} from "../../components";

/**
 * Le Theme
 *
 * @typedef {Object} LeThemeType
 * @property {string} border
 * @property {string} backgroundOne
 */
type LeThemeType = {
	border?: string;
	placeholder?: string;
	inputBackground?: string;
	disabled?: string;

	backgroundOne?: string;
	backgroundTwo?: string;
	backgroundThree?: string;
	textOne?: string;
	textTwo?: string;
	textThree?: string;

	default?: string;
	defaultHover?: string;
	defaultGhost?: string;
	primary?: string;
	primaryHover?: string;
	primaryGhost?: string;
	secondary?: string;
	secondaryHover?: string;
	secondaryGhost?: string;
	success?: string;
	successHover?: string;
	successGhost?: string;
	danger?: string;
	dangerHover?: string;
	dangerGhost?: string;
	warning?: string;
	warningHover?: string;
	warningGhost?: string;
} & Record<string, string>;

type LeThemes = "light" | "dark" | string;
type LeThemeMapper = Record<string, LeThemeType>;

/**
 * Le Theme
 *
 * Global Configuration for the components.
 *
 * @property {string} fontFamily - The font family to be used globally.
 * @property {Partial<ButtonProps>} [button] - Optional button configuration.
 * @property {Partial<InputProps>} [input] - Optional input configuration.
 * @property {Partial<CheckboxProps>} [checkbox] - Optional checkbox configuration.
 * @property {Partial<RadioProps>} [radio] - Optional radio configuration.
 * @property {Partial<SelectProps>} [select] - Optional select configuration.
 * @property {Partial<TextAreaProps>} [textarea] - Optional textarea configuration.
 * @property {Partial<DropdownProps>} [dropdown] - Optional dropdown configuration.
 * @property {Partial<TooltipProps>} [tooltip] - Optional tooltip configuration.
 * @property {Partial<TableProps>} [table] - Optional table configuration.
 * @property {Partial<ToastProps>} [toast] - Optional toast configuration.
 * @property {Partial<ModalProps>} [modal] - Optional modal configuration.
 * @property {Partial<SpinnerProps>} [spinner] - Optional spinner configuration.
 * @property {Partial<TypographyProps>} [typography] - Optional typography configuration.
 */
interface LeGlobalConfig {
	fontFamily?: string;

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
}

type ThemeContextProps = {
	themes?: LeThemeMapper;
	currentTheme: LeThemes;
	swap: (theme: LeThemes) => void;
	defaultTheme?: LeThemes;
	theme?: LeThemeType;
	globalConfig?: LeGlobalConfig;
};

const ThemeContext = createContext<ThemeContextProps>({} as ThemeContextProps);

export { ThemeContext, ThemeContextProps, LeThemeType, LeThemes, LeThemeMapper, LeGlobalConfig };
