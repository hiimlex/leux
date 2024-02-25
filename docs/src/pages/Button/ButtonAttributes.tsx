import { LeApiTable, LeHighlighter, LePreview, LeSourceButton, PropsMapping } from "@/components";
import { useState } from "react";
import { Button, ButtonProps } from "../../../../src";
import { attributes as buttonAttr } from "./button.md";

const ButtonImportPreview = () => (
	<LeHighlighter language="tsx" code={`import { Button, ButtonProps } from "leux";`} />
);

const ButtonThemePreview = () => {
	const [showCode, setShowCode] = useState<boolean>(false);

	return (
		<>
			<LePreview showCode={showCode} setShowCode={setShowCode}>
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
			{showCode && (
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
			)}
		</>
	);
};

const ButtonVariantPreview = () => {
	const [showCode, setShowCode] = useState<boolean>(false);

	return (
		<>
			<LePreview showCode={showCode} setShowCode={setShowCode}>
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
			{showCode && (
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
			)}
		</>
	);
};

const ButtonSizePreview = () => {
	const [showCode, setShowCode] = useState<boolean>(false);

	return (
		<>
			<LePreview showCode={showCode} setShowCode={setShowCode}>
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
};

const ButtonStatePreview = () => {
	const [showCode, setShowCode] = useState<boolean>(false);
	const [disabled, setDisabled] = useState(true);

	const handleOnClick = () => {
		setDisabled(!disabled);
	};

	return (
		<>
			<LePreview showCode={showCode} setShowCode={setShowCode}>
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
			{showCode && (
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
			)}
		</>
	);
};

const ButtonActionPreview = () => {
	const [showCode, setShowCode] = useState<boolean>(false);
	const handleOnClick = () => alert("Hello World!");

	return (
		<>
			<LePreview showCode={showCode} setShowCode={setShowCode}>
				<Button onClick={handleOnClick} theme="success">
					Alert
				</Button>
			</LePreview>
			{showCode && (
				<LeHighlighter
					language="tsx"
					code={`const Component = () => {
	const handleOnClick = () => alert("Hello World!");

	return (
		<Button onClick={handleOnClick} theme="success">Alert</Button>
	);
};`}
				/>
			)}
		</>
	);
};

const ButtonApiTable = () => {
	const props: PropsMapping<ButtonProps> = {
		type: {
			type: "'button' | 'submit' | 'reset'",
		},
		theme: {
			type: "'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'default'",
			defaultValue: "'default'",
		},
		variant: {
			type: "'filled' | 'outlined' | 'ghost'",
			defaultValue: "'filled'",
		},
		size: {
			type: "'small' | 'medium' | 'large'",
			defaultValue: "'medium'",
		},
		state: {
			type: "{ disabled?: boolean }",
		},
		customStyles: {
			type: "React.CSSProperties",
		},
		onClick: {
			type: "React.MouseEventHandler<HTMLButtonElement>",
		},
		children: {
			type: "React.ReactNode",
		},
		customClass: {
			type: "string",
		},
		buttonProps: {
			type: "React.ButtonHTMLAttributes<HTMLButtonElement>",
		},
	};

	return <LeApiTable props={props}></LeApiTable>;
};

buttonAttr["ButtonImportPreview"] = ButtonImportPreview;
buttonAttr["ButtonVariantPreview"] = ButtonVariantPreview;
buttonAttr["ButtonThemePreview"] = ButtonThemePreview;
buttonAttr["ButtonSizePreview"] = ButtonSizePreview;
buttonAttr["ButtonStatePreview"] = ButtonStatePreview;
buttonAttr["ButtonActionPreview"] = ButtonActionPreview;
buttonAttr["ButtonApiTable"] = ButtonApiTable;
buttonAttr["LeHighlighter"] = LeHighlighter;
buttonAttr["Button"] = Button;
buttonAttr["LeSourceButton"] = LeSourceButton;

export { buttonAttr };
