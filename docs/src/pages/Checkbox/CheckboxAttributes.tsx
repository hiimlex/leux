import { LeHighlighter, LePreview, LeSourceButton } from "@/components";
import { ChangeEvent, useState } from "react";
import { Button, Checkbox } from "../../../../src";
import { attributes as checkboxAttr } from "./checkbox.md";

const CheckboxImportPreview = () => (
	<LeHighlighter language="tsx" code={`import { Checkbox, CheckboxProps } from "leux";`} />
);

const CheckboxActionPreview = () => {
	const [value, setValue] = useState(false);

	const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.checked);
	};

	return (
		<>
			<LePreview>
				<Checkbox fieldKey="normal" label={value ? "On" : "Off"} onChange={handleOnChange} />
			</LePreview>
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
		</>
	);
};

const CheckboxSizePreview = () => (
	<>
		<LePreview>
			<Checkbox fieldKey="small" label="small" size="small" customStyles={{ marginRight: 12 }} />
			<Checkbox fieldKey="medium" label="medium" size="medium" customStyles={{ marginRight: 12 }} />
			<Checkbox fieldKey="large" label="large" size="large" customStyles={{ marginRight: 12 }} />
		</LePreview>
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
	</>
);

const CheckboxCustomPreview = () => {
	return (
		<>
			<LePreview>
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
		</>
	);
};

const CheckboxStatePreview = () => {
	const [disabled, setDisabled] = useState<boolean>(false);

	const handleDisableCheckbox = () => {
		setDisabled((curr) => !curr);
	};

	return (
		<>
			<LePreview direction="column">
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
		</>
	);
};

const CheckboxFieldKeyPreview = () => (
	<>
		<LePreview>
			<Checkbox fieldKey="fieldKey" label="fieldKey" />
		</LePreview>
		<LeHighlighter
			code={`const Component = () => (
	<Checkbox fieldKey="fieldKey" label="fieldKey" />
);`}
			language="tsx"
		/>
	</>
);

checkboxAttr["LeSourceButton"] = LeSourceButton;
checkboxAttr["LeHighlighter"] = LeHighlighter;
checkboxAttr["CheckboxImportPreview"] = CheckboxImportPreview;
checkboxAttr["CheckboxActionPreview"] = CheckboxActionPreview;
checkboxAttr["CheckboxSizePreview"] = CheckboxSizePreview;
checkboxAttr["CheckboxCustomPreview"] = CheckboxCustomPreview;
checkboxAttr["CheckboxStatePreview"] = CheckboxStatePreview;
checkboxAttr["CheckboxFieldKeyPreview"] = CheckboxFieldKeyPreview;

export { checkboxAttr };
