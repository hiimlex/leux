import { LeHighlighter, LeSourceButton } from "@/components";
import { attributes as themingAttr } from "./globalconfig.md";
import React, { PropsWithChildren } from "react";

const GlobalConfigUsage: React.FC = () => {
	return (
		<LeHighlighter
			code={`import React from "react";
import { ThemeProvider, LeGlobal, Input } from "@leux/ui";

const globalConfig: LeGlobalConfig = {
	styling: {
		fontFamily: "Poppins, sans-serif",
		borderRadius: "8px",
	},
	input: {
		variant: "filled",
	}
};

function App() {
	return (
		<ThemeProvider globalConfig={globalConfig}>
			<Input placeholder="Leux Input with variant" />
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
import { useTheme } from "@leux/ui";

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

themingAttr["LeSourceWrapper"] = ({ children }: PropsWithChildren) => (
	<div className="le-flex le-gap-2">{children}</div>
);
themingAttr["GlobalConfigUsage"] = GlobalConfigUsage;
themingAttr["UseThemeUsage"] = UseThemeUsage;

export default themingAttr;
