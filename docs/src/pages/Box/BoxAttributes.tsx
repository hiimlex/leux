import { PropsMapping, LeApiTable, LeHighlighter, LePreview, LeSourceButton } from "@/components";
import { NavLink } from "react-router-dom";
import { Box, BoxProps } from "@leux/ui";
import { attributes as boxAttr } from "./box.md";
import { useState } from "react";
import React from "react";

const ImportPreview = () => {
	return <LeHighlighter code={`import { Box, BoxProps } from "@leux/ui";`} language="tsx" />;
};

const BoxCssPreview = () => {
	const [showCode, setShowCode] = useState<boolean>(false);

	return (
		<>
			<LePreview showCode={showCode} setShowCode={setShowCode}>
				<Box
					flex
					height="120px"
					width="120px"
					padding="30px"
					borderRadius="100%"
					bgColor="default"
					centered
				>
					Box
				</Box>
			</LePreview>
			{showCode && (
				<LeHighlighter
					language="tsx"
					code={`const Component = () => (
	<Box
		flex
		height="120px"
		width="120px"
		padding="30px"
		borderRadius="100%"
		bgColor="default"
		centered
	>
		CSS Properties example
	</Box>
);`}
				/>
			)}
		</>
	);
};

const BoxCustomPreview = () => {
	const [showCode, setShowCode] = useState<boolean>(false);

	return (
		<>
			<LePreview showCode={showCode} setShowCode={setShowCode}>
				<Box
					customClass="le-color-primary le-bg--default le-text-body-2"
					customStyles={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						padding: 12,
					}}
				>
					with custom CSS and Classes
				</Box>
			</LePreview>
			{showCode && (
				<LeHighlighter
					language="tsx"
					code={`const Component = () => (
	<Box
		customClass="le-color-primary le-bg-default le-text-body-2"
		customStyles={{
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			padding: 12,
		}}
	>
		with custom CSS and Classes
	</Box>
);`}
				/>
			)}
		</>
	);
};

const BoxCenteredPreview = () => {
	const [showCode, setShowCode] = useState<boolean>(false);

	return (
		<>
			<LePreview showCode={showCode} setShowCode={setShowCode}>
				<Box
					centered
					padding={12}
					bgColor="default"
					textColor="darker"
					customClass="le-text--body-1"
					width="100%"
				>
					text will be centered
				</Box>
			</LePreview>
			{showCode && (
				<LeHighlighter
					language="tsx"
					code={`const Component = () = (
	<Box centered padding={12} bgColor="default" textColor="darker">
		text will be centered
	</Box>
);`}
				/>
			)}
		</>
	);
};

const BoxTableApi = () => {
	const props: PropsMapping<BoxProps> = {
		flex: {
			type: "boolean",
		},
		alignItems: {
			type: "React.CSSProperties['alignItems']",
		},
		justifyContent: {
			type: "React.CSSProperties['justifyContent']",
		},
		flexDirection: {
			type: "React.CSSProperties['flexDirection']",
		},
		flexWrap: {
			type: "React.CSSProperties['flexWrap']",
		},
		margin: {
			type: "React.CSSProperties['margin']",
		},
		padding: {
			type: "React.CSSProperties['padding']",
		},
		inset: {
			type: "React.CSSProperties['inset']",
		},
		width: {
			type: "React.CSSProperties['width']",
		},
		height: {
			type: "React.CSSProperties['height']",
		},
		borderRadius: {
			type: "React.CSSProperties['borderRadius']",
		},
		bgColor: {
			type: "'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'default'",
		},
		textColor: {
			type: "'dark' | 'light' | 'darker' | 'lighter';",
		},
		centered: {
			type: "boolean",
		},
		gridSpan: {
			type: "{row?: number; col?: number}",
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
		flexGap: {
			type: "React.CSSProperties['gap']",
		},

		insets: {
			type: `all?: React.CSSProperties["inset"]; top?: React.CSSProperties["top"]; bottom?: React.CSSProperties["bottom"]; left?: React.CSSProperties["left"]; right?: React.CSSProperties["right"]; horizontal?: React.CSSProperties["left"] | React.CSSProperties["right"]; vertical?: React.CSSProperties["top"] | React.CSSProperties["bottom"];`,
		},
		margins: {
			type: `all?: React.CSSProperties["margin"]; top?: React.CSSProperties["marginTop"]; bottom?: React.CSSProperties["marginBottom"]; left?: React.CSSProperties["marginLeft"]; right?: React.CSSProperties["marginRight"]; horizontal?: React.CSSProperties["marginLeft"] | React.CSSProperties["marginRight"]; vertical?: React.CSSProperties["marginTop"] | React.CSSProperties["marginBottom"];`,
		},
		paddings: {
			type: `all?: React.CSSProperties["padding"]; top?: React.CSSProperties["paddingTop"]; bottom?: React.CSSProperties["paddingBottom"]; left?: React.CSSProperties["paddingLeft"]; right?: React.CSSProperties["paddingRight"]; horizontal?: React.CSSProperties["paddingLeft"] | React.CSSProperties["paddingRight"]; vertical?: React.CSSProperties["paddingTop"] | React.CSSProperties["paddingBottom"];`,
		},
	};

	return <LeApiTable props={props}></LeApiTable>;
};

boxAttr["LeSourceButton"] = LeSourceButton;
boxAttr["ImportPreview"] = ImportPreview;
boxAttr["BoxCssPreview"] = BoxCssPreview;
boxAttr["BoxCustomPreview"] = BoxCustomPreview;
boxAttr["BoxCenteredPreview"] = BoxCenteredPreview;
boxAttr["BoxTableApi"] = BoxTableApi;
boxAttr["NavLink"] = NavLink;
boxAttr["LeHighlighter"] = LeHighlighter;

export { boxAttr };
