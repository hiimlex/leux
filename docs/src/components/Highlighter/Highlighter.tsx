import { useContext, useEffect, useState } from "react";
import { MdOutlineContentCopy } from "react-icons/md";
import Refractor from "react-refractor";
import bash from "refractor/lang/bash";
import jsx from "refractor/lang/jsx";
import tsx from "refractor/lang/tsx";
import scss from "refractor/lang/scss";
import "./Highlighter.scss";
import React from "react";
import { useTheme, ThemeContext } from "../../../../src";

interface HighlighterProps {
	code: string;
	language: string;
	style?: "dracula" | "soft";
	copy?: "on" | "off";
}

Refractor.registerLanguage(jsx);
Refractor.registerLanguage(tsx);
Refractor.registerLanguage(bash);
Refractor.registerLanguage(scss);

const Highlighter: React.FC<HighlighterProps> = ({
	code,
	language,
	style = "dracula",
	copy = "on",
}) => {
	const { currentTheme } = useTheme();

	useEffect(() => {});
	const [copied, setCopied] = useState(false);

	const handleCopyToClipboard = () => {
		navigator.clipboard.writeText(code);
		setCopied(true);

		setTimeout(() => {
			setCopied(false);
		}, 2000);
	};

	const refractor = Refractor({ language, value: code });

	return (
		<div
			className={
				"le-highlighter" +
				(style ? ` le-highlighter--${style}` : "") +
				` le-highlighter--${currentTheme}`
			}
		>
			{refractor}

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
