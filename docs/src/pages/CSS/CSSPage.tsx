import { LeHighlighter, LeSourceButton } from "@/components";
import { attributes as leCssAttr, ReactComponent as LeCSSMD } from "./css.md";

const LeCSSImportCode = () => (
	<LeHighlighter
		language="tsx"
		code={`import { LeCSS as _LeCSS } from 'leux';
// import as _underscore to prevent unused variables`}
	/>
);

const LinkCode = () => (
	<LeHighlighter language="tsx" code={`<link rel="stylesheet" href="leux.min.css" />`} />
);

leCssAttr["LeCSSImportCode"] = LeCSSImportCode;
leCssAttr["LinkCode"] = LinkCode;

const CSSPage = () => <LeCSSMD {...leCssAttr} />;

export default CSSPage;
