import { attributes as badgeAttr } from "./badge.md";

import Code from "react-syntax-highlighter";

import { LeSourceButton } from "@/components";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Badge } from "../../../../src";

const BadgeImportPreview = () => (
	<Code
		children={`import { Badge, BadgeProps } from 'leux';`}
		style={dracula}
		language="javascript|html"
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
		<Code
			children={`<Badge type="dashed">Dashed</Badge>
<Badge type="ghost">Ghost</Badge>`}
			style={dracula}
			language="html"
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
		<Code
			children={`<Badge variant="primary">Primary</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="danger">Danger</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="default">Default</Badge>`}
			style={dracula}
			language="html"
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
		<Code
			children={`<Badge size="small" variant="primary">
	Small
</Badge>
<Badge size="medium" variant="success">
	Medium
</Badge>
<Badge size="large" variant="danger">
	Large
</Badge>`}
			style={dracula}
			language="html"
		/>
	</>
);

const BadgeCustomPreview = () => (
	<>
		<div className="le-preview">
			<Badge
				customClass="le-bg--primary"
				type="dashed"
				customStyles={{ color: "purple", borderColor: "purple" }}
			>
				Custom Badge
			</Badge>
		</div>
		<Code
			children={`<Badge
	customClass="le-bg--primary"
	type="dashed"
	customStyles={{ color: "purple", borderColor: "purple" }}
>
	Custom Badge
</Badge>`}
			style={dracula}
			language="html"
		/>
	</>
);

badgeAttr["LeSourceButton"] = LeSourceButton;
badgeAttr["BadgeImportPreview"] = BadgeImportPreview;
badgeAttr["BadgeTypePreview"] = BadgeTypePreview;
badgeAttr["BadgeVariantPreview"] = BadgeVariantPreview;
badgeAttr["BadgeSizePreview"] = BadgeSizePreview;
badgeAttr["BadgeCustomPreview"] = BadgeCustomPreview;
badgeAttr["Code"] = Code;

export { badgeAttr };
