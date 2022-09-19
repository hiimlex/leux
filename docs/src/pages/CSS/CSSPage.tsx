import React from "react";
import Code from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { attributes as leCssAttr, ReactComponent as LeCSSMD } from "./css.md";
import { LeSourceButton } from "@/components";

const LeCSSImportCode = () => (
	<Code
		language="jsx"
		children={`import { LeCSS } from 'leux';`}
		style={dracula}
	></Code>
);

leCssAttr["LeCSSImportCode"] = LeCSSImportCode;
leCssAttr["LeSourceButton"] = LeSourceButton;

const CSSPage = () => <LeCSSMD {...leCssAttr} />;

export default CSSPage;
