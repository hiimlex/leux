import { LeApiTable, LeHighlighter, LePreview, LeSourceButton, PropsMapping } from "@/components";
import { ChangeEvent, useState } from "react";
import { Button, TextArea, TextAreaProps, Topography } from "../../../../src";
import { attributes as textAreaAttr } from "./textarea.md";

const TextAreaImportPreview = () => (
	<LeHighlighter code={`import { TextArea, TextAreaProps } from "leux";`} language="tsx" />
);

const TextAreaVariantPreview = () => {
	const [showCode, setShowCode] = useState<boolean | undefined>(false);

	return (
		<>
			<LePreview showCode={showCode} setShowCode={setShowCode}>
				<TextArea
					fieldKey="filledTextArea"
					placeholder="Insert some text ..."
					variant="filled"
					customStyles={{ marginRight: 12 }}
				></TextArea>
				<TextArea
					fieldKey="outlinedTextArea"
					placeholder="Insert some text ..."
					variant="outlined"
					customStyles={{ marginRight: 12 }}
				></TextArea>
			</LePreview>
			{showCode && (
				<LeHighlighter
					code={`const Component = () => {
	return (
		<>
			<TextArea
				fieldKey="filledTextArea"
				placeholder="Insert some text ..."
				variant="filled"
			></TextArea>
			<TextArea
				fieldKey="outlinedTextArea"
				placeholder="Insert some text ..."
				variant="outlined"
			></TextArea>
		</>
	);
};`}
					language="tsx"
				/>
			)}
		</>
	);
};

const TextAreaFieldKeyPreview = () => {
	const [showCode, setShowCode] = useState<boolean | undefined>(false);

	return (
		<>
			<LePreview showCode={showCode} setShowCode={setShowCode}>
				<TextArea fieldKey="fieldKeytextArea" placeholder="Insert some text ..."></TextArea>
			</LePreview>
			{showCode && (
				<LeHighlighter
					code={`const Component = () => (
	<TextArea fieldKey="fieldKeytextArea" placeholder="Insert some text ..."></TextArea>
);`}
					language="tsx"
				/>
			)}
		</>
	);
};

const TextAreaActionPreview = () => {
	const [showCode, setShowCode] = useState<boolean | undefined>(false);
	const [value, setValue] = useState<string>("");

	const handleOnChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		setValue(e.target.value);
	};

	return (
		<>
			<LePreview direction="column" showCode={showCode} setShowCode={setShowCode}>
				<Topography variant="body-1">see the value here: {value}</Topography>
				<TextArea
					fieldKey="actionTextArea"
					placeholder="Insert some text ..."
					onChange={handleOnChange}
				></TextArea>
			</LePreview>
			{showCode && (
				<LeHighlighter
					code={`const Component = () => {
	const [value, setValue] = useState<string>("");

	const handleOnChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		setValue(e.target.value);
	};

	return (
		<>
			<Topography type="body-1">see the value here: {value}</Topography>
			<TextArea
				fieldKey="actionTextArea"
				placeholder="Insert some text ..."
				onChange={handleOnChange}
			></TextArea>
		</>
	);
};`}
					language="tsx"
				/>
			)}
		</>
	);
};

const TextAreaSizePreview = () => {
	const [showCode, setShowCode] = useState<boolean | undefined>(false);

	return (
		<>
			<LePreview showCode={showCode} setShowCode={setShowCode}>
				<TextArea
					fieldKey="smallTextArea"
					placeholder="Insert some text ..."
					size="small"
					customStyles={{ marginRight: 12 }}
				></TextArea>
				<TextArea
					fieldKey="mediumTextArea"
					placeholder="Insert some text ..."
					size="medium"
					customStyles={{ marginRight: 12 }}
				></TextArea>
				<TextArea
					fieldKey="largeTextArea"
					placeholder="Insert some text ..."
					size="large"
				></TextArea>
			</LePreview>
			{showCode && (
				<LeHighlighter
					code={`const Component = () => (
	<>
		<TextArea
			fieldKey="smallTextArea"
			placeholder="Insert some text ..."
			size="small"
			customStyles={{ marginRight: 12 }}
		></TextArea>
		<TextArea
			fieldKey="mediumTextArea"
			placeholder="Insert some text ..."
			size="medium"
			customStyles={{ marginRight: 12 }}
		></TextArea>
		<TextArea
			fieldKey="largeTextArea"
			placeholder="Insert some text ..."
			size="large"
		></TextArea>
	</>
);`}
					language="tsx"
				/>
			)}
		</>
	);
};

const TextAreaRowsPreview = () => {
	const [showCode, setShowCode] = useState<boolean | undefined>(false);

	return (
		<>
			<LePreview showCode={showCode} setShowCode={setShowCode}>
				<TextArea
					fieldKey="rowsTextArea"
					placeholder="Insert some text ..."
					rows={5}
					minRows={2}
					resize
				/>
			</LePreview>
			{showCode && (
				<LeHighlighter
					code={`const Component = () => (
	<TextArea
		fieldKey="rowsTextArea"
		placeholder="Insert some text ..."
		rows={5}
		minRows={2}
		resize
	/>
);`}
					language="tsx"
				/>
			)}
		</>
	);
};

const TextAreaStatePreview = () => {
	const [showCode, setShowCode] = useState<boolean | undefined>(false);
	const [disabled, setDisabled] = useState<boolean>(false);

	const handleDisableTextArea = () => {
		setDisabled((curr) => !curr);
	};

	return (
		<>
			<LePreview direction="column" showCode={showCode} setShowCode={setShowCode}>
				<Button
					onClick={handleDisableTextArea}
					theme={!disabled ? "primary" : "danger"}
					customStyles={{ marginBottom: 12 }}
				>
					{!disabled ? "on" : "off"}
				</Button>
				<TextArea
					fieldKey="stateTextArea"
					placeholder="insert the text here ..."
					state={{ disabled }}
				/>
			</LePreview>
			{showCode && (
				<LeHighlighter
					code={`const Component = () => {
	const [disabled, setDisabled] = useState<boolean>(false);

	const handleDisableTextArea = () => {
		setDisabled((curr) => !curr);
	};

	return (
		<>
			<Button
				onClick={handleDisableTextArea}
				theme={!disabled ? "primary" : "danger"}
				customStyles={{ marginBottom: 12 }}
			>
				{!disabled ? "on" : "off"}
			</Button>
			<TextArea
				fieldKey="stateTextArea"
				placeholder="insert the text here ..."
				state={{ disabled }}
			/>
		</>
	)
}`}
					language="tsx"
				/>
			)}
		</>
	);
};

const TextAreaPropsPreview = () => {
	const [showCode, setShowCode] = useState<boolean | undefined>(true);
	const [value, setValue] = useState<string>("");

	const handleOnChange = ({ target: { value } }: ChangeEvent<HTMLTextAreaElement>) => {
		setValue(value);
	};

	return (
		<>
			<LePreview direction="column" showCode={showCode} setShowCode={setShowCode}>
				<Topography variant="body-1">see the value here: {value}</Topography>
				<TextArea
					textAreaProps={{
						placeholder: "Insert your text here",
						onChange: handleOnChange,
					}}
				/>
			</LePreview>
			{showCode && (
				<LeHighlighter
					code={`const Component = () => {
	const [value, setValue] = useState<string>("");

	const handleOnChange = ({ target: { value } }: ChangeEvent<HTMLTextAreaElement>) => {
		setValue(value);
	};

	return (
		<>
			<Topography variant="body-1">see the value here: {value}</Topography>
			<TextArea
				textAreaProps={{
					placeholder: "Insert your text here",
					onChange: handleOnChange,
				}}
			/>
		</>
	);		
}`}
					language="tsx"
				/>
			)}
		</>
	);
};

const TextAreaApiTable = () => {
	const props: PropsMapping<TextAreaProps> = {
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
		minRows: {
			type: "number",
			defaultValue: "2",
		},
		rows: {
			type: "number",
			defaultValue: "3",
		},
		defaultValue: {
			type: "string",
		},
		onChange: {
			type: "(e: React.ChangeEvent<HTMLTextAreaElement>) => void",
		},
		state: {
			type: "TextAreaState | { disabled?: boolean }",
		},
		placeholder: {
			type: "string",
		},
		resize: {
			type: "boolean",
			defaultValue: "false",
		},
		width: {
			type: "React.CSSProperties['width']",
		},
		customStyles: {
			type: "React.CSSProperties",
		},
		customClass: {
			type: "string",
		},
		textAreaProps: {
			type: "React.TextareaHTMLAttributes<HTMLTextAreaElement>",
		},
		textAreaRef: {
			type: "React.RefObject<HTMLTextAreaElement>",
		},
	};

	return <LeApiTable props={props} />;
};

textAreaAttr["LeHighlighter"] = LeHighlighter;
textAreaAttr["LeSourceButton"] = LeSourceButton;
textAreaAttr["TextAreaImportPreview"] = TextAreaImportPreview;
textAreaAttr["TextAreaActionPreview"] = TextAreaActionPreview;
textAreaAttr["TextAreaFieldKeyPreview"] = TextAreaFieldKeyPreview;
textAreaAttr["TextAreaSizePreview"] = TextAreaSizePreview;
textAreaAttr["TextAreaRowsPreview"] = TextAreaRowsPreview;
textAreaAttr["TextAreaVariantPreview"] = TextAreaVariantPreview;
textAreaAttr["TextAreaStatePreview"] = TextAreaStatePreview;
textAreaAttr["TextAreaPropsPreview"] = TextAreaPropsPreview;
textAreaAttr["TextAreaApiTable"] = TextAreaApiTable;

export { textAreaAttr };
