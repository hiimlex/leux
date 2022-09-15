import React from "react";
import Code from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Button } from "../../../../src";
import {
	attributes as leButtonAttr,
	ReactComponent as LeButtonMD,
} from "./button.md";
import { LeSourceButton } from "@/components";

const ButtonImportPreview = () => (
	<Code
		language="jsx"
		children={`import { Button, ButtonProps } from 'leux';`}
		style={dracula}
	></Code>
);

const ButtonVariantPreview = () => (
	<>
		<div className="le-preview">
			<Button variant="primary">Primary</Button>
			<Button variant="secondary">Secondary</Button>
			<Button variant="success">Success</Button>
			<Button variant="warning">Warning</Button>
			<Button variant="danger">Danger</Button>
			<Button variant="default">Default</Button>
		</div>
		<Code
			language="jsx"
			children={`<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="success">Success</Button>
<Button variant="warning">Warning</Button>
<Button variant="danger">Danger</Button>
<Button variant="default">Default</Button>`}
			style={dracula}
		></Code>
	</>
);

const ButtonTypePreview = () => (
	<>
		<div className="le-preview">
			<Button variant="primary" type="filled">
				Filled
			</Button>
			<Button variant="success" type="outlined">
				Outlined
			</Button>
			<Button variant="danger" type="ghost">
				Ghost
			</Button>
		</div>
		<Code
			language="jsx"
			children={`<Button variant="default" type="filled">Filled</Button>
<Button variant="default" type="outlined">Outlined</Button>
<Button variant="primary" type="ghost">Ghost</Button>`}
			style={dracula}
		></Code>
	</>
);

const ButtonSizePreview = () => (
	<>
		<div className="le-preview">
			<Button variant="default" size="small">
				Small
			</Button>
			<Button variant="default">Medium</Button>
			<Button variant="default" size="large">
				Large
			</Button>
		</div>
		<Code
			language="jsx"
			children={`<Button variant="default" size="small">Small</Button>
<Button variant="default">Medium</Button>
<Button variant="default" size="large">Large</Button>`}
			style={dracula}
		></Code>
	</>
);

const ButtonStatePreview = () => (
	<>
		<div className="le-preview">
			<Button variant="default" state={{ disabled: true }}>
				Disabled
			</Button>
		</div>
		<Code
			language="jsx"
			children={`<Button variant="default" state={{ disabled: true }}>Disabled</Button>`}
			style={dracula}
		></Code>
	</>
);

const ButtonPage = () => {
	leButtonAttr["Button"] = Button;
	leButtonAttr["ButtonImportPreview"] = ButtonImportPreview;
	leButtonAttr["ButtonTypePreview"] = ButtonTypePreview;
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
