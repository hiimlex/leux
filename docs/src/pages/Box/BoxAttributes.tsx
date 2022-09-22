import { LeHighlighter, LeSourceButton } from "@/components";
import { NavLink } from "react-router-dom";
import { Box } from "../../../../src";
import { attributes as boxAttr } from "./box.md";

const ImportPreview = () => {
	return (
		<LeHighlighter
			code={`import { Box, BoxProps } from 'leux';`}
			language="tsx"
		/>
	);
};

const BoxCssPreview = () => {
	return (
		<>
			<div className="le-preview">
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
			</div>
			<LeHighlighter
				language="tsx"
				code={`<Box
	padding="30px"
	height="100px"
	width="100px"
	borderRadius="100%"
	margin="12px"
	bgColor="default"
>
	CSS Properties example
</Box>
			`}
			/>
		</>
	);
};

const BoxCompletePreview = () => {
	return (
		<>
			<div className="le-preview">
				<Box
					customClass="le-text--body-1"
					customStyles={{ fontWeight: 600 }}
					bgColor="primary"
					textColor="lighter"
					centered
					padding={12}
					borderRadius={12}
					margin={12}
					width="fill-container"
				>
					Complete box
				</Box>
			</div>
			<LeHighlighter
				language="tsx"
				code={`<Box
	customClass="le-text--body-1"
	customStyles={{ fontWeight: 600 }}
	bgColor="primary"
	textColor="lighter"
	centered
	padding={12}
	borderRadius={12}
	margin={12}
	width="fill-container"
>
	Complete box
</Box>`}
			/>
		</>
	);
};

const BoxCustomPreview = () => {
	return (
		<>
			<div className="le-preview">
				<Box
					customClass="le-color-text--primary le-bg--default le-text--body-2"
					customStyles={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						padding: 12,
					}}
				>
					with custom CSS and Classes
				</Box>
			</div>
			<LeHighlighter
				language="tsx"
				code={`<Box
	customClass="le-color-text--primary le-bg--default le-text--body-2"
	customStyles={{
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		padding: 12,
	}}
>
	with custom CSS and Classes
</Box>`}
			/>
		</>
	);
};

const BoxCenteredPreview = () => {
	return (
		<>
			<div className="le-preview">
				<Box
					centered
					padding={12}
					bgColor="default"
					textColor="darker"
					customClass="le-text--body-1"
				>
					text will be centered
				</Box>
			</div>
			<LeHighlighter
				language="tsx"
				code={`<Box centered padding={12} bgColor="default" textColor="darker">
	text will be centered
</Box>`}
			/>
		</>
	);
};

boxAttr["LeSourceButton"] = LeSourceButton;
boxAttr["ImportPreview"] = ImportPreview;
boxAttr["BoxCompletePreview"] = BoxCompletePreview;
boxAttr["BoxCssPreview"] = BoxCssPreview;
boxAttr["BoxCustomPreview"] = BoxCustomPreview;
boxAttr["BoxCenteredPreview"] = BoxCenteredPreview;
boxAttr["NavLink"] = NavLink;
boxAttr["LeHighlighter"] = LeHighlighter;

export { boxAttr };
