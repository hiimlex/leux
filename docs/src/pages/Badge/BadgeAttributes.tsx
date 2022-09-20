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
			<Badge type="filled" variant="primary">
				Filled
			</Badge>
			<Badge type="outlined" variant="success">
				Outlined
			</Badge>
			<Badge type="ghost" variant="danger">
				Ghost
			</Badge>
		</div>
		<Code
			children={`<Badge type="filled">Filled</Badge>
<Badge type="outlined">Outlined</Badge>
<Badge type="ghost">Ghost</Badge>`}
			style={dracula}
			language="html"
		/>
	</>
);

badgeAttr["LeSourceButton"] = LeSourceButton;
badgeAttr["BadgeImportPreview"] = BadgeImportPreview;
badgeAttr["BadgeTypePreview"] = BadgeTypePreview;

export { badgeAttr };
