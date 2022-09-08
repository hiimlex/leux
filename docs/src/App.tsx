import { LeHeader, LeWrapper } from "@/components";
import AppRouter from "@/core/router/AppRouter";
import React from "react";

function App() {
	return (
		<React.Fragment>
			<LeHeader />
			<LeWrapper>
				<AppRouter />
			</LeWrapper>
		</React.Fragment>
	);
}

export default App;
