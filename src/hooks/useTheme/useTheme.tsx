import { useContext } from "react";
import { ThemeContext, ThemeContextProps } from "../../contexts";

/**
 * useTheme hook
 *
 * An one-liner hook to get the theme context and its methods.
 *
 *
 * @returns {ThemeContextProps}
 */
function useTheme(): ThemeContextProps {
	const context = useContext(ThemeContext);

	return context;
}

export { useTheme };
