import {
	LeAnchorLink,
	LeApiTable,
	LeHighlighter,
	LePreview,
	LeSourceButton,
	PropsMapping,
} from "@/components";

import React, { useState } from "react";
import { LeSafeAny, Typography, TypographyProps } from "../../../../src";

const typographyAttr: Record<string, LeSafeAny> = {};

const ImportPreview = () => {
	return (
		<LeHighlighter language="tsx" code={`import { Typography, TypographyProps } from "leux";`} />
	);
};

const CodePreview = () => {
	const [showCode, setShowCode] = useState<boolean>(false);

	return (
		<>
			<LePreview direction="column" showCode={showCode} setShowCode={setShowCode}>
				<Typography variant="h1">h1. Heading</Typography>
				<Typography variant="h2">h2. Heading</Typography>
				<Typography variant="h3">h3. Heading</Typography>
				<Typography variant="h4">h4. Heading</Typography>
				<Typography variant="h5">h5. Heading</Typography>
				<Typography variant="h6">h6. Heading</Typography>
				<Typography variant="subtitle-1">subtitle-1. Subtitle</Typography>
				<Typography variant="subtitle-2">subtitle-1. Subtitle</Typography>
				<Typography variant="body-1">body-1. Body</Typography>
				<Typography variant="subtitle-2">subtitle-1. Subtitle</Typography>
				<Typography variant="caption">caption. Caption</Typography>
				<Typography variant="button">button. Button</Typography>
				<Typography variant="overline">overline. Overline</Typography>
			</LePreview>
			{showCode && (
				<LeHighlighter
					language="tsx"
					code={`const Component = () => (
	<>
		<Typography variant="h1">h1. Heading</Typography>
		<Typography variant="h2">h2. Heading</Typography>
		<Typography variant="h3">h3. Heading</Typography>
		<Typography variant="h4">h4. Heading</Typography>
		<Typography variant="h5">h5. Heading</Typography>
		<Typography variant="h6">h6. Heading</Typography>
		<Typography variant="subtitle-1">subtitle-1. Subtitle</Typography>
		<Typography variant="subtitle-2">subtitle-1. Subtitle</Typography>
		<Typography variant="body-1">body-1. Body</Typography>
		<Typography variant="subtitle-2">subtitle-1. Subtitle</Typography>
		<Typography variant="caption">caption. Caption</Typography>
		<Typography variant="button">button. Button</Typography>
		<Typography variant="overline">overline. Overline</Typography>
	</>
);`}
				/>
			)}
		</>
	);
};

const TypographyCustomPreview = () => {
	const [showCode, setShowCode] = useState<boolean>(false);

	return (
		<>
			<LePreview showCode={showCode} setShowCode={setShowCode}>
				<Typography
					variant="body-1"
					customClass="le-color-danger"
					customStyles={{ fontWeight: "bold" }}
				>
					Custom CSS
				</Typography>
			</LePreview>
			{showCode && (
				<LeHighlighter
					language="tsx"
					code={`const Component = () => (
	<Typography
		variant="body-1"
		customClass="le-text-color--danger"
		customStyles={{ fontWeight: "bold" }}
	>
		Custom CSS
	</Typography>
);`}
				/>
			)}
		</>
	);
};

const TypographyApiTable = () => {
	const props: PropsMapping<TypographyProps> = {
		variant: {
			type: "'h1' | 'h2'| 'h3'| 'h4'| 'h5'| 'h6'| 'subtitle-1'| 'subtitle-2'| 'body-1'| 'body-2'| 'caption'| 'button'| 'overline'",
		},
		customClass: {
			type: "string",
		},
		customStyles: {
			type: "React.CSSProperties",
		},
		children: {
			type: "React.ReactNode",
		},
	};

	return <LeApiTable props={props}></LeApiTable>;
};

typographyAttr["Typography"] = Typography;
typographyAttr["ImportPreview"] = ImportPreview;
typographyAttr["TypographyCustomPreview"] = TypographyCustomPreview;
typographyAttr["CodePreview"] = CodePreview;
typographyAttr["LeSourceButton"] = LeSourceButton;
typographyAttr["LeAnchorLink"] = LeAnchorLink;
typographyAttr["TypographyApiTable"] = TypographyApiTable;
typographyAttr["LeHighlighter"] = LeHighlighter;

export default typographyAttr;
