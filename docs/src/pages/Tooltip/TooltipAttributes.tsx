import { LeHighlighter, LePreview, LeSourceButton } from "@/components";
import { Button, Tooltip, Topography } from "../../../../src";
import { attributes as tooltipAttr } from "./tooltip.md";

const TooltipImportPreview = () => (
	<LeHighlighter code={`import { Tooltip, TooltipProps } from "leux";`} language="tsx" />
);

const TooltipUsagePreview = () => {
	return (
		<>
			<LePreview>
				<Tooltip title="hello world!">
					<Button variant="outlined">Hover me</Button>
				</Tooltip>
			</LePreview>
			<LeHighlighter
				code={`const Component = () => (
	<Tooltip title="hello world!">
		<Button variant="outlined">Hover me</Button>
	</Tooltip>
);
`}
				language="tsx"
			/>
		</>
	);
};

const TooltipDirectionPreview = () => {
	return (
		<>
			<LePreview direction="row">
				<Tooltip title="display on left" direction="left">
					<Topography children="left" variant="body-1" customStyles={{ margin: "0 12px 0 0" }} />
				</Tooltip>
				<Tooltip title="display on top" direction="top">
					<Topography children="top" variant="body-1" customStyles={{ margin: "0 12px 0 0" }} />
				</Tooltip>
				<Tooltip title="display on bottom" direction="bottom">
					<Topography children="bottom" variant="body-1" customStyles={{ margin: "0 12px 0 0" }} />
				</Tooltip>
				<Tooltip title="display on right" direction="right">
					<Topography children="right" variant="body-1" />
				</Tooltip>
			</LePreview>
			<LeHighlighter
				code={`const Component = () => (
	<>
		<Tooltip title="display on left" direction="left">
			<Topography children="left" variant="body-1" customStyles={{ margin: "0 12px 0 0" }} />
		</Tooltip>
		<Tooltip title="display on top" direction="top">
			<Topography children="top" variant="body-1" customStyles={{ margin: "0 12px 0 0" }} />
		</Tooltip>
		<Tooltip title="display on bottom" direction="bottom">
			<Topography children="bottom" variant="body-1" customStyles={{ margin: "0 12px 0 0" }} />
		</Tooltip>
		<Tooltip title="display on right" direction="right">
			<Topography children="right" variant="body-1" />
		</Tooltip>
	</>
);
`}
				language="tsx"
			/>
		</>
	);
};

const TooltipThemePreview = () => {
	return (
		<>
			<LePreview direction="row">
				<Tooltip title="primary style" theme="primary">
					<Topography
						children="primary"
						variant="body-1"
						customClass="le-color-text--primary"
						customStyles={{ margin: "0 12px 0 0" }}
					/>
				</Tooltip>
				<Tooltip title="danger style" theme="danger">
					<Topography
						children="danger"
						variant="body-1"
						customClass="le-color-text--danger"
						customStyles={{ margin: "0 12px 0 0" }}
					/>
				</Tooltip>
				<Tooltip title="default style" theme="default">
					<Topography
						children="default"
						variant="body-1"
						customClass="le-color-text--default"
						customStyles={{ margin: "0 12px 0 0" }}
					/>
				</Tooltip>
			</LePreview>
			<LeHighlighter
				code={`const Component = () => (
	<>
		<Tooltip title="primary style" theme="primary">
			<Topography
				children="primary"
				variant="body-1"
				customClass="le-color-text--primary"
				customStyles={{ margin: "0 12px 0 0" }}
			/>
		</Tooltip>
		<Tooltip title="danger style" theme="danger">
			<Topography
				children="danger"
				variant="body-1"
				customClass="le-color-text--danger"
				customStyles={{ margin: "0 12px 0 0" }}
			/>
		</Tooltip>
		<Tooltip title="default style" theme="default">
			<Topography
				children="default"
				variant="body-1"
				customClass="le-color-text--default"
				customStyles={{ margin: "0 12px 0 0" }}
			/>
		</Tooltip>
	</>
);
`}
				language="tsx"
			/>
		</>
	);
};

const TooltipCustomPreview = () => {
	return (
		<>
			<LePreview>
				<Tooltip
					title="custom style"
					customStyles={{ fontSize: 16, background: "purple", color: "blue" }}
					customClass="tooltip-custom--arrow"
				>
					<Topography children="custom" variant="body-1" customStyles={{ margin: 0 }} />
				</Tooltip>
			</LePreview>
			<LeHighlighter
				code={`// component.tsx
const Component = () => (
	<Tooltip
		title="custom style"
		customStyles={{ fontSize: 16, background: "purple", color: "blue" }}
		customClass="tooltip-custom--arrow"
	>
		<Topography children="custom" variant="body-1" customStyles={{ margin: 0 }} />
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
	);
};

tooltipAttr["LeSourceButton"] = LeSourceButton;
tooltipAttr["LeHighlighter"] = LeHighlighter;
tooltipAttr["TooltipImportPreview"] = TooltipImportPreview;
tooltipAttr["TooltipUsagePreview"] = TooltipUsagePreview;
tooltipAttr["TooltipDirectionPreview"] = TooltipDirectionPreview;
tooltipAttr["TooltipThemePreview"] = TooltipThemePreview;
tooltipAttr["TooltipCustomPreview"] = TooltipCustomPreview;

export { tooltipAttr };
