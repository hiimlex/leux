import { LeApiTable, LeHighlighter, LePreview, LeSourceButton, PropsMapping } from "@/components";
import { Box, Progress, ProgressProps } from "@leux/ui";
import { useState } from "react";

import React from "react";
import { FiInfo } from "react-icons/fi";
import { attributes as progressAttr } from "./progress.md";

const ProgressImportPreview = () => (
	<LeHighlighter language="tsx" code={`import { Progress } from "@leux/ui";`} />
);

const ProgressUsagePreview = () => {
	const [showCode, setShowCode] = useState<boolean>(false);

	return (
		<>
			<LePreview showCode={showCode} setShowCode={setShowCode} direction="column">
				<Box flex flexDirection="column" flexGap={16} width="100%">
					<Progress progress={50} isActive showIcon icon={<FiInfo size={20} color="blue" />} />
				</Box>
			</LePreview>
			{showCode && (
				<LeHighlighter
					language="tsx"
					code={`import { Progress } from "@leux/ui";

const Component = () => {
	return (
		<Progress progress={50} isActive showIcon icon={<FiInfo size={20} color="blue" />} />
	);
};`}
				/>
			)}
		</>
	);
};

const ProgressColorsPreview = () => {
	const [showCode, setShowCode] = useState<boolean>(false);

	return (
		<>
			<LePreview showCode={showCode} setShowCode={setShowCode} direction="column">
				<Box flex flexDirection="column" flexGap={16} width="100%">
					<Progress progress={20} colorScheme="primary" />
					<Progress progress={40} colorScheme="secondary" />
					<Progress progress={60} colorScheme="success" />
					<Progress progress={80} colorScheme="warning" />
					<Progress progress={100} colorScheme="danger" />
				</Box>
			</LePreview>
			{showCode && (
				<LeHighlighter
					language="tsx"
					code={`import { Progress } from "@leux/ui";
					
const Component = () => <>
	<Progress progress={20} colorScheme="primary" />
	<Progress progress={40} colorScheme="secondary" />
	<Progress progress={60} colorScheme="success" />
	<Progress progress={80} colorScheme="warning" />
	<Progress progress={100} colorScheme="danger" />
</>
	`}
				/>
			)}
		</>
	);
};

const ProgressApiTable = () => {
	const props: PropsMapping<ProgressProps> = {
		progress: {
			type: "number",
			required: true,
		},
		colorScheme: {
			type: "'primary' | 'secondary' | 'success' | 'warning' | 'danger'",
			defaultValue: "'primary'",
		},
		customColor: {
			type: "string",
		},
		icon: {
			type: "ReactNode",
		},
		showIcon: {
			type: "boolean",
			defaultValue: "false",
		},
		isActive: {
			type: "boolean",
			defaultValue: "false",
		},
		progressText: {
			type: "string",
		},
		size: {
			type: "small | medium | large",
			defaultValue: "medium",
		},
		width: {
			type: "React.CSSProperties['width']",
		},
	};

	return <LeApiTable props={props} />;
};

progressAttr["LeSourceButton"] = LeSourceButton;
progressAttr["LeHighlighter"] = LeHighlighter;
progressAttr["ProgressApiTable"] = ProgressApiTable;
progressAttr["ProgressImportPreview"] = ProgressImportPreview;
progressAttr["ProgressUsagePreview"] = ProgressUsagePreview;
progressAttr["ProgressColorsPreview"] = ProgressColorsPreview;

export { progressAttr };
