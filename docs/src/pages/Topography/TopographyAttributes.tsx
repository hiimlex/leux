import { LeAnchorLink, LeHighlighter, LeSourceButton } from "@/components";

import { Topography } from "../../../../src";
import { attributes as topographyAttr } from "./topography.md";

const ImportPreview = () => {
	return <LeHighlighter language="tsx" code={`import { Topography, TopographyProps } from "leux";`} />;
};

const CodePreview = () => (
	<>
		<LeHighlighter
			language="tsx"
			code={`const Component = () => (
	<>
		<Topography type="h1">h1. Heading</Topography>
		<Topography type="h2">h2. Heading</Topography>
		<Topography type="h3">h3. Heading</Topography>
		<Topography type="h4">h4. Heading</Topography>
		<Topography type="h5">h5. Heading</Topography>
		<Topography type="h6">h6. Heading</Topography>
		<Topography type="subtitle-1">subtitle-1. Subtitle</Topography>
		<Topography type="subtitle-2">subtitle-1. Subtitle</Topography>
		<Topography type="body-1">body-1. Body</Topography>
		<Topography type="subtitle-2">subtitle-1. Subtitle</Topography>
		<Topography type="caption">caption. Caption</Topography>
		<Topography type="button">button. Button</Topography>
		<Topography type="overline">overline. Overline</Topography>
	</>
);`}
		/>
	</>
);

const TopographyCustomPreview = () => (
	<>
		<div className="le-preview">
			<Topography type="body-1" customClass="le-color-text--danger" customStyles={{ fontWeight: "bold" }}>
				Custom CSS
			</Topography>
		</div>
		<LeHighlighter
			language="tsx"
			code={`const Component = () => (
	<Topography
		type="body-1"
		customClass="le-text-color--danger"
		customStyles={{ fontWeight: "bold" }}
	>
		Custom CSS
	</Topography>
);`}
		/>
	</>
);

topographyAttr["Topography"] = Topography;
topographyAttr["ImportPreview"] = ImportPreview;
topographyAttr["TopographyCustomPreview"] = TopographyCustomPreview;
topographyAttr["CodePreview"] = CodePreview;
topographyAttr["LeSourceButton"] = LeSourceButton;
topographyAttr["LeAnchorLink"] = LeAnchorLink;
topographyAttr["LeHighlighter"] = LeHighlighter;

export { topographyAttr };
