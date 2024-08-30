import { LeHighlighter, LeSourceButton } from "@/components";
import React from "react";
import { Box, BoxProps } from "../../../../src";

const pageAttributes: Record<string, any> = {};

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

pageAttributes["LeSourceButton"] = LeSourceButton;
pageAttributes["ThemingUsage"] = ThemingUsage;
pageAttributes["UseThemeUsage"] = UseThemeUsage;
pageAttributes["Box"] = ({ children }: BoxProps) => (
	<Box flex flexGap={12}>
		{children}
	</Box>
);

export default pageAttributes;
