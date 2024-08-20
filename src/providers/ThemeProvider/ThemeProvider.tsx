import React, { PropsWithChildren, useEffect, useMemo, useState } from "react";
import {
	LeThemeMapper,
	LeThemeType,
	LeThemes,
	ThemeContext,
	ThemeContextProps,
} from "../../contexts";
import "../../styles/theme.scss";

interface ThemeProviderProps extends PropsWithChildren {
	themes?: ThemeContextProps["themes"];
	defaultTheme?: ThemeContextProps["defaultTheme"];
	persistThemeKey?: string;
	shouldPersist?: boolean;
}

const appTheme: LeThemeType = {
	primary: "#5d69d9",
	secondary: "#8ca9d5",
	success: "#70c1b3",
	danger: "#f25f5c",
	warning: "#ffd166",
	disabled: "#cdcdcd",
};

const defaultThemes: LeThemeMapper = {
	light: {
		...appTheme,
		default: "#d2d9e5",
		defaultHover: "#b3b9c6",
		defaultGhost: "#b3b9c644",
		inputBackground: "#f1f3f7",
		border: "#e1e2e4",
		backgroundOne: "#ffffff",
		backgroundTwo: "#f9f9f9",
		backgroundThree: "#e1e2e8",
		textOne: "#1b2140",
		textTwo: "#514f62",
		textThree: "#616377",
		textInverse: "#ffffff",
	},
	dark: {
		...appTheme,
		default: "#626266",
		defaultHover: "#4d4d50",
		defaultGhost: "#4d4d5044",
		inputBackground: "#414245",
		border: "#43444a",
		backgroundOne: "#262629",
		backgroundTwo: "#2d2d30",
		backgroundThree: "#050518",
		textOne: "#ffffff",
		textTwo: "#d1d1d7",
		textThree: "#969699",
		textInverse: "#1b2140",
	},
};

const ThemeProvider: React.FC<ThemeProviderProps> = ({
	children,
	themes,
	defaultTheme,
	persistThemeKey,
	shouldPersist = true,
}) => {
	const appThemes = useMemo(() => {
		return { ...defaultThemes, ...themes };
	}, [themes, defaultThemes]);

	const [currentTheme, setCurrentTheme] = useState<ThemeContextProps["currentTheme"]>(
		defaultTheme || "light"
	);
	const PERSIST_THEME_KEY = persistThemeKey || "le-theme";

	const getPersistedTheme = () => {
		const theme = localStorage.getItem(PERSIST_THEME_KEY);

		if (theme) {
			return theme as LeThemes;
		}

		return currentTheme;
	};

	useEffect(() => {
		if (shouldPersist) {
			const theme = getPersistedTheme();
			setCurrentTheme(theme);
		}
	}, []);

	const setBodyClass = (theme: LeThemes) => {
		const bodyTag = document.querySelector("body");

		if (bodyTag) {
			const findBodyClassTheme = Array.from(bodyTag.classList).find((c) =>
				c.startsWith("le-theme-")
			);

			if (findBodyClassTheme) {
				bodyTag.classList.remove(findBodyClassTheme);
			}

			bodyTag.classList.add(`le-theme-${theme}`);
		}
	};

	const setThemeCSSVariables = (theme: LeThemes) => {
		Object.keys(appThemes[theme]).forEach((colorKey) => {
			const colorValue = appThemes[theme][colorKey];
			document.documentElement.style.setProperty(`--le-color-${colorKey}`, colorValue);
		});
	};
	// Listen to theme changes to update the body class and theme css variables
	useEffect(() => {
		if (appThemes) {
			Object.keys(appThemes).forEach((theme) => {
				if (currentTheme === theme) {
					setBodyClass(theme);

					if (appThemes[theme]) {
						setThemeCSSVariables(theme);
					}
				}
			});
		}
	}, [appThemes, currentTheme]);

	const theme = useMemo(() => {
		return appThemes[currentTheme];
	}, [defaultTheme, appThemes]);

	const swap = (newtheme: LeThemes) => {
		setCurrentTheme(newtheme);
		localStorage.setItem(PERSIST_THEME_KEY, newtheme);
	};

	return (
		<ThemeContext.Provider value={{ theme, themes: appThemes, currentTheme, swap, defaultTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export { ThemeProvider, defaultThemes, ThemeProviderProps };
