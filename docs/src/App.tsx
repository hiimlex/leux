import React from "react";
import { LeHeader, LeWrapper } from "@/components";
import AppRouter from "@/core/router/AppRouter";
import { LeGlobalConfig, OverlayProvider, ThemeProvider } from "../../src";
import "../../src/styles/global.scss";
import "../../src/styles/utils.scss";
import "./core/styles/global.scss";

function App() {
	const defaultComponentsConfig: LeGlobalConfig = {
		// Default configuration for components
	};

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
