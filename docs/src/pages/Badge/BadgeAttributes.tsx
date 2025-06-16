import { attributes as badgeAttr } from "./badge.md";

import { LeApiTable, LeHighlighter, LePreview, LeSourceButton, PropsMapping } from "@/components";
import { Badge, BadgeProps } from "../../../../src";
import { useState } from "react";
import React from "react";

const BadgeImportPreview = () => (
	<LeHighlighter code={`import { Badge, BadgeProps } from "@leux/ui";`} language="tsx" />
);

const BadgeVariantPreview = () => {
	const [showCode, setShowCode] = useState<boolean>(false);

	return (
		<>
			<LePreview showCode={showCode} setShowCode={setShowCode}>
				<Badge variant="filled" theme="primary">
					Dashed
				</Badge>
				<Badge variant="dashed" theme="primary">
					Dashed
				</Badge>
				<Badge variant="outlined" theme="primary">
					Outlined
				</Badge>
				<Badge variant="ghost" theme="primary">
					Ghost
				</Badge>
			</LePreview>
			{showCode && (
				<LeHighlighter
					code={`const Component = () => (
	<>
		<Badge variant="filled" theme="primary">
			Dashed
		</Badge>
		<Badge variant="dashed" theme="primary">
			Dashed
		</Badge>
		<Badge variant="outlined" theme="primary">
			Outlined
		</Badge>
		<Badge variant="ghost" theme="primary">
			Ghost
		</Badge>
	</>
);`}
					language="tsx"
				/>
			)}
		</>
	);
};

const BadgeThemePreview = () => {
	const [showCode, setShowCode] = useState<boolean>(false);

	return (
		<>
			<LePreview showCode={showCode} setShowCode={setShowCode}>
				<Badge theme="primary">Primary</Badge>
				<Badge theme="secondary">Secondary</Badge>
				<Badge theme="success">Success</Badge>
				<Badge theme="danger">Danger</Badge>
				<Badge theme="warning">Warning</Badge>
				<Badge theme="default">Default</Badge>
			</LePreview>
			{showCode && (
				<LeHighlighter
					code={`const Component = () => (
	<>
		<Badge theme="primary">Primary</Badge>
		<Badge theme="secondary">Secondary</Badge>
		<Badge theme="success">Success</Badge>
		<Badge theme="danger">Danger</Badge>
		<Badge theme="warning">Warning</Badge>
		<Badge theme="default">Default</Badge>
	</>
);`}
					language="tsx"
				/>
			)}
		</>
	);
};

const BadgeSizePreview = () => {
	const [showCode, setShowCode] = useState<boolean>(false);

	return (
		<>
			<LePreview showCode={showCode} setShowCode={setShowCode}>
				<Badge size="small">Small</Badge>
				<Badge size="medium">Medium</Badge>
				<Badge size="large">Large</Badge>
			</LePreview>
			{showCode && (
				<LeHighlighter
					code={`const Component = () => (
	<>
		<Badge size="small" variant="primary">
			Small
		</Badge>
		<Badge size="medium" variant="success">
			Medium
		</Badge>
		<Badge size="large" variant="danger">
			Large
		</Badge>
	</>
);`}
					language="tsx"
				/>
			)}
		</>
	);
};

const BadgeCustomPreview = () => {
	const [showCode, setShowCode] = useState<boolean>(false);

	return (
		<>
			<LePreview showCode={showCode} setShowCode={setShowCode}>
				<Badge
					customClass="le-bg-primary"
					variant="dashed"
					customStyles={{ color: "purple", borderColor: "purple" }}
				>
					Custom Badge
				</Badge>
			</LePreview>
			{showCode && (
				<LeHighlighter
					code={`const Component = () => (
	<Badge
		customClass="le-bg-primary"
		variant="dashed"
		customStyles={{ color: "purple", borderColor: "purple" }}
	>
		Custom Badge
	</Badge>
);`}
					language="tsx"
				/>
			)}
		</>
	);
};

const BadgeApiTable = () => {
	const props: PropsMapping<BadgeProps> = {
		children: {
			type: "React.ReactNode",
		},
		size: {
			type: "BadgeSizes | 'small' | 'medium' | 'large'",
			defaultValue: "medium",
		},
		variant: {
			type: "BadgeVariants | 'dash' | 'outlined' | 'ghost'",
			defaultValue: "ghost",
		},
		theme: {
			type: "BadgeThemes | 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'default'",
			defaultValue: "default",
		},
		customStyles: {
			type: "React.CSSProperties",
		},
		customClass: {
			type: "string",
		},
		clickable: {
			type: "boolean",
			defaultValue: "false",
		},
		onClick: {
			type: "React.MouseEventHandler<HTMLDivElement>",
			defaultValue: "undefined",
		},
	};

	return <LeApiTable props={props} />;
};

badgeAttr["LeSourceButton"] = LeSourceButton;
badgeAttr["LeHighlighter"] = LeHighlighter;
badgeAttr["BadgeImportPreview"] = BadgeImportPreview;
badgeAttr["BadgeThemePreview"] = BadgeThemePreview;
badgeAttr["BadgeVariantPreview"] = BadgeVariantPreview;
badgeAttr["BadgeSizePreview"] = BadgeSizePreview;
badgeAttr["BadgeCustomPreview"] = BadgeCustomPreview;
badgeAttr["BadgeApiTable"] = BadgeApiTable;

export { badgeAttr };
