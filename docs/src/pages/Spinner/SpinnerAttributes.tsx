import { LeHighlighter, LeSourceButton } from "@/components";
import { attributes as spinnerAttr } from "./spinner.md";

const SpinnerImportPreview = () => (
	<LeHighlighter code={`import { Spinner, SpinnerProps } from "leux";`} language="tsx" />
);

spinnerAttr["LeSourceButton"] = LeSourceButton;
spinnerAttr["SpinnerImportPreview"] = SpinnerImportPreview;

export { spinnerAttr };
