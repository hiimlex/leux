import { LeHighlighter, LeSourceButton } from "@/components";
import { Option, Select } from "../../../../src";
import { attributes as selectAttr } from "./select.md";

const SelectImportPreview = () => (
	<LeHighlighter
		code={`import { Select, SelectProps, Option, OptionProps } from "leux"`}
		language="tsx"
	/>
);

const SelectOptionPreview = () => {
	return (
		<>
			<div className="le-preview le-input-group">
				<Select
					fieldKey="normal"
					width="182px"
					placeholder="Normal Select"
				>
					<Option value="1">Option 1</Option>
				</Select>
				<Select fieldKey="custom-option" width="182px" type="outlined" placeholder="Custom Select">
					<option value="1">Option 1</option>
				</Select>
			</div>
			<LeHighlighter
				code={`const Component = () => {
	return (
		<>
			<Select fieldKey="normal">
				<Option value="option">Option</Option>
			</Select>
			<Select fieldKey="custom-option">
				<option value="customOption">Custom option</option>
			</Select>
		</>
	)
};`}
				language="tsx"
			/>
		</>
	);
};

selectAttr["LeSourceButton"] = LeSourceButton;
selectAttr["SelectImportPreview"] = SelectImportPreview;
selectAttr["SelectOptionPreview"] = SelectOptionPreview;

export { selectAttr };
