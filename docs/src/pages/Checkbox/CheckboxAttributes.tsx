import { LeHighlighter, LePreview, LeSourceButton } from "@/components";
import { useState } from "react";
import { Checkbox } from "../../../../src";
import { attributes as checkboxAttr } from "./checkbox.md";

const CheckboxImportPreview = () => (
	<LeHighlighter language="tsx" code={`import { Checkbox, CheckboxProps } from "leux";`} />
);

const CheckboxActionPreview = () => {
	const [value, setValue] = useState(false);

	const handleOnChange = (value: boolean) => {
		setValue(value);
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

	const handleOnChange = (value: boolean) => {
		setValue(value);
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

checkboxAttr["LeSourceButton"] = LeSourceButton;
checkboxAttr["LeHighlighter"] = LeHighlighter;
checkboxAttr["CheckboxImportPreview"] = CheckboxImportPreview;
checkboxAttr["CheckboxActionPreview"] = CheckboxActionPreview;
checkboxAttr["CheckboxSizePreview"] = CheckboxSizePreview;
checkboxAttr["CheckboxCustomPreview"] = CheckboxCustomPreview;

export { checkboxAttr };
