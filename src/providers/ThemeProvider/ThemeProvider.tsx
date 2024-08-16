import React, { PropsWithChildren, useEffect, useMemo, useState } from "react";
import { LeThemeMapper, LeThemes, ThemeContext, ThemeContextProps } from "../../contexts";
import "../../styles/theme.scss";

interface ThemeProviderProps extends PropsWithChildren {
	themes?: ThemeContextProps["themes"];
	defaultTheme?: ThemeContextProps["defaultTheme"];
	persistThemeKey?: string;
}

const defaultThemes: LeThemeMapper = {
	light: {},
	dark: {},
};

const ThemeProvider: React.FC<ThemeProviderProps> = ({
	children,
	themes,
	defaultTheme,
	persistThemeKey,
}) => {
	const [appThemes, _setAppThemes] = useState<LeThemeMapper>(themes ?? defaultThemes);

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
	// Get Persisted Theme
	useEffect(() => {
		const theme = getPersistedTheme();
		setCurrentTheme(theme);
	}, []);

	const setBodyClass = (theme: LeThemes) => {
		const bodyTag = document.querySelector("body");

		if (bodyTag) {
			// Remove any existing theme classes
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

export { ThemeProvider };
