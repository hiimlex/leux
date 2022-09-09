import React from "react";
import Code from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { LeButton } from "../../../../src";
import {
	attributes as leButtonAttr,
	ReactComponent as LeButtonMD,
} from "./lebutton.md";

const ImportCode = () => (
	<Code
		language="jsx"
		children={`import { LeButton, LeButtonProps } from 'leux';`}
		style={dracula}
	></Code>
);

const VariantPreview = () => (
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

const SizePreview = () => (
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

const StatePreview = () => (
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

const LeButtonPage = () => {
	leButtonAttr["LeButton"] = LeButton;
	leButtonAttr["ImportCode"] = ImportCode;
	leButtonAttr["VariantPreview"] = VariantPreview;
	leButtonAttr["SizePreview"] = SizePreview;
	leButtonAttr["StatePreview"] = StatePreview;
	leButtonAttr["Code"] = Code;

	return (
		<React.Fragment>
			<LeButtonMD {...leButtonAttr} />
		</React.Fragment>
	);
};

export default LeButtonPage;
