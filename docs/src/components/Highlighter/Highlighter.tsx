import { useState } from "react";
import { MdOutlineContentCopy } from "react-icons/md";
import Refractor from "react-refractor";
import bash from "refractor/lang/bash";
import jsx from "refractor/lang/jsx";
import tsx from "refractor/lang/tsx";
import "./Highlighter.scss";

interface HighlighterProps {
	code: string;
	language: string;
	style?: "dracula" | "soft";
	copy?: "on" | "off";
}

Refractor.registerLanguage(jsx);
Refractor.registerLanguage(tsx);
Refractor.registerLanguage(bash);

const unsecuredCopyToClipboard = (text: string) => {
	const textArea = document.createElement("textarea");
	textArea.value = text;
	document.body.appendChild(textArea);
	textArea.focus();
	textArea.select();
	try {
		document.execCommand("copy");
	} catch (err) {
		console.error("Unable to copy to clipboard", err);
	}
	document.body.removeChild(textArea);
};

/**
 * Copies the text passed as param to the system clipboard
 * Check if using HTTPS and navigator.clipboard is available
 * Then uses standard clipboard API, otherwise uses fallback
 */
const copyToClipboard = (content: string) => {
	if (window.isSecureContext && navigator.clipboard) {
		navigator.clipboard.writeText(content);
	} else {
		unsecuredCopyToClipboard(content);
	}
};

const Highlighter = ({
	code,
	language,
	style = "dracula",
	copy = "on",
}: HighlighterProps) => {
	const [copied, setCopied] = useState(false);

	const handleCopyToClipboard = () => {
		copyToClipboard(code);
		setCopied(true);

		setTimeout(() => {
			setCopied(false);
		}, 2000);
	};

	return (
		<div
			className={"le-highlighter" + (style ? ` le-highlighter--${style}` : "")}
		>
			<Refractor value={code} language={language} />

			{copy === "on" && (
				<span className={"le-highlighter--copy"}>
					<MdOutlineContentCopy
						size="1.2rem"
						color={copied ? "#efefef" : "#afafaf"}
						onClick={handleCopyToClipboard}
					/>
					{copied && <span className="le-highlighter--copy--text">COPIED</span>}
				</span>
			)}
		</div>
	);
};

export default Highlighter;
