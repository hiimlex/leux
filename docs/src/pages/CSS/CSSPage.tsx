import { LeHighlighter, LeSourceButton } from "@/components";
import { attributes as leCssAttr, ReactComponent as LeCSSMD } from "./css.md";

const LeCSSImportCode = () => (
	<LeHighlighter language="tsx" code={`import { LeCSS } from 'leux';`} />
);

leCssAttr["LeCSSImportCode"] = LeCSSImportCode;
leCssAttr["LeSourceButton"] = LeSourceButton;

const CSSPage = () => <LeCSSMD {...leCssAttr} />;

export default CSSPage;
