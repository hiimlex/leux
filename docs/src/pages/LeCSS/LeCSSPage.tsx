import React from "react";
import Code from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { attributes as leCssAttr, ReactComponent as LeCSSMD } from "./lecss.md";

const ImportCode = () => (
	<Code
		language="jsx"
		children={`import { LeCSS } from 'leux';`}
		style={dracula}
	></Code>
);

const LeCSSPage = () => {
	leCssAttr["ImportCode"] = ImportCode;

	return (
		<React.Fragment>
			<LeCSSMD {...leCssAttr} />
		</React.Fragment>
	);
};

export default LeCSSPage;
