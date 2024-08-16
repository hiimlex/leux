import { LeHighlighter, LeSourceButton } from "@/components";
import { attributes as themingAttr } from "./theming.md";
import React from "react";

const ThemingUsage: React.FC = () => {
	return (
		<LeHighlighter
			code={`import React from "react";
import { ThemeProvider, LeThemeMapper, Button } from "leux";

const themes: LeThemeMapper = {
	light: {
		primary: "#ffffff",
		secondary: "#000000",
	},
	dark: {
		primary: "#000000",
		secondary: "#ffffff",
	},
};

function App() {
	return (
		<ThemeProvider themes={themes} defaultTheme="light">
			<YourAppComponents />
			<Button>Leux Button</Button>
		</ThemeProvider>
	);
}`}
			language="tsx"
		/>
	);
};

const UseThemeUsage: React.FC = () => {
	return (
		<LeHighlighter
			code={`import React from "react";
import { useTheme } from "leux";

function App() {
	return (
		<ThemeProvider themes={themes} defaultTheme="light">
			<YourAppComponents />
			<Button>Leux Button</Button>
		</ThemeProvider>
	);
};

const MyComponent = () => {
	const { theme } = useTheme();

	return <div style={{ color: theme.primary }}>My Component</div>;
};
`}
			language="tsx"
		/>
	);
};

themingAttr["LeSourceButton"] = LeSourceButton;
themingAttr["ThemingUsage"] = ThemingUsage;
themingAttr["UseThemeUsage"] = UseThemeUsage;

export default themingAttr;
