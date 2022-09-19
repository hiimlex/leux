import { LeSourceButton } from "@/components";
import Code from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Button } from "../../../../src";
import { attributes as buttonAttr } from "./button.md";

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

buttonAttr["ButtonImportPreview"] = ButtonImportPreview;
buttonAttr["ButtonTypePreview"] = ButtonTypePreview;
buttonAttr["ButtonVariantPreview"] = ButtonVariantPreview;
buttonAttr["ButtonSizePreview"] = ButtonSizePreview;
buttonAttr["ButtonStatePreview"] = ButtonStatePreview;
buttonAttr["Code"] = Code;
buttonAttr["Button"] = Button;
buttonAttr["LeSourceButton"] = LeSourceButton;

export { buttonAttr };
