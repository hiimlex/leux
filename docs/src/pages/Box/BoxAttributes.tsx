import { PropsMapping, LeApiTable, LeHighlighter, LePreview, LeSourceButton } from "@/components";
import { NavLink } from "react-router-dom";
import { Box, BoxProps } from "../../../../src";
import { attributes as boxAttr } from "./box.md";
import { useState } from "react";

const ImportPreview = () => {
	return <LeHighlighter code={`import { Box, BoxProps } from "leux";`} language="tsx" />;
};

const BoxCssPreview = () => {
	const [showCode, setShowCode] = useState<boolean | undefined>(false);

	return (
		<>
			<LePreview showCode={showCode} setShowCode={setShowCode}>
				<Box
					padding="30px"
					height="100px"
					width="100px"
					borderRadius="100%"
					margin="12px"
					bgColor="default"
				>
					CSS Properties example
				</Box>
			</LePreview>
			{showCode && (
				<LeHighlighter
					language="tsx"
					code={`const Component = () => (
	<Box
		padding="30px"
		height="100px"
		width="100px"
		borderRadius="100%"
		margin="12px"
		bgColor="default"
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
	const [showCode, setShowCode] = useState<boolean | undefined>(false);

	return (
		<>
			<LePreview showCode={showCode} setShowCode={setShowCode}>
				<Box
					customClass="le-color-text--primary le-color-bg--default le-text--body-2"
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
		customClass="le-color-text--primary le-color-bg--default le-text--body-2"
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
	const [showCode, setShowCode] = useState<boolean | undefined>(false);

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
