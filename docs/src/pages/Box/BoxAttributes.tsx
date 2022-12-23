import { LeHighlighter, LePreview, LeSourceButton } from "@/components";
import { NavLink } from "react-router-dom";
import { Box } from "../../../../src";
import { attributes as boxAttr } from "./box.md";

const ImportPreview = () => {
	return <LeHighlighter code={`import { Box, BoxProps } from "leux";`} language="tsx" />;
};

const BoxCssPreview = () => {
	return (
		<>
			<LePreview>
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
		</>
	);
};

const BoxCompletePreview = () => {
	return (
		<>
			<LePreview>
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
			</LePreview>
			<LeHighlighter
				language="tsx"
				code={`const Component = () => (
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
);`}
			/>
		</>
	);
};

const BoxCustomPreview = () => {
	return (
		<>
			<LePreview>
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
		</>
	);
};

const BoxCenteredPreview = () => {
	return (
		<>
			<LePreview>
				<Box
					centered
					padding={12}
					bgColor="default"
					textColor="darker"
					customClass="le-text--body-1"
				>
					text will be centered
				</Box>
			</LePreview>
			<LeHighlighter
				language="tsx"
				code={`const Component = () = (
	<Box centered padding={12} bgColor="default" textColor="darker">
		text will be centered
	</Box>
);`}
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
