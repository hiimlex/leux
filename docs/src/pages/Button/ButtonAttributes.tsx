import { LeHighlighter, LeSourceButton } from "@/components";
import { useState } from "react";
import { Button } from "../../../../src";
import { attributes as buttonAttr } from "./button.md";

const ButtonImportPreview = () => <LeHighlighter language="tsx" code={`import { Button, ButtonProps } from "leux";`} />;

const ButtonThemePreview = () => (
	<>
		<div className="le-preview">
			<Button theme="primary">Primary</Button>
			<Button theme="secondary">Secondary</Button>
			<Button theme="success">Success</Button>
			<Button theme="warning">Warning</Button>
			<Button theme="danger">Danger</Button>
			<Button theme="default">Default</Button>
		</div>
		<LeHighlighter
			language="tsx"
			code={`const Component = () => (
	<>
		<Button theme="primary">Primary</Button>
		<Button theme="secondary">Secondary</Button>
		<Button theme="success">Success</Button>
		<Button theme="warning">Warning</Button>
		<Button theme="danger">Danger</Button>
		<Button theme="default">Default</Button>
	</>
);`}
		/>
	</>
);

const ButtonVariantPreview = () => (
	<>
		<div className="le-preview">
			<Button theme="primary" variant="filled">
				Filled
			</Button>
			<Button theme="success" variant="outlined">
				Outlined
			</Button>
			<Button theme="danger" variant="ghost">
				Ghost
			</Button>
		</div>
		<LeHighlighter
			language="tsx"
			code={`const Component = () => (
	<>
		<Button theme="primary" variant="filled">
			Filled
		</Button>
		<Button theme="success" variant="outlined">
			Outlined
		</Button>
		<Button theme="danger" variant="ghost">
			Ghost
		</Button>
	</>
);`}
		/>
	</>
);

const ButtonSizePreview = () => (
	<>
		<div className="le-preview">
			<Button theme="default" size="small">
				Small
			</Button>
			<Button theme="default">Medium</Button>
			<Button theme="default" size="large">
				Large
			</Button>
		</div>
		<LeHighlighter
			language="tsx"
			code={`const Component = () => (
	<>
		<Button theme="default" size="small">Small</Button>
		<Button theme="default" size="medium">Medium</Button>
		<Button theme="default" size="large">Large</Button>
	</>
);`}
		/>
	</>
);

const ButtonStatePreview = () => {
	const [disabled, setDisabled] = useState(true);

	const handleOnClick = () => {
		setDisabled(!disabled);
	};

	return (
		<>
			<div className="le-preview">
				<Button theme={disabled ? "primary" : "danger"} onClick={handleOnClick}>
					{disabled ? "on" : "off"}
				</Button>
				<Button theme="default" state={{ disabled }}>
					{disabled ? "disabled" : "enabled"}
				</Button>
			</div>
			<LeHighlighter
				language="tsx"
				code={`const Component = () => {
	const [disabled, setDisabled] = useState(true);

	const handleOnClick = () => {
		setDisabled(!disabled);
	};

	return (
		<>
			<Button
				variant={disabled ? "primary" : "danger"}
				onClick={handleOnClick}
			>
				{disabled ? "on" : "off"}
			</Button>
			<Button variant="default" state={{ disabled }}>
				{disabled ? "disabled" : "enabled"}
			</Button>
		</>
	);
};`}
			/>
		</>
	);
};

const ButtonActionPreview = () => {
	const handleOnClick = () => alert("Hello World!");

	return (
		<>
			<div className="le-preview">
				<Button onClick={handleOnClick} theme="success">
					Alert
				</Button>
			</div>
			<LeHighlighter
				language="tsx"
				code={`const Component = () => {
	const handleOnClick = () => alert("Hello World!");

	return (
		<Button onClick={handleOnClick} theme="success">Alert</Button>
	);
};`}
			/>
		</>
	);
};

buttonAttr["ButtonImportPreview"] = ButtonImportPreview;
buttonAttr["ButtonVariantPreview"] = ButtonVariantPreview;
buttonAttr["ButtonThemePreview"] = ButtonThemePreview;
buttonAttr["ButtonSizePreview"] = ButtonSizePreview;
buttonAttr["ButtonStatePreview"] = ButtonStatePreview;
buttonAttr["ButtonActionPreview"] = ButtonActionPreview;
buttonAttr["LeHighlighter"] = LeHighlighter;
buttonAttr["Button"] = Button;
buttonAttr["LeSourceButton"] = LeSourceButton;

export { buttonAttr };
