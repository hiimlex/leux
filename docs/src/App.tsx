import { LeHeader, LeWrapper } from "@/components";
import AppRouter from "@/core/router/AppRouter";
import React from "react";
import { OverlayProvider, ThemeProvider } from "../../src";
import "../../src/styles/global.scss";
import "../../src/styles/utils.scss";
import "./core/styles/global.scss";

function App() {
	return (
		<ThemeProvider>
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
