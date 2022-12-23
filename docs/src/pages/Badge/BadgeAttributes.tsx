import { attributes as badgeAttr } from "./badge.md";

import { LeHighlighter, LePreview, LeSourceButton } from "@/components";
import { Badge } from "../../../../src";

const BadgeImportPreview = () => (
	<LeHighlighter code={`import { Badge, BadgeProps } from "leux";`} language="tsx" />
);

const BadgeVariantPreview = () => (
	<>
		<LePreview>
			<Badge variant="dashed" theme="primary">
				Dashed
			</Badge>
			<Badge variant="outlined" theme="primary">
				Outlined
			</Badge>
			<Badge variant="ghost" theme="danger">
				Ghost
			</Badge>
		</LePreview>
		<LeHighlighter
			code={`const Component = () => (
	<>
		<Badge variant="dashed" theme="primary">Dashed</Badge>
		<Badge variant="ghost" theme="primary">Ghost</Badge>)
	</>
);`}
			language="tsx"
		/>
	</>
);

const BadgeThemePreview = () => (
	<>
		<LePreview>
			<Badge theme="primary">Primary</Badge>
			<Badge theme="secondary">Secondary</Badge>
			<Badge theme="success">Success</Badge>
			<Badge theme="danger">Danger</Badge>
			<Badge theme="warning">Warning</Badge>
			<Badge theme="default">Default</Badge>
		</LePreview>
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
	</>
);

const BadgeSizePreview = () => (
	<>
		<LePreview>
			<Badge size="small">Small</Badge>
			<Badge size="medium">Medium</Badge>
			<Badge size="large">Large</Badge>
		</LePreview>
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
		<LePreview>
			<Badge
				customClass="le-color-bg--primary"
				variant="dashed"
				customStyles={{ color: "purple", borderColor: "purple" }}
			>
				Custom Badge
			</Badge>
		</LePreview>
		<LeHighlighter
			code={`const Component = () => (
	<Badge
		customClass="le-color-bg--primary"
		variant="dashed"
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
badgeAttr["BadgeThemePreview"] = BadgeThemePreview;
badgeAttr["BadgeVariantPreview"] = BadgeVariantPreview;
badgeAttr["BadgeSizePreview"] = BadgeSizePreview;
badgeAttr["BadgeCustomPreview"] = BadgeCustomPreview;
badgeAttr["LeHighlighter"] = LeHighlighter;

export { badgeAttr };
