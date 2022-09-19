import { LeAnchorLink, LeSourceButton } from "@/components";

import Code from "react-syntax-highlighter";

import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";

import { Topography } from "../../../../src";
import { attributes as topographyAttr } from "./topography.md";

const ImportPreview = () => {
	return (
		<Code
			language="jsx"
			children={`import { Topography, TopographyProps } from 'leux';`}
			style={dracula}
		/>
	);
};

const CodePreview = () => (
	<>
		<Code
			language="jsx"
			children={`<Topography type="h1">h1. Heading</Topography>
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
<LeTopography type="overline">overline. Overline</LeTopography>`}
			style={dracula}
		/>
	</>
);

const TopographyCustomPreview = () => (
	<>
		<div className="le-preview">
			<Topography
				type="body-1"
				customClass="le-color-text--danger"
				customStyles={{ fontWeight: "bold" }}
			>
				Custom CSS
			</Topography>
		</div>
		<Code
			language="jsx"
			style={dracula}
			children={`<Topography
	type="body-1"
	customClass="le-text-color--danger"
	customStyles={{ fontWeight: "bold" }}
>
	Custom CSS
</Topography>`}
		></Code>
	</>
);

topographyAttr["Topography"] = Topography;
topographyAttr["ImportPreview"] = ImportPreview;
topographyAttr["TopographyCustomPreview"] = TopographyCustomPreview;
topographyAttr["CodePreview"] = CodePreview;
topographyAttr["LeSourceButton"] = LeSourceButton;
topographyAttr["LeAnchorLink"] = LeAnchorLink;
topographyAttr["Code"] = Code;

export { topographyAttr };
