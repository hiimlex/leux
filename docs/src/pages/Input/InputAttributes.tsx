import { LeApiTable, LeHighlighter, LePreview, LeSourceButton, PropsMapping } from "@/components";
import { ChangeEvent, useState } from "react";
import { Button, Input, InputProps, InputSizes, InputVariant, Typography } from "../../../../src";
import { attributes as inputAttr } from "./input.md";
import React from "react";

const InputImportPreview = () => (
	<LeHighlighter code={`import { Input, InputProps } from 'leux';`} language="tsx" />
);

const InputKeyPreview = () => {
	const [showCode, setShowCode] = useState<boolean>(false);

	return (
		<>
			<LePreview direction="column" showCode={showCode} setShowCode={setShowCode}>
				<Input fieldKey="key" placeholder="Key" />
			</LePreview>
			{showCode && (
				<LeHighlighter
					code={`const Component = () => (
	<Input fieldKey="key" placeholder="Key" />
);`}
					language="tsx"
				/>
			)}
		</>
	);
};

const InputVariantPreview = () => {
	const [showCode, setShowCode] = useState<boolean>(false);

	return (
		<>
			<LePreview direction="column" showCode={showCode} setShowCode={setShowCode}>
				{(["filled", "outlined"] as InputVariant[]).map((variant, index) => (
					<Input key={index} variant={variant} placeholder="Placeholder" />
				))}
			</LePreview>
			{showCode && (
				<LeHighlighter
					language="tsx"
					code={`const Component = () => (
	{(["filled", "outlined"] as InputVariant[]).map((variant, index) => (
		<Input key={index} variant={variant} placeholder="Placeholder" />
	))}
);`}
				/>
			)}
		</>
	);
};

const InputSizePreview = () => {
	const [showCode, setShowCode] = useState<boolean>(false);

	return (
		<>
			<LePreview direction="column" showCode={showCode} setShowCode={setShowCode}>
				{(["small", "medium", "large"] as InputSizes[]).map((size, index) => (
					<Input key={index} variant="outlined" placeholder={size} size={size} />
				))}
			</LePreview>
			{showCode && (
				<LeHighlighter
					language="tsx"
					code={`const Component = () => (
	{(["small", "medium", "large"] as InputSizes[]).map((size, index) => (
		<Input
			key={index}
			variant="outlined"
			placeholder={size}
			size={size}
		/>
	))}
);`}
				/>
			)}
		</>
	);
};

const InputActionPreview = () => {
	const [showCode, setShowCode] = useState<boolean>(false);

	const [value, setValue] = useState("");
	const handleOnChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => setValue(value);

	return (
		<>
			<LePreview direction="column" showCode={showCode} setShowCode={setShowCode}>
				<Typography variant="body-2">type to see the value here: {value}</Typography>
				<Input placeholder="Action" onChange={handleOnChange} />
			</LePreview>
			{showCode && (
				<LeHighlighter
					language="tsx"
					code={`const Component = () = {
	const [value, setValue] = useState("");
	const handleOnChange = (value: string) => setValue(value);

	return (
		<>
			<Typography type="body-2">type to see the value here: {value}</Typography>
			<Input
				key="preview"
				placeholder="Action"
				onChange={handleOnChange}
			/>
		</>
	)
}`}
				/>
			)}
		</>
	);
};

const InputStatePreview = () => {
	const [showCode, setShowCode] = useState<boolean>(false);

	const [disabled, setDisabled] = useState(true);
	const [value, setValue] = useState("");
	const handleOnClick = () => setDisabled(!disabled);
	const handleOnChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => setValue(value);

	return (
		<>
			<LePreview direction="column" showCode={showCode} setShowCode={setShowCode}>
				<Button colorScheme={disabled ? "danger" : "primary"} onClick={handleOnClick}>
					{disabled ? "off" : "on"}
				</Button>
				<Typography variant="body-1">Value: {value}</Typography>
				<Input state={{ disabled }} placeholder="Disabled" onChange={handleOnChange} />
			</LePreview>
			{showCode && (
				<LeHighlighter
					code={`const Component = () => {
	const [disabled, setDisabled] = useState(true);
	const [value, setValue] = useState("");
	const handleOnClick = () => setDisabled(!disabled);
	const handleOnChange = (value: string) => setValue(value)

	return (
		<>
			<Button
				variant={disabled ? "danger" : "primary"}
				onClick={handleOnClick}
			>
				{disabled ? "off" : "on"}
			</Button>
			<Typography type="body-1">Value: {}</Typography>
			<Input
				state={{ disabled }}
				placeholder="Disabled"
				onChange={handleOnChange}
			/>
		</>
	)
};`}
					language="tsx"
				/>
			)}
		</>
	);
};

const InputCustomPreview = () => {
	const [showCode, setShowCode] = useState<boolean>(false);

	return (
		<>
			<LePreview direction="column" showCode={showCode} setShowCode={setShowCode}>
				<Input
					placeholder="Custom input"
					customStyles={{
						color: "red",
						borderColor: "green",
						backgroundColor: "blue",
					}}
					customClass="le-text--h6"
				/>
			</LePreview>
			{showCode && (
				<LeHighlighter
					code={`const Component = () => (
	<Input
		placeholder="Custom input"
		customStyles={{
			color: "red",
			borderColor: "green",
			backgroundColor: "blue",
		}}
		customClass="le-text--h6"
	/>`}
					language="tsx"
				/>
			)}
		</>
	);
};

const InputApiTable = () => {
	const props: PropsMapping<InputProps> = {
		fieldKey: {
			type: "string",
		},
		size: {
			type: "'small' | 'medium' | 'large'",
			defaultValue: "'medium'",
		},
		variant: {
			type: "'filled' | 'outlined'",
			defaultValue: "'filled'",
		},
		placeholder: {
			type: "string",
		},
		type: {
			type: "React.HTMLInputTypeAttribute",
			defaultValue: "'text'",
		},
		state: {
			type: "{ disabled?: boolean }",
		},
		width: {
			type: "React.CSSProperties['width']",
			defaultValue: "'auto'",
		},
		customClass: {
			type: "string",
		},
		customStyles: {
			type: "React.CSSProperties",
		},
		onChange: {
			type: "(event: React.ChangeEventHandler<HTMLInputElement>) => void",
		},
		inputProps: {
			type: "React.InputHTMLAttributes<HTMLInputElement>",
		},
		inputRef: {
			type: "React.RefObject<HTMLInputElement>",
		},
	};

	return <LeApiTable props={props} />;
};

inputAttr["InputImportPreview"] = InputImportPreview;
inputAttr["LeSourceButton"] = LeSourceButton;
inputAttr["InputVariantPreview"] = InputVariantPreview;
inputAttr["InputSizePreview"] = InputSizePreview;
inputAttr["InputActionPreview"] = InputActionPreview;
inputAttr["InputStatePreview"] = InputStatePreview;
inputAttr["InputCustomPreview"] = InputCustomPreview;
inputAttr["InputKeyPreview"] = InputKeyPreview;
inputAttr["InputApiTable"] = InputApiTable;
inputAttr["LeHighlighter"] = LeHighlighter;

export { inputAttr };
