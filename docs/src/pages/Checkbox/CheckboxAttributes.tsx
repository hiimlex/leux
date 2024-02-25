import { LeApiTable, LeHighlighter, LePreview, LeSourceButton, PropsMapping } from "@/components";
import { ChangeEvent, useState } from "react";
import { Button, Checkbox, CheckboxProps } from "../../../../src";
import { attributes as checkboxAttr } from "./checkbox.md";

const CheckboxImportPreview = () => (
	<LeHighlighter language="tsx" code={`import { Checkbox, CheckboxProps } from "leux";`} />
);

const CheckboxActionPreview = () => {
	const [showCode, setShowCode] = useState<boolean>(false);
	const [value, setValue] = useState(false);

	const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.checked);
	};

	return (
		<>
			<LePreview showCode={showCode} setShowCode={setShowCode}>
				<Checkbox fieldKey="normal" label={value ? "On" : "Off"} onChange={handleOnChange} />
			</LePreview>
			{showCode && (
				<LeHighlighter
					language="tsx"
					code={`const Component = () => {
	const [value, setValue] = useState(false);

	const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.checked);
	};

	return (
		<Checkbox
			fieldKey="normal"
			label={value ? "On" : "Off"}
			onChange={handleOnChange}
		/>
	)	
}		
`}
				/>
			)}
		</>
	);
};

const CheckboxSizePreview = () => {
	const [showCode, setShowCode] = useState<boolean>(false);

	return (
		<>
			<LePreview showCode={showCode} setShowCode={setShowCode}>
				<Checkbox fieldKey="small" label="small" size="small" customStyles={{ marginRight: 12 }} />
				<Checkbox
					fieldKey="medium"
					label="medium"
					size="medium"
					customStyles={{ marginRight: 12 }}
				/>
				<Checkbox fieldKey="large" label="large" size="large" customStyles={{ marginRight: 12 }} />
			</LePreview>
			{showCode && (
				<LeHighlighter
					language="tsx"
					code={`const Component = () => (
	<>
		<Checkbox
			fieldKey="small"
			label="small"
			size="small"
			customStyles={{ marginRight: 12 }}
		/>
		<Checkbox
			fieldKey="medium"
			label="medium"
			size="medium"
			customStyles={{ marginRight: 12 }}
		/>
		<Checkbox
			fieldKey="large"
			label="large"
			size="large"
			customStyles={{ marginRight: 12 }}
		/>
	</>
);
`}
				/>
			)}
		</>
	);
};

const CheckboxCustomPreview = () => {
	const [showCode, setShowCode] = useState<boolean>(false);

	return (
		<>
			<LePreview showCode={showCode} setShowCode={setShowCode}>
				<Checkbox
					fieldKey="customCheckbox"
					label="custom"
					customStyles={{
						textDecoration: "underline",
						color: "red",
					}}
					customLabelClass="le-text--overline"
					customLabelStyles={{
						color: "blue",
						cursor: "pointer",
					}}
					customInputStyles={{
						cursor: "pointer",
					}}
				/>
			</LePreview>
			{showCode && (
				<LeHighlighter
					code={`const Component = () => (
	<Checkbox
		fieldKey="custom"
		label="Custom"
		customStyles={{
			textDecoration: "underline",
			color: "red",
		}}
		customLabelClass="le-text--overline"
		customLabelStyles={{
			color: "blue",
			cursor: "pointer",
		}}
	/>
);`}
					language="tsx"
				/>
			)}
		</>
	);
};

const CheckboxStatePreview = () => {
	const [showCode, setShowCode] = useState<boolean>(false);
	const [disabled, setDisabled] = useState<boolean>(false);

	const handleDisableCheckbox = () => {
		setDisabled((curr) => !curr);
	};

	return (
		<>
			<LePreview direction="column" showCode={showCode} setShowCode={setShowCode}>
				<Button onClick={handleDisableCheckbox} theme={!disabled ? "primary" : "danger"}>
					{!disabled ? "on" : "off"}
				</Button>
				<Checkbox
					fieldKey="disabled"
					label="Disabled"
					state={{ disabled }}
					customStyles={{ marginTop: 12 }}
				/>
			</LePreview>
			{showCode && (
				<LeHighlighter
					code={`const Component = () => {
	const [disabled, setDisabled] = useState<boolean>(false);

	const handleDisableCheckbox = () => {
		setDisabled((curr) => !curr);
	};

	return (
		<>
			<Button onClick={handleDisableCheckbox} theme={!disabled ? "primary" : "danger"}>
				{!disabled ? "on" : "off"}
			</Button>
			<Checkbox
				fieldKey="disabled"
				label="Disabled"
				state={{ disabled }}
				customStyles={{ marginTop: 12 }}
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

const CheckboxFieldKeyPreview = () => {
	const [showCode, setShowCode] = useState<boolean>(false);

	return (
		<>
			<LePreview showCode={showCode} setShowCode={setShowCode}>
				<Checkbox fieldKey="fieldKey" label="fieldKey" />
			</LePreview>
			{showCode && (
				<LeHighlighter
					code={`const Component = () => (
	<Checkbox fieldKey="fieldKey" label="fieldKey" />
);`}
					language="tsx"
				/>
			)}
		</>
	);
};

const CheckboxApiTable = () => {
	const props: PropsMapping<CheckboxProps> = {
		fieldKey: {
			type: "string",
		},
		label: {
			type: "string",
		},
		size: {
			type: "'small' | 'medium' | 'large'",
			defaultValue: "'medium'",
		},
		defaultChecked: {
			type: "boolean",
			defaultValue: "false",
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
		customInputClass: {
			type: "string",
		},
		customInputStyles: {
			type: "React.CSSProperties",
		},
		customLabelClass: {
			type: "string",
		},
		customLabelStyles: {
			type: "React.CSSProperties",
		},
		onChange: {
			type: "(event: React.ChangeEvent<HTMLInputElement>) => void",
		},
		checkBoxProps: {
			type: "React.InputHTMLAttributes<HTMLInputElement>",
		},
		checkboxRef: {
			type: "React.RefObject<HTMLInputElement>",
		},
	};

	return <LeApiTable props={props} />;
};

checkboxAttr["LeSourceButton"] = LeSourceButton;
checkboxAttr["LeHighlighter"] = LeHighlighter;
checkboxAttr["CheckboxImportPreview"] = CheckboxImportPreview;
checkboxAttr["CheckboxActionPreview"] = CheckboxActionPreview;
checkboxAttr["CheckboxSizePreview"] = CheckboxSizePreview;
checkboxAttr["CheckboxCustomPreview"] = CheckboxCustomPreview;
checkboxAttr["CheckboxStatePreview"] = CheckboxStatePreview;
checkboxAttr["CheckboxFieldKeyPreview"] = CheckboxFieldKeyPreview;
checkboxAttr["CheckboxApiTable"] = CheckboxApiTable;

export { checkboxAttr };
