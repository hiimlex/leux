import { LeHeader, LeWrapper } from "@/components";
import AppRouter from "@/core/router/AppRouter";
import "@/core/styles/global.scss";

import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";

function App() {
	SyntaxHighlighter.registerLanguage("jsx", jsx);

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
