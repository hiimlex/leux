import { LeHighlighter, LeSourceButton } from "@/components";
import { useState } from "react";
import { Button } from "../../../../src";
import { attributes as buttonAttr } from "./button.md";

const ButtonImportPreview = () => (
	<LeHighlighter
		language="tsx"
		code={`import { Button, ButtonProps } from "leux";`}
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
			code={`const Component = () => (
	<>
		<Button variant="primary">Primary</Button>
		<Button variant="secondary">Secondary</Button>
		<Button variant="success">Success</Button>
		<Button variant="warning">Warning</Button>
		<Button variant="danger">Danger</Button>
		<Button variant="default">Default</Button>
	</>
);`}
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
			code={`const Component = () => (
	<>
		<Button variant="primary" type="filled">
			Filled
		</Button>
		<Button variant="success" type="outlined">
			Outlined
		</Button>
		<Button variant="danger" type="ghost">
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
			code={`const Component = () => (
	<>
		<Button variant="default" size="small">Small</Button>
		<Button variant="default">Medium</Button>
		<Button variant="default" size="large">Large</Button>
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
				<Button
					variant={disabled ? "primary" : "danger"}
					onClick={handleOnClick}
				>
					{disabled ? "on" : "off"}
				</Button>
				<Button variant="default" state={{ disabled }}>
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
				<Button onClick={handleOnClick} variant="success">
					Alert
				</Button>
			</div>
			<LeHighlighter
				language="tsx"
				code={`const Component = () => {
	const handleOnClick = () => alert("Hello World!");

	return (
		<Button onClick={handleOnClick} variant="success">Alert</Button>
	);
};`}
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
