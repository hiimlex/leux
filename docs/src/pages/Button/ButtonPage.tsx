import React from "react";
import Code from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { LeButton } from "../../../../src";
import {
	attributes as leButtonAttr,
	ReactComponent as LeButtonMD,
} from "./button.md";
import { LeSourceButton } from "@/components";

const ButtonImportPreview = () => (
	<Code
		language="jsx"
		children={`import { LeButton, LeButtonProps } from 'leux';`}
		style={dracula}
	></Code>
);

const ButtonVariantPreview = () => (
	<>
		<div className="le-preview">
			<LeButton variant="primary">Primary</LeButton>
			<LeButton variant="secondary">Secondary</LeButton>
			<LeButton variant="success">Success</LeButton>
			<LeButton variant="warning">Warning</LeButton>
			<LeButton variant="danger">Danger</LeButton>
			<LeButton variant="default">Default</LeButton>
		</div>
		<Code
			language="jsx"
			children={`<LeButton variant="primary">Primary</LeButton>
<LeButton variant="secondary">Secondary</LeButton>
<LeButton variant="success">Success</LeButton>
<LeButton variant="warning">Warning</LeButton>
<LeButton variant="danger">Danger</LeButton>
<LeButton variant="default">Default</LeButton>`}
			style={dracula}
		></Code>
	</>
);

const ButtonSizePreview = () => (
	<>
		<div className="le-preview">
			<LeButton variant="default" size="small">
				Small
			</LeButton>
			<LeButton variant="default">Medium</LeButton>
			<LeButton variant="default" size="large">
				Large
			</LeButton>
		</div>
		<Code
			language="jsx"
			children={`<LeButton variant="default" size="small">Small</LeButton>
<LeButton variant="default">Medium</LeButton>
<LeButton variant="default" size="large">Large</LeButton>`}
			style={dracula}
		></Code>
	</>
);

const ButtonStatePreview = () => (
	<>
		<div className="le-preview">
			<LeButton variant="default" state={{ disabled: true }}>
				Disabled
			</LeButton>
		</div>
		<Code
			language="jsx"
			children={`<LeButton variant="default" state={{ disabled: true }}>Disabled</LeButton>`}
			style={dracula}
		></Code>
	</>
);

const ButtonPage = () => {
	leButtonAttr["LeButton"] = LeButton;
	leButtonAttr["ButtonImportPreview"] = ButtonImportPreview;
	leButtonAttr["ButtonVariantPreview"] = ButtonVariantPreview;
	leButtonAttr["ButtonSizePreview"] = ButtonSizePreview;
	leButtonAttr["ButtonStatePreview"] = ButtonStatePreview;
	leButtonAttr["Code"] = Code;
	leButtonAttr["LeSourceButton"] = LeSourceButton;

	return (
		<React.Fragment>
			<LeButtonMD {...leButtonAttr} />
		</React.Fragment>
	);
};

export default ButtonPage;
