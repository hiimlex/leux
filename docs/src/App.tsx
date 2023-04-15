import { LeHeader, LeWrapper } from "@/components";
import AppRouter from "@/core/router/AppRouter";
import "@/core/styles/global.scss";
import { ModalProvider } from "../../src";

function App() {
	return (
		<>
			<ModalProvider>
				<LeHeader />
				<LeWrapper>
					<AppRouter />
				</LeWrapper>
			</ModalProvider>
		</>
	);
}

export default App;
