import React from "react";
import Code from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { LeTopography } from "../../../../src";
import {
	attributes as topographyAttr,
	ReactComponent as TopographyMD,
} from "./topography.md";

import { LeAnchorLink, LeSourceButton } from "@/components";

const ImportPreview = () => (
	<Code
		language="jsx"
		children={`import { LeTopography, LeTopographyProps } from 'leux';`}
		style={dracula}
	/>
);

const CodePreview = () => (
	<>
		<Code
			language="jsx"
			children={`<LeTopography type="h1">h1. Heading</LeTopography>
<LeTopography type="h2">h2. Heading</LeTopography>
<LeTopography type="h3">h3. Heading</LeTopography>
<LeTopography type="h4">h4. Heading</LeTopography>
<LeTopography type="h5">h5. Heading</LeTopography>
<LeTopography type="h6">h6. Heading</LeTopography>
<LeTopography type="subtitle-1">subtitle-1. Subtitle</LeTopography>
<LeTopography type="subtitle-2">subtitle-1. Subtitle</LeTopography>
<LeTopography type="body-1">body-1. Body</LeTopography>
<LeTopography type="subtitle-2">subtitle-1. Subtitle</LeTopography>
<LeTopography type="caption">caption. Caption</LeTopography>
<LeTopography type="button">button. Button</LeTopography>
<LeTopography type="overline">overline. Overline</LeTopography>`}
			style={dracula}
		/>
	</>
);

const TopographyPage = () => {
	topographyAttr["LeTopography"] = LeTopography;
	topographyAttr["ImportPreview"] = ImportPreview;
	topographyAttr["CodePreview"] = CodePreview;
	topographyAttr["LeSourceButton"] = LeSourceButton;
	topographyAttr["LeAnchorLink"] = LeAnchorLink;

	return (
		<React.Fragment>
			<TopographyMD {...topographyAttr} />
		</React.Fragment>
	);
};

export default TopographyPage;
