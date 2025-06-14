import { createContext } from "react";
import { ThemeContextProps } from "./theme-context.model";

const ThemeContext = createContext<ThemeContextProps>({} as ThemeContextProps);

export { ThemeContext };
