import { LeApiTable, LeHighlighter, LePreview, LeSourceButton, PropsMapping } from "@/components";
import { Button, Tooltip, TooltipProps, Typography } from "../../../../src";
import { attributes as tooltipAttr } from "./tooltip.md";
import { useState } from "react";
import React from "react";

const TooltipImportPreview = () => (
	<LeHighlighter code={`import { Tooltip, TooltipProps } from "leux";`} language="tsx" />
);

const TooltipUsagePreview = () => {
	const [showCode, setShowCode] = useState<boolean>(false);

	return (
		<>
			<LePreview showCode={showCode} setShowCode={setShowCode}>
				<Tooltip title="hello world!">
					<Button variant="outlined">Hover me</Button>
				</Tooltip>
			</LePreview>
			{showCode && (
				<LeHighlighter
					code={`const Component = () => (
	<Tooltip title="hello world!">
		<Button variant="outlined">Hover me</Button>
	</Tooltip>
);
`}
					language="tsx"
				/>
			)}
		</>
	);
};

const TooltipDirectionPreview = () => {
	const [showCode, setShowCode] = useState<boolean>(false);

	return (
		<>
			<LePreview direction="row" showCode={showCode} setShowCode={setShowCode}>
				<Tooltip title="display on left" direction="left">
					<Typography children="left" variant="body-1" customStyles={{ margin: "0 12px 0 0" }} />
				</Tooltip>
				<Tooltip title="display on top" direction="top">
					<Typography children="top" variant="body-1" customStyles={{ margin: "0 12px 0 0" }} />
				</Tooltip>
				<Tooltip title="display on bottom" direction="bottom">
					<Typography children="bottom" variant="body-1" customStyles={{ margin: "0 12px 0 0" }} />
				</Tooltip>
				<Tooltip title="display on right" direction="right">
					<Typography children="right" variant="body-1" />
				</Tooltip>
			</LePreview>
			{showCode && (
				<LeHighlighter
					code={`const Component = () => (
	<>
		<Tooltip title="display on left" direction="left">
			<Typography children="left" variant="body-1" customStyles={{ margin: "0 12px 0 0" }} />
		</Tooltip>
		<Tooltip title="display on top" direction="top">
			<Typography children="top" variant="body-1" customStyles={{ margin: "0 12px 0 0" }} />
		</Tooltip>
		<Tooltip title="display on bottom" direction="bottom">
			<Typography children="bottom" variant="body-1" customStyles={{ margin: "0 12px 0 0" }} />
		</Tooltip>
		<Tooltip title="display on right" direction="right">
			<Typography children="right" variant="body-1" />
		</Tooltip>
	</>
);
`}
					language="tsx"
				/>
			)}
		</>
	);
};

const TooltipThemePreview = () => {
	const [showCode, setShowCode] = useState<boolean>(false);

	return (
		<>
			<LePreview direction="row" showCode={showCode} setShowCode={setShowCode}>
				<Tooltip title="primary style" colorScheme="primary">
					<Typography
						children="primary"
						variant="body-1"
						customClass="le-color-primary"
						customStyles={{ margin: "0 12px 0 0" }}
					/>
				</Tooltip>
				<Tooltip title="danger style" colorScheme="danger">
					<Typography
						children="danger"
						variant="body-1"
						customClass="le-color-danger"
						customStyles={{ margin: "0 12px 0 0" }}
					/>
				</Tooltip>
				<Tooltip title="default style" colorScheme="default">
					<Typography
						children="default"
						variant="body-1"
						customClass="le-color-default"
						customStyles={{ margin: "0 12px 0 0" }}
					/>
				</Tooltip>
			</LePreview>
			{showCode && (
				<LeHighlighter
					code={`const Component = () => (
	<>
		<Tooltip title="primary style" theme="primary">
			<Typography
				children="primary"
				variant="body-1"
				customClass="le-color-primary"
				customStyles={{ margin: "0 12px 0 0" }}
			/>
		</Tooltip>
		<Tooltip title="danger style" theme="danger">
			<Typography
				children="danger"
				variant="body-1"
				customClass="le-color-danger"
				customStyles={{ margin: "0 12px 0 0" }}
			/>
		</Tooltip>
		<Tooltip title="default style" theme="default">
			<Typography
				children="default"
				variant="body-1"
				customClass="le-color-default"
				customStyles={{ margin: "0 12px 0 0" }}
			/>
		</Tooltip>
	</>
);
`}
					language="tsx"
				/>
			)}
		</>
	);
};

const TooltipCustomPreview = () => {
	const [showCode, setShowCode] = useState<boolean>(false);

	return (
		<>
			<LePreview showCode={showCode} setShowCode={setShowCode}>
				<Tooltip
					title="custom style"
					customStyles={{ fontSize: 16, background: "purple", color: "blue" }}
					customClass="tooltip-custom--arrow"
				>
					<Typography children="custom" variant="body-1" customStyles={{ margin: 0 }} />
				</Tooltip>
			</LePreview>
			{showCode && (
				<>
					<LeHighlighter
						code={`// component.tsx
const Component = () => (
	<Tooltip
		title="custom style"
		customStyles={{ fontSize: 16, background: "purple", color: "blue" }}
		customClass="tooltip-custom--arrow"
	>
		<Typography children="custom" variant="body-1" customStyles={{ margin: 0 }} />
	</Tooltip>
);
`}
						language="tsx"
					/>
					<LeHighlighter
						code={`// styles.css
.tooltip-custom--arrow::after {
	border-color: purple transparent transparent transparent;
}
`}
						language="css"
					/>
				</>
			)}
		</>
	);
};

const TooltipApiTable = () => {
	const props: PropsMapping<TooltipProps> = {
		title: {
			type: "string",
			required: true,
		},
		direction: {
			type: "TooltipDirections | 'top' | 'bottom' | 'left' | 'right'",
			defaultValue: "top",
		},
		colorScheme: {
			type: "TooltipColorScheme | 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'default'",
			defaultValue: "default",
		},
		children: {
			type: "ReactNode",
		},
		customClass: {
			type: "string",
		},
		customStyles: {
			type: "CSSProperties",
		},
	};

	return <LeApiTable props={props} />;
};

tooltipAttr["LeSourceButton"] = LeSourceButton;
tooltipAttr["LeHighlighter"] = LeHighlighter;
tooltipAttr["TooltipImportPreview"] = TooltipImportPreview;
tooltipAttr["TooltipUsagePreview"] = TooltipUsagePreview;
tooltipAttr["TooltipDirectionPreview"] = TooltipDirectionPreview;
tooltipAttr["TooltipThemePreview"] = TooltipThemePreview;
tooltipAttr["TooltipCustomPreview"] = TooltipCustomPreview;
tooltipAttr["TooltipApiTable"] = TooltipApiTable;

export { tooltipAttr };
