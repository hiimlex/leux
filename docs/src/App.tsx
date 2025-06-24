import React from "react";
import { LeHeader, LeWrapper } from "@/components";
import AppRouter from "@/core/router/AppRouter";
import { LeGlobalConfig, OverlayProvider, ThemeProvider } from "@leux/ui";
import "./core/styles/global.scss";

const isDev = process.env.NODE_ENV === "development";

function App() {
	const defaultComponentsConfig: LeGlobalConfig = {};

	console.log({ isDev });

	return (
		<ThemeProvider globalConfig={defaultComponentsConfig}>
			<OverlayProvider>
				<LeHeader />
				<LeWrapper>
					<AppRouter />
				</LeWrapper>
			</OverlayProvider>
		</ThemeProvider>
	);
}

export default App;
