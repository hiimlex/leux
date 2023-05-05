import { LeHighlighter, LePreview, LeSourceButton } from "@/components";
import { Spinner } from "../../../../src";
import { attributes as spinnerAttr } from "./spinner.md";
import { useState } from "react";

const SpinnerImportPreview = () => (
	<LeHighlighter code={`import { Spinner, SpinnerProps } from "leux";`} language="tsx" />
);

const SpinnerSizePreview = () => {
	const [showCode, setShowCode] = useState<boolean | undefined>(false);

	return (
		<>
			<LePreview showCode={showCode} setShowCode={setShowCode}>
				<Spinner size="small" />
				<Spinner size="medium" />
				<Spinner size="large" />
			</LePreview>
			{showCode && (
				<LeHighlighter
					code={`const Component = () => (
	<>
		<Spinner size="small" />
		<Spinner size="medium" />
		<Spinner size="large" />
	</>
);`}
					language="tsx"
				/>
			)}
		</>
	);
};

const SpinnerThemePreview = () => {
	const [showCode, setShowCode] = useState<boolean | undefined>(false);

	return (
		<>
			<LePreview showCode={showCode} setShowCode={setShowCode}>
				<Spinner theme="primary" />
				<Spinner theme="secondary" />
				<Spinner theme="success" />
				<Spinner theme="warning" />
				<Spinner theme="danger" />
				<Spinner theme="default" />
			</LePreview>
			{showCode && (
				<LeHighlighter
					code={`const Component = () => (
	<>
		<Spinner theme="primary" />
		<Spinner theme="secondary" />
		<Spinner theme="success" />
		<Spinner theme="danger" />
		<Spinner theme="default" />
	</>
);`}
					language="tsx"
				/>
			)}
		</>
	);
};

const SpinnerCustomPreview = () => {
	const [showCode, setShowCode] = useState<boolean | undefined>(false);

	return (
		<>
			<LePreview showCode={showCode} setShowCode={setShowCode}>
				<Spinner
					customColor="purple"
					customSize="52px"
					customSpeed="1.5s"
					customStyles={{
						backgroundColor: "#afafaf",
						padding: "3rem",
					}}
				/>
			</LePreview>
			{showCode && (
				<LeHighlighter
					code={`const Component = () => (
	<>
		<Spinner
			customColor="purple"
			customSize="52px"
			customSpeed="1.5s"
			customStyles={{
				backgroundColor: "#afafaf",
				padding: '3rem'
			}}
		/>
	</>
);`}
					language="tsx"
				/>
			)}
		</>
	);
};

spinnerAttr["LeSourceButton"] = LeSourceButton;
spinnerAttr["LeHighlighter"] = LeHighlighter;
spinnerAttr["SpinnerImportPreview"] = SpinnerImportPreview;
spinnerAttr["SpinnerSizePreview"] = SpinnerSizePreview;
spinnerAttr["SpinnerThemePreview"] = SpinnerThemePreview;
spinnerAttr["SpinnerCustomPreview"] = SpinnerCustomPreview;

export { spinnerAttr };
