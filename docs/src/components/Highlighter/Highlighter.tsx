import Refractor from "react-refractor";
import jsx from "refractor/lang/jsx";
import tsx from "refractor/lang/tsx";
import bash from "refractor/lang/bash";
import "./Highlighter.scss";

interface HighlighterProps {
	code: string;
	language: string;
	style?: "dracula" | "soft";
}

Refractor.registerLanguage(jsx);
Refractor.registerLanguage(tsx);
Refractor.registerLanguage(bash);

const Highlighter = ({
	code,
	language,
	style = "dracula",
}: HighlighterProps) => {
	return (
		<div
			className={"le-highlighter" + (style ? ` le-highlighter--${style}` : "")}
		>
			{" "}
			<Refractor value={code} language={language} />
		</div>
	);
};

export default Highlighter;
