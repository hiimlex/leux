import { LeApiTable, LeHighlighter, LePreview, LeSourceButton, PropsMapping } from "@/components";
import { Spinner, SpinnerProps } from "../../../../src";
import { attributes as spinnerAttr } from "./spinner.md";
import { useState } from "react";

const SpinnerImportPreview = () => (
	<LeHighlighter code={`import { Spinner, SpinnerProps } from "@leux/ui";`} language="tsx" />
);

const SpinnerSizePreview = () => {
	const [showCode, setShowCode] = useState<boolean>(false);

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
	const [showCode, setShowCode] = useState<boolean>(false);

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
	const [showCode, setShowCode] = useState<boolean>(false);

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

const SpinnerApiTable = () => {
	const props: PropsMapping<SpinnerProps> = {
		size: {
			type: "SpinnerSizes | 'small' | 'medium' | 'large'",
			defaultValue: "medium",
		},
		variant: {
			type: "SpinnerVariants | 'circle'",
			defaultValue: "circle",
		},
		theme: {
			type: "SpinnerThemes | 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'default'",
			defaultValue: "primary",
		},
		customSpeed: {
			type: "React.CSSProperties['animationDelay']",
		},
		customColor: {
			type: "React.CSSProperties['borderColor']",
		},
		customSize: {
			type: "React.CSSProperties['width']",
		},
		customClass: {
			type: "string",
		},
		customStyles: {
			type: "React.CSSProperties",
		},
	};

	return <LeApiTable props={props} />;
};

spinnerAttr["LeSourceButton"] = LeSourceButton;
spinnerAttr["LeHighlighter"] = LeHighlighter;
spinnerAttr["SpinnerImportPreview"] = SpinnerImportPreview;
spinnerAttr["SpinnerSizePreview"] = SpinnerSizePreview;
spinnerAttr["SpinnerThemePreview"] = SpinnerThemePreview;
spinnerAttr["SpinnerCustomPreview"] = SpinnerCustomPreview;
spinnerAttr["SpinnerApiTable"] = SpinnerApiTable;

export { spinnerAttr };
