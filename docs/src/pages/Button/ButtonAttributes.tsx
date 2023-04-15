import { LeHighlighter, LePreview, LeSourceButton } from "@/components";
import { useState } from "react";
import { Button } from "../../../../src";
import { attributes as buttonAttr } from "./button.md";

const ButtonImportPreview = () => (
	<LeHighlighter language="tsx" code={`import { Button, ButtonProps } from "leux";`} />
);

const ButtonThemePreview = () => (
	<>
		<LePreview>
			<Button theme="primary" customStyles={{ marginRight: 12 }}>
				Primary
			</Button>
			<Button theme="secondary" customStyles={{ marginRight: 12 }}>
				Secondary
			</Button>
			<Button theme="success" customStyles={{ marginRight: 12 }}>
				Success
			</Button>
			<Button theme="warning" customStyles={{ marginRight: 12 }}>
				Warning
			</Button>
			<Button theme="danger" customStyles={{ marginRight: 12 }}>
				Danger
			</Button>
			<Button theme="default">Default</Button>
		</LePreview>
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
		<LePreview>
			<Button theme="primary" variant="filled" customStyles={{ marginRight: 12 }}>
				Filled
			</Button>
			<Button theme="success" variant="outlined" customStyles={{ marginRight: 12 }}>
				Outlined
			</Button>
			<Button theme="danger" variant="ghost">
				Ghost
			</Button>
		</LePreview>
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
		<LePreview>
			<Button theme="default" size="small" customStyles={{ marginRight: 12 }}>
				Small
			</Button>
			<Button theme="default" customStyles={{ marginRight: 12 }}>
				Medium
			</Button>
			<Button theme="default" size="large">
				Large
			</Button>
		</LePreview>
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
			<LePreview>
				<Button
					theme={disabled ? "primary" : "danger"}
					onClick={handleOnClick}
					customStyles={{ marginRight: 12 }}
				>
					{disabled ? "on" : "off"}
				</Button>
				<Button theme="default" state={{ disabled }}>
					{disabled ? "disabled" : "enabled"}
				</Button>
			</LePreview>
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
			<LePreview>
				<Button onClick={handleOnClick} theme="success">
					Alert
				</Button>
			</LePreview>
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
