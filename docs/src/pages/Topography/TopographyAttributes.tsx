import { LeAnchorLink, LeHighlighter, LePreview, LeSourceButton } from "@/components";

import { Topography } from "../../../../src";
import { attributes as topographyAttr } from "./topography.md";
import { useState } from "react";

const ImportPreview = () => {
	return (
		<LeHighlighter language="tsx" code={`import { Topography, TopographyProps } from "leux";`} />
	);
};

const CodePreview = () => {
	const [showCode, setShowCode] = useState<boolean | undefined>(false);

	return (
		<>
			<LePreview direction="column" showCode={showCode} setShowCode={setShowCode}>
				<Topography variant="h1">h1. Heading</Topography>
				<Topography variant="h2">h2. Heading</Topography>
				<Topography variant="h3">h3. Heading</Topography>
				<Topography variant="h4">h4. Heading</Topography>
				<Topography variant="h5">h5. Heading</Topography>
				<Topography variant="h6">h6. Heading</Topography>
				<Topography variant="subtitle-1">subtitle-1. Subtitle</Topography>
				<Topography variant="subtitle-2">subtitle-1. Subtitle</Topography>
				<Topography variant="body-1">body-1. Body</Topography>
				<Topography variant="subtitle-2">subtitle-1. Subtitle</Topography>
				<Topography variant="caption">caption. Caption</Topography>
				<Topography variant="button">button. Button</Topography>
				<Topography variant="overline">overline. Overline</Topography>
			</LePreview>
			{showCode && (
				<LeHighlighter
					language="tsx"
					code={`const Component = () => (
	<>
		<Topography variant="h1">h1. Heading</Topography>
		<Topography variant="h2">h2. Heading</Topography>
		<Topography variant="h3">h3. Heading</Topography>
		<Topography variant="h4">h4. Heading</Topography>
		<Topography variant="h5">h5. Heading</Topography>
		<Topography variant="h6">h6. Heading</Topography>
		<Topography variant="subtitle-1">subtitle-1. Subtitle</Topography>
		<Topography variant="subtitle-2">subtitle-1. Subtitle</Topography>
		<Topography variant="body-1">body-1. Body</Topography>
		<Topography variant="subtitle-2">subtitle-1. Subtitle</Topography>
		<Topography variant="caption">caption. Caption</Topography>
		<Topography variant="button">button. Button</Topography>
		<Topography variant="overline">overline. Overline</Topography>
	</>
);`}
				/>
			)}
		</>
	);
};

const TopographyCustomPreview = () => {
	const [showCode, setShowCode] = useState<boolean | undefined>(false);

	return (
		<>
			<LePreview showCode={showCode} setShowCode={setShowCode}>
				<Topography
					variant="body-1"
					customClass="le-color-text--danger"
					customStyles={{ fontWeight: "bold" }}
				>
					Custom CSS
				</Topography>
			</LePreview>
			{showCode && (
				<LeHighlighter
					language="tsx"
					code={`const Component = () => (
	<Topography
		variant="body-1"
		customClass="le-text-color--danger"
		customStyles={{ fontWeight: "bold" }}
	>
		Custom CSS
	</Topography>
);`}
				/>
			)}
		</>
	);
};

topographyAttr["Topography"] = Topography;
topographyAttr["ImportPreview"] = ImportPreview;
topographyAttr["TopographyCustomPreview"] = TopographyCustomPreview;
topographyAttr["CodePreview"] = CodePreview;
topographyAttr["LeSourceButton"] = LeSourceButton;
topographyAttr["LeAnchorLink"] = LeAnchorLink;
topographyAttr["LeHighlighter"] = LeHighlighter;

export { topographyAttr };
