import { LeHeader, LeWrapper } from "@/components";
import AppRouter from "@/core/router/AppRouter";
import "@/core/styles/global.scss";

function App() {
	return (
		<div>
			<LeHeader />
			<LeWrapper>
				<AppRouter />
			</LeWrapper>
		</div>
	);
}

export default App;
