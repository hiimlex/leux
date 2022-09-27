import { LeHighlighter, LeSourceButton } from "@/components";
import { useState } from "react";
import { Select, Topography } from "../../../../src";
import { attributes as selectAttr } from "./select.md";

const SelectImportPreview = () => (
	<LeHighlighter
		code={`import { Select, SelectProps, } from "leux"`}
		language="tsx"
	/>
);

const SelectOptionPreview = () => {
	const [value, setValue] = useState<string[]>([]);
	const handleOnChange = (values: string[]) => setValue(values);

	return (
		<>
			<div className="le-preview le-input-group">
				{value.join(", ")}
				<Select
					placeholder="Normal"
					multiple
					options={[
						{ label: "A", value: "a", state: { selected: false } },
						{ label: "B", value: "b", state: { selected: false } },
					]}
					onChange={handleOnChange}
				></Select>
			</div>
			<LeHighlighter
				code={`const Component = () => {
	return (
		<>
		</>
	)
};`}
				language="tsx"
			/>
		</>
	);
};

const SelectKeyPreview = () => {
	return (
		<>
			<div className="le-preview"></div>
			<LeHighlighter
				code={`const Component = () => {
	return (
	)
};`}
				language="tsx"
			/>
		</>
	);
};

const SelectVariantPreview = () => {
	return (
		<>
			<div className="le-preview le-input-group"></div>
			<LeHighlighter
				code={`const Component = () => {
	return (
		<>
		</>
	);
};`}
				language="tsx"
			/>
		</>
	);
};

const SelectSizePreview = () => {
	return (
		<>
			<div className="le-preview le-input-group"></div>
			<LeHighlighter
				code={`const Component = () => {
	return (
		<>
		</>
	)
}`}
				language="tsx"
			/>
		</>
	);
};

const SelectFocusStylePreview = () => {
	return (
		<>
			<div className="le-preview le-input-group"></div>
			<LeHighlighter
				code={`const Component = () => {
	return (

	)
}`}
				language="tsx"
			/>
		</>
	);
};

const SelectActionPreview = () => {
	const [value, setValue] = useState("");

	return (
		<>
			<div className="le-preview le-input-group">
				<Topography type="body-1">Select value: {value}</Topography>
			</div>
		</>
	);
};

const SelectMultiplePreview = () => {
	const [value, setValue] = useState("");

	return (
		<>
			<div className="le-preview le-input-group">
				<Topography type="body-1">Selected values: {value}</Topography>
			</div>
		</>
	);
};

const SelectCustomPreview = () => {
	return (
		<>
			<div className="le-preview le-input-group"></div>
		</>
	);
};

selectAttr["LeSourceButton"] = LeSourceButton;
selectAttr["SelectImportPreview"] = SelectImportPreview;
selectAttr["SelectOptionPreview"] = SelectOptionPreview;
selectAttr["SelectKeyPreview"] = SelectKeyPreview;
selectAttr["SelectVariantPreview"] = SelectVariantPreview;
selectAttr["SelectSizePreview"] = SelectSizePreview;
selectAttr["SelectFocusStylePreview"] = SelectFocusStylePreview;
selectAttr["SelectActionPreview"] = SelectActionPreview;
selectAttr["SelectMultiplePreview"] = SelectMultiplePreview;
selectAttr["SelectCustomPreview"] = SelectCustomPreview;
selectAttr["LeHighlighter"] = LeHighlighter;

export { selectAttr };
