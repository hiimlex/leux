import { LeApiTable, LeHighlighter, LePreview, LeSourceButton, PropsMapping } from "@/components";
import React, { useState } from "react";
import { Button, ButtonProps } from "../../../../src";

const buttonAttr: Record<string, any> = {};

const ButtonImportPreview = () => (
	<LeHighlighter language="tsx" code={`import { Button, ButtonProps } from "leux";`} />
);

const ButtonThemePreview = () => {
	const [showCode, setShowCode] = useState<boolean>(false);

	return (
		<>
			<LePreview showCode={showCode} setShowCode={setShowCode}>
				<Button colorScheme="primary">Primary</Button>
				<Button colorScheme="secondary">Secondary</Button>
				<Button colorScheme="success">Success</Button>
				<Button colorScheme="warning">Warning</Button>
				<Button colorScheme="danger">Danger</Button>
				<Button colorScheme="default">Default</Button>
			</LePreview>
			{showCode && (
				<LeHighlighter
					language="tsx"
					code={`const Component = () => (
	<>
		<Button colorScheme="primary">Primary</Button>
		<Button colorScheme="secondary">Secondary</Button>
		<Button colorScheme="success">Success</Button>
		<Button colorScheme="warning">Warning</Button>
		<Button colorScheme="danger">Danger</Button>
		<Button colorScheme="default">Default</Button>
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
				<Button colorScheme="primary" variant="filled">
					Filled
				</Button>
				<Button colorScheme="success" variant="outlined">
					Outlined
				</Button>
				<Button colorScheme="danger" variant="ghost">
					Ghost
				</Button>
			</LePreview>
			{showCode && (
				<LeHighlighter
					language="tsx"
					code={`const Component = () => (
	<>
		<Button colorScheme="primary" variant="filled">
			Filled
		</Button>
		<Button colorScheme="success" variant="outlined">
			Outlined
		</Button>
		<Button colorScheme="danger" variant="ghost">
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
				<Button colorScheme="default" size="small">
					Small
				</Button>
				<Button colorScheme="default">Medium</Button>
				<Button colorScheme="default" size="large">
					Large
				</Button>
			</LePreview>
			{showCode && (
				<LeHighlighter
					language="tsx"
					code={`const Component = () => (
	<>
		<Button colorScheme="default" size="small">Small</Button>
		<Button colorScheme="default" size="medium">Medium</Button>
		<Button colorScheme="default" size="large">Large</Button>
	</>
);`}
				/>
			)}
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
				<Button colorScheme={disabled ? "primary" : "danger"} onClick={handleOnClick}>
					{disabled ? "on" : "off"}
				</Button>
				<Button colorScheme="default" state={{ disabled }}>
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
				<Button onClick={handleOnClick} colorScheme="success">
					Alert
				</Button>
			</LePreview>
			{showCode && (
				<LeHighlighter
					language="tsx"
					code={`const Component = () => {
	const handleOnClick = () => alert("Hello World!");

	return (
		<Button onClick={handleOnClick} colorScheme="success">Alert</Button>
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
		colorScheme: {
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

export default buttonAttr;
