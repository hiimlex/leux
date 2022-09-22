import { LeHighlighter, LeSourceButton } from "@/components";
import { Button } from "../../../../src";
import { attributes as buttonAttr } from "./button.md";

const ButtonImportPreview = () => (
	<LeHighlighter
		language="tsx"
		code={`import { Button, ButtonProps } from 'leux';`}
	/>
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
		<LeHighlighter
			language="tsx"
			code={`<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="success">Success</Button>
<Button variant="warning">Warning</Button>
<Button variant="danger">Danger</Button>
<Button variant="default">Default</Button>`}
		/>
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
		<LeHighlighter
			language="tsx"
			code={`<Button variant="success" type="filled">Filled</Button>
<Button variant="success" type="outlined">Outlined</Button>
<Button variant="danger" type="ghost">Ghost</Button>`}
		/>
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
		<LeHighlighter
			language="tsx"
			code={`<Button variant="default" size="small">Small</Button>
<Button variant="default">Medium</Button>
<Button variant="default" size="large">Large</Button>`}
		/>
	</>
);

const ButtonStatePreview = () => (
	<>
		<div className="le-preview">
			<Button variant="default" state={{ disabled: true }}>
				Disabled
			</Button>
		</div>
		<LeHighlighter
			language="tsx"
			code={`<Button variant="default" state={{ disabled: true }}>Disabled</Button>`}
		/>
	</>
);

const ButtonActionPreview = () => {
	return (
		<>
			<div className="le-preview">
				<Button onClick={() => alert("Hello World!")} variant="success">
					Alert
				</Button>
			</div>
			<LeHighlighter
				language="tsx"
				code={`<Button onClick={() => alert("Hello World!")}>Alert</Button>`}
			/>
		</>
	);
};

buttonAttr["ButtonImportPreview"] = ButtonImportPreview;
buttonAttr["ButtonTypePreview"] = ButtonTypePreview;
buttonAttr["ButtonVariantPreview"] = ButtonVariantPreview;
buttonAttr["ButtonSizePreview"] = ButtonSizePreview;
buttonAttr["ButtonStatePreview"] = ButtonStatePreview;
buttonAttr["ButtonActionPreview"] = ButtonActionPreview;
buttonAttr["LeHighlighter"] = LeHighlighter;
buttonAttr["Button"] = Button;
buttonAttr["LeSourceButton"] = LeSourceButton;

export { buttonAttr };
