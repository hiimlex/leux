import { LeApiTable, LeHighlighter, LePreview, LeSourceButton, PropsMapping } from "@/components";
import { useEffect, useRef, useState } from "react";
import { Button, Radio, RadioProps, Typography } from "../../../../src";
import { attributes as radioAttr } from "./radio.md";
import React from "react";

const RadioImportPreview = () => {
	return (
		<>
			<LeHighlighter code={`import { Radio, RadioProps } from "@leux/ui";`} language="tsx" />
		</>
	);
};

const RadioFieldKeyPreview = () => {
	const [showCode, setShowCode] = useState<boolean>(false);

	const [fieldKey, setFieldKey] = useState<string>("");
	const radioRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		setFieldKey(radioRef.current ? radioRef.current.id : "");
	}, [radioRef.current?.id]);

	return (
		<>
			<LePreview direction="column" showCode={showCode} setShowCode={setShowCode}>
				<Typography variant="body-1">
					<strong>fieldKey</strong>: {fieldKey}
				</Typography>
				<Radio fieldKey="prefix" value="suffix" label="Field Key" radioRef={radioRef} />
			</LePreview>
			{showCode && (
				<LeHighlighter
					code={`const Component = () => {
	const radioRef = useRef<HTMLInputElement>(null);

	return (
		<>
			<Typography variant="body-1">
				<strong>fieldKey</strong>: {radioRef.current && radioRef.current.id}
			</Typography>
			<Radio
				fieldKey="fieldKey"
				value="1"
				label="Field Key"
				radioRef={radioRef}
			/>
		</>
	);
};`}
					language="tsx"
				/>
			)}
		</>
	);
};

const RadioActionPreview = () => {
	const [showCode, setShowCode] = useState<boolean>(false);
	const [value, setValue] = useState<string>("1");

	const handleOnChange = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
		setValue(value);
	};

	return (
		<>
			<LePreview direction="column" showCode={showCode} setShowCode={setShowCode}>
				<Typography variant="body-2">value: {value}</Typography>
				<div style={{ display: "flex", flexDirection: "row" }}>
					<Radio
						fieldKey="test"
						value="1"
						defaultChecked={value === "1"}
						label="Value 1"
						onChange={handleOnChange}
						customStyles={{ marginRight: 12 }}
					></Radio>
					<Radio
						fieldKey="test"
						value="2"
						defaultChecked={value === "2"}
						label="Value 2"
						onChange={handleOnChange}
					></Radio>
				</div>
			</LePreview>
			{showCode && (
				<LeHighlighter
					code={`const Component = () => {
	const [value, setValue] = useState<string>("1");

	const handleOnChange = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
		setValue(value);
	};

	return (
		<>
			<Typography type="body-2">value: {value}</Typography>
			<div style={{ display: "flex", flexDirection: "row" }}>
				<Radio
					fieldKey="test"
					value="1"
					defaultChecked={value === "1"}
					label="Value 1"
					onChange={handleOnChange}
					customStyles={{ marginRight: 12 }}
				></Radio>
				<Radio
					fieldKey="test"
					value="2"
					defaultChecked={value === "2"}
					label="Value 2"
					onChange={handleOnChange}
				></Radio>
			</div>
		</>
	)

};`}
					language="tsx"
				></LeHighlighter>
			)}
		</>
	);
};

const RadioSizePreview = () => {
	const [showCode, setShowCode] = useState<boolean>(false);

	return (
		<>
			<LePreview showCode={showCode} setShowCode={setShowCode}>
				<Radio
					fieldKey="size"
					size="small"
					value="small"
					label="Small"
					customStyles={{ marginRight: 12 }}
				></Radio>
				<Radio
					fieldKey="size"
					size="medium"
					value="medium"
					label="Medium"
					customStyles={{ marginRight: 12 }}
				></Radio>
				<Radio fieldKey="size" size="large" value="large" label="Large"></Radio>
			</LePreview>
			{showCode && (
				<LeHighlighter
					code={`const Component = () => (
	<>
		<Radio
			fieldKey="small"
			size="small"
			value="small"
			label="Small"
			customStyles={{ marginRight: 12 }}
		></Radio>
		<Radio
			fieldKey="medium"
			size="medium"
			value="medium"
			label="Medium"
			customStyles={{ marginRight: 12 }}
		></Radio>
		<Radio fieldKey="large" size="large" value="large" label="Large"></Radio>
	</>
);`}
					language="tsx"
				/>
			)}
		</>
	);
};

const RadioCustomPreview = () => {
	const [showCode, setShowCode] = useState<boolean>(false);

	return (
		<>
			<LePreview showCode={showCode} setShowCode={setShowCode}>
				<Radio
					fieldKey="style"
					value="custom"
					label="Custom"
					customStyles={{
						border: "1px solid blue",
						padding: "12px",
						marginRight: 12,
						borderRadius: 4,
					}}
					customLabelStyles={{ color: "red" }}
					customInputClass="custom-dot"
				/>
				<Radio fieldKey="style" value="normal" label="Normal" />
			</LePreview>
			{showCode && (
				<>
					<LeHighlighter
						code={`// component.tsx
const Component = () => (
	<>
		<Radio
			fieldKey="style"
			value="custom"
			label="Custom"
			customStyles={{ 
				border: "1px solid red",
				padding: "12px",
				marginRight: 12,
				borderRadius: 4, 
			}}
			customLabelStyles={{ color: "red" }}
			customInputClass="custom-dot"
		/>
		<Radio fieldKey="style" value="normal" label="Normal" />
	</>
)`}
						language="tsx"
					/>
					<LeHighlighter
						code={`// styles.scss
.custom-dot {
	appearance: none;
	position: relative;

	&::before {
		content: "";
		display: block;
		width: 12px;
		height: 12px;
		border-radius: 50%;
		z-index: 1;
		border: 1px solid var(--le-color-border);
	}

	&:hover::before {
		box-shadow: 0 0 12px 2px rgba($color-variant-success, 0.1);
		border-color: rgba($color-variant-success, 0.8);
	}

	&:checked::before {
		border-color: $color-variant-success;
	}

	&:checked::after {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		margin: auto;

		width: 4px;
		height: 4px;
		border-radius: 50%;
		padding: 2px;
		background-color: $color-variant-success;
	}
}`}
						language="scss"
					/>
				</>
			)}
		</>
	);
};

const RadioStatePreview = () => {
	const [showCode, setShowCode] = useState<boolean>(false);
	const [disabled, setDisabled] = useState<boolean>(false);

	const handleDisableRadio = () => {
		setDisabled((curr) => !curr);
	};

	return (
		<>
			<LePreview direction="column" showCode={showCode} setShowCode={setShowCode}>
				<Button colorScheme={!disabled ? "primary" : "danger"} onClick={handleDisableRadio}>
					{!disabled ? "on" : "off"}
				</Button>
				<div style={{ display: "flex", alignItems: "center", marginTop: 12 }}>
					<Radio
						fieldKey="stateRadio"
						value="1"
						label="Opção 1"
						state={{ disabled }}
						customStyles={{ marginRight: 12 }}
					></Radio>
					<Radio fieldKey="stateRadio" value="2" label="Opção 2" state={{ disabled }}></Radio>
				</div>
			</LePreview>
			{showCode && (
				<LeHighlighter
					code={`const Component = () => (
	<>
		<Button colorScheme={!disabled ? "primary" : "danger"} onClick={handleDisableRadio}>
			{!disabled ? "on" : "off"}
		</Button>
		<Radio
			fieldKey="stateRadio"
			value="import"
			label="Importar Configurações ?"
			state={{ disabled }}
			containerCustomStyles={{ marginTop: 12 }}
		></Radio>
	</>
);`}
					language="tsx"
				/>
			)}
		</>
	);
};

const RadioApiTable = () => {
	const props: PropsMapping<RadioProps> = {
		fieldKey: {
			type: "string",
		},
		label: {
			type: "string",
		},
		value: {
			type: "string",
		},
		size: {
			type: "'small' | 'medium' | 'large'",
			defaultValue: "'medium'",
		},
		state: {
			type: "{disabled?: boolean}",
		},
		defaultChecked: {
			type: "boolean",
		},
		onChange: {
			type: "(event: ChangeEvent<HTMLInputElement>) => void",
		},
		customStyles: {
			type: "React.CSSProperties",
		},
		customClass: {
			type: "string",
		},
		customLabelStyles: {
			type: "React.CSSProperties",
		},
		customLabelClass: {
			type: "string",
		},
		customInputStyles: {
			type: "React.CSSProperties",
		},
		customInputClass: {
			type: "string",
		},
		radioProps: {
			type: "React.InputHTMLAttributes<HTMLInputElement>",
		},
		radioRef: {
			type: "React.RefObject<HTMLInputElement>",
		},
	};

	return <LeApiTable props={props} />;
};

radioAttr["LeSourceButton"] = LeSourceButton;
radioAttr["LeHighlighter"] = LeHighlighter;
radioAttr["RadioImportPreview"] = RadioImportPreview;
radioAttr["RadioActionPreview"] = RadioActionPreview;
radioAttr["RadioSizePreview"] = RadioSizePreview;
radioAttr["RadioCustomPreview"] = RadioCustomPreview;
radioAttr["RadioStatePreview"] = RadioStatePreview;
radioAttr["RadioFieldKeyPreview"] = RadioFieldKeyPreview;
radioAttr["RadioApiTable"] = RadioApiTable;

export { radioAttr };
