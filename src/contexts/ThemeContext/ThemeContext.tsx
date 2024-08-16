import { createContext } from "react";

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
	secondaryHover?: string
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

type LeThemes = "light" | "dark" | (string & {});
type LeThemeMapper = Record<LeThemes, LeThemeType>;

type ThemeContextProps = {
	themes?: LeThemeMapper;
	currentTheme: LeThemes;
	swap: (theme: LeThemes) => void;
	defaultTheme?: LeThemes;
	theme?: LeThemeType;
};

const ThemeContext = createContext<ThemeContextProps>({} as ThemeContextProps);

export { ThemeContext, ThemeContextProps, LeThemeType, LeThemes, LeThemeMapper };
