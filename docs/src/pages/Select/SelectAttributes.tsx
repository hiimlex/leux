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
	const [value, setValue] = useState([""]);
	const handleValueChange = (value: string[]) => setValue(value);

	return (
		<>
			<div className="le-preview le-input-group">
				<Topography type="body-1">Select with options: {value[0]}</Topography>
				<Select
					placeholder="Normal"
					options={[
						{ label: "A", value: "a", state: { selected: false } },
						{ label: "B", value: "b", state: { selected: false } },
					]}
					onChange={handleValueChange}
				></Select>
			</div>
			<LeHighlighter
				code={`const Component = () => {
	return (
		<>
			<Topography type="body-1">
				Select with options: {value[0]}
			</Topography>
			<Select
				placeholder="Normal"
				options={[
					{ label: "A", value: "a", state: { selected: false } },
					{ label: "B", value: "b", state: { selected: false } },
				]}
				onChange={handleValueChange}
			></Select>
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
			<div className="le-preview">
				<Select
					fieldKey="key"
					placeholder="with key"
					options={[
						{ label: "Key 1", state: { selected: false }, value: "key1" },
					]}
				/>
			</div>
			<LeHighlighter
				code={`const Component = () => {
	return (
		<>
			<Select
				fieldKey="key"
				placeholder="with key"
				options={[
					{ label: "Key 1", state: { selected: false }, value: "key1" },
				]}
			/>
		</>
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
			<div className="le-preview le-input-group">
				<Select
					options={[
						{ label: "Filled 1", value: "filled1", state: { selected: false } },
					]}
					placeholder="Filled"
					variant="filled"
				/>
				<Select
					options={[
						{
							label: "Outlined 1",
							value: "outlined1",
							state: { selected: false },
						},
					]}
					placeholder="Outlined"
					variant="outlined"
				/>
			</div>
			<LeHighlighter
				code={`const Component = () => {
	return (
		<>
			<Select
				options={[
					{ label: "Filled 1", value: "filled1", state: { selected: false } },
				]}
				placeholder="Filled"
				variant="filled"
			/>
			<Select
				options={[
					{
						label: "Outlined 1",
						value: "outlined1",
						state: { selected: false },
					},
				]}
				placeholder="Outlined"
				variant="outlined"
			/>
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
			<div className="le-preview le-input-group">
				<Select
					options={[{ label: "Small", value: "small" }]}
					size="small"
					placeholder="small"
				/>
				<Select
					options={[{ label: "Medium", value: "medium" }]}
					size="medium"
					placeholder="medium"
				/>
				<Select
					options={[{ label: "Large", value: "large" }]}
					size="large"
					placeholder="large"
				/>
			</div>
			<LeHighlighter
				code={`const Component = () => {
	return (
		<>
			<Select
				options={[{ label: "Small", value: "small" }]}
				size="small"
				placeholder="small"
			/>
			<Select
				options={[{ label: "Medium", value: "medium" }]}
				size="medium"
				placeholder="medium"
			/>
			<Select
				options={[{ label: "Large", value: "large" }]}
				size="large"
				placeholder="large"
			/>
		</>
	)
}`}
				language="tsx"
			/>
		</>
	);
};

const SelectFocusStylePreview = () => {
	const [value, setValue] = useState<string[]>([]);
	const handleValueChange = (value: string[]) => setValue(value);

	return (
		<>
			<div className="le-preview le-input-group">
				<Select
					options={[
						{ label: "Yes", value: "yes" },
						{ label: "No", value: "no" },
					]}
					placeholder="apply focus style ?"
					onChange={handleValueChange}
					focusStyle={value[0] === "yes"}
				/>
			</div>
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
