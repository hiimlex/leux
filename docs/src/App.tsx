import { LeHeader, LeWrapper } from "@/components";
import AppRouter from "@/core/router/AppRouter";
import "@/core/styles/global.scss";
import { OverlayProvider } from "../../src";

function App() {
	return (
		<OverlayProvider>
			<LeHeader />
			<LeWrapper>
				<AppRouter />
			</LeWrapper>
		</OverlayProvider>
	);
}

export default App;
