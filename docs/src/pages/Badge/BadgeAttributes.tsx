import { attributes as badgeAttr } from "./badge.md";

import { LeHighlighter, LeSourceButton } from "@/components";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Badge } from "../../../../src";

const BadgeImportPreview = () => (
	<LeHighlighter
		code={`import { Badge, BadgeProps } from "leux";`}
		language="tsx"
	/>
);

const BadgeTypePreview = () => (
	<>
		<div className="le-preview">
			<Badge type="dashed" variant="primary">
				Dashed
			</Badge>
			<Badge type="outlined" variant="primary">
				Outlined
			</Badge>
			<Badge type="ghost" variant="danger">
				Ghost
			</Badge>
		</div>
		<LeHighlighter
			code={`const Component = () => (
	<>
		<Badge type="dashed">Dashed</Badge>
		<Badge type="ghost">Ghost</Badge>)
	</>
);`}
			language="tsx"
		/>
	</>
);

const BadgeVariantPreview = () => (
	<>
		<div className="le-preview">
			<Badge variant="primary">Primary</Badge>
			<Badge variant="secondary">Secondary</Badge>
			<Badge variant="success">Success</Badge>
			<Badge variant="danger">Danger</Badge>
			<Badge variant="warning">Warning</Badge>
			<Badge variant="default">Default</Badge>
		</div>
		<LeHighlighter
			code={`const Component = () => (
	<>
		<Badge variant="primary">Primary</Badge>
		<Badge variant="secondary">Secondary</Badge>
		<Badge variant="success">Success</Badge>
		<Badge variant="danger">Danger</Badge>
		<Badge variant="warning">Warning</Badge>
		<Badge variant="default">Default</Badge>
	</>
);`}
			language="tsx"
		/>
	</>
);

const BadgeSizePreview = () => (
	<>
		<div className="le-preview">
			<Badge size="small">Small</Badge>
			<Badge size="medium">Medium</Badge>
			<Badge size="large">Large</Badge>
		</div>
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
	</>
);

const BadgeCustomPreview = () => (
	<>
		<div className="le-preview">
			<Badge
				customClass="le-color-bg--primary"
				type="dashed"
				customStyles={{ color: "purple", borderColor: "purple" }}
			>
				Custom Badge
			</Badge>
		</div>
		<LeHighlighter
			code={`const Component = () => (
	<Badge
		customClass="le-color-bg--primary"
		type="dashed"
		customStyles={{ color: "purple", borderColor: "purple" }}
	>
		Custom Badge
	</Badge>
);`}
			language="tsx"
		/>
	</>
);

badgeAttr["LeSourceButton"] = LeSourceButton;
badgeAttr["BadgeImportPreview"] = BadgeImportPreview;
badgeAttr["BadgeTypePreview"] = BadgeTypePreview;
badgeAttr["BadgeVariantPreview"] = BadgeVariantPreview;
badgeAttr["BadgeSizePreview"] = BadgeSizePreview;
badgeAttr["BadgeCustomPreview"] = BadgeCustomPreview;
badgeAttr["LeHighlighter"] = LeHighlighter;

export { badgeAttr };
