import { LeHighlighter, LePreview, LeSourceButton } from "@/components";
import { useState } from "react";
import { Button, Select, SelectState, Topography } from "../../../../src";
import { attributes as selectAttr } from "./select.md";

const SelectImportPreview = () => (
	<LeHighlighter code={`import { Select, SelectProps, } from "leux"`} language="tsx" />
);

const SelectOptionPreview = () => {
	return (
		<>
			<LePreview direction="column">
				<Select
					placeholder="Options"
					options={[
						{ label: "A", value: "a", state: { selected: false } },
						{ label: "B", value: "b", state: { selected: false } },
					]}
				></Select>
			</LePreview>
			<LeHighlighter
				code={`const Component = () => {
	return (
		<>
			<Select
				placeholder="Normal"
				options={[
					{ label: "A", value: "a", state: { selected: false } },
					{ label: "B", value: "b", state: { selected: false } },
				]}
			></Select>
		</>
	);
};`}
				language="tsx"
			/>
		</>
	);
};

const SelectKeyPreview = () => {
	return (
		<>
			<LePreview>
				<Select
					fieldKey="key"
					placeholder="with key"
					options={[{ label: "Key 1", state: { selected: false }, value: "key1" }]}
				/>
			</LePreview>
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
	);
};`}
				language="tsx"
			/>
		</>
	);
};

const SelectVariantPreview = () => {
	return (
		<>
			<LePreview direction="column">
				<Select
					options={[{ label: "Filled 1", value: "filled1", state: { selected: false } }]}
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
			</LePreview>
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
			<LePreview direction="column">
				<Select options={[{ label: "Small", value: "small" }]} size="small" placeholder="small" />
				<Select
					options={[{ label: "Medium", value: "medium" }]}
					size="medium"
					placeholder="medium"
				/>
				<Select options={[{ label: "Large", value: "large" }]} size="large" placeholder="large" />
			</LePreview>
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
	);
};`}
				language="tsx"
			/>
		</>
	);
};

const SelectActionPreview = () => {
	const [value, setValue] = useState<string[]>([]);
	const handleValueChange = (value: string[]) => setValue(value);

	return (
		<>
			<LePreview direction="column">
				<Topography type="body-1">Select one option: {value}</Topography>
				<Select
					options={[
						{ label: "Option A", value: "a" },
						{ label: "Option B", value: "b" },
					]}
					placeholder="Options"
					onChange={handleValueChange}
				/>
			</LePreview>
			<LeHighlighter
				code={`const Component = () => {
	const [value, setValue] = useState<string[]>([]);
	const handleValueChange = (value: string[]) => setValue(value);

	return (
		<>
			<Topography type="body-1">Select one option: {value}</Topography>
			<Select
				options={[
					{ label: "Option A", value: "optionA" },
					{ label: "Option B", value: "optionB" },
				]}
				placeholder="Options"
				onChange={handleValueChange}
			/>
		</>
	);
};`}
				language="tsx"
			/>
		</>
	);
};

const SelectMultiplePreview = () => {
	const [value, setValue] = useState<number[]>([]);
	const handleValueChange = (value: string[]) => setValue(value.map((el) => Number(el)));

	return (
		<>
			<LePreview direction="column">
				<Topography type="body-2">
					SUM: {value.length > 0 ? value.reduce((acc, curr) => acc + curr) : 0}
				</Topography>
				<Select
					width="280px"
					options={[
						{ label: "1", value: "1" },
						{ label: "2", value: "2" },
						{ label: "3", value: "3" },
						{ label: "4", value: "4" },
					]}
					placeholder="Select multiple values to SUM"
					multiple
					onChange={handleValueChange}
					valueSeparator=" + "
					clickOptionHide={false}
				/>
			</LePreview>
			<LeHighlighter
				code={`const Component = () => {
	const [value, setValue] = useState<number[]>([]);
	const handleValueChange = (value: string[]) => setValue(value.map(el => Number(el)));

	return (
		<>
			<Topography type="body-2">
				SUM:{" "}
				{value.length > 0 ? value.reduce((acc, curr) => acc + curr) : 0}
			</Topography>
			<Select
				width="280px"
				options={[
					{ label: "1", value: "1" },
					{ label: "2", value: "2" },
					{ label: "3", value: "3" },
					{ label: "4", value: "4" },
				]}
				placeholder="Select multiple values to SUM"
				multiple
				onChange={handleValueChange}
				valueSeparator=" + "
				clickOptionHide={false}
			/>
		</>
	);
};`}
				language="tsx"
			/>
		</>
	);
};

const SelectHidePreview = () => {
	const [outside, setOutside] = useState(true);
	const [select, setSelect] = useState(true);

	const handleValueChange = (value: string[]) => {
		if (value.length === 0 || value[0] === "both") {
			setOutside(true);
			setSelect(true);
		} else {
			setOutside(value[0] === "outside");

			setSelect(value[0] === "select");
		}
	};

	return (
		<>
			<LePreview direction="column">
				<Select
					options={[
						{ label: "both", value: "both" },
						{ label: "only click outside", value: "outside" },
						{ label: "only when select", value: "select" },
					]}
					placeholder="Options"
					onChange={handleValueChange}
					clickOutsideHide={outside}
					clickOptionHide={select}
				/>
			</LePreview>
			<LeHighlighter
				code={`const Component = () => {
	const [outside, setOutside] = useState(true);
	const [select, setSelect] = useState(true);

	const handleValueChange = (value: string[]) => {
		if (value.length === 0 || value[0] === "both") {
			setOutside(true);
			setSelect(true);
		} else {
			setOutside(value[0] === "outside");

			setSelect(value[0] === "select");
		}
	};

	return (
		<Select
			options={[
				{ label: "both", value: "both" },
				{ label: "only click outside", value: "outside" },
				{ label: "only when select", value: "select" },
			]}
			placeholder="Options"
			onChange={handleValueChange}
			clickOutsideHide={outside}
			clickSelectHide={select}
		/>
	)
}`}
				language="tsx"
			/>
		</>
	);
};

const SelectStatePreview = () => {
	const [selectState, setSelectState] = useState<SelectState>({
		disabled: false,
	});
	const handleFieldState = () => {
		setSelectState((curr) => ({ ...curr, disabled: !curr.disabled }));
	};

	return (
		<>
			<LePreview direction="column">
				<Button onClick={handleFieldState}>{selectState.disabled ? "off" : "on"}</Button>
				<Select
					options={[{ label: "Option 1", value: "option1" }]}
					placeholder="Enable the button to select a option"
					state={selectState}
				/>
			</LePreview>
			<LeHighlighter
				code={`const Component = () => {
	const [selectState, setSelectState] = useState<SelectState>({
		disabled: false,
	});
	const handleFieldState = () => {
		setSelectState((curr) => ({ ...curr, disabled: !curr.disabled }));
	};

	return (
		<>
			<Button onClick={handleFieldState}>
				{selectState.disabled ? "off" : "on"}
			</Button>
			<Select
				options={[{ label: "Option 1", value: "option1" }]}
				placeholder="Enable the button to select a option"
				state={selectState}
			/>
		</>
	);
};`}
				language="tsx"
			/>
		</>
	);
};

const SelectCustomPreview = () => {
	return (
		<>
			<LePreview direction="column">
				<Select
					options={[{ label: "Option 1", value: "option1" }]}
					placeholder="Custom Select"
					optionCustomClass="custom-option"
					optionCustomStyles={{ border: "1px solid green" }}
					dropdownCustomClass="custom-dropdown"
					dropdownCustomStyles={{ border: "solid 1px red" }}
					selectCustomClass="custom-select"
					selectCustomStyles={{ border: "solid 1px yellow" }}
				/>
			</LePreview>
			<LeHighlighter
				code={`const Component = () => {
	return (
		<Select
			options={[{ label: "Option 1", value: "option1" }]}
			placeholder="Custom Select"
			optionCustomClass="custom-option"
			optionCustomStyles={{ border: "1px solid green" }}
			dropdownCustomClass="custom-dropdown"
			dropdownCustomStyles={{ border: "solid 1px red" }}
			selectCustomClass="custom-select"
			selectCustomStyles={{ border: "solid 1px yellow" }}
		/>
	);
};`}
				language="tsx"
			/>
		</>
	);
};

selectAttr["LeSourceButton"] = LeSourceButton;
selectAttr["SelectImportPreview"] = SelectImportPreview;
selectAttr["SelectOptionPreview"] = SelectOptionPreview;
selectAttr["SelectKeyPreview"] = SelectKeyPreview;
selectAttr["SelectVariantPreview"] = SelectVariantPreview;
selectAttr["SelectSizePreview"] = SelectSizePreview;
selectAttr["SelectActionPreview"] = SelectActionPreview;
selectAttr["SelectMultiplePreview"] = SelectMultiplePreview;
selectAttr["SelectCustomPreview"] = SelectCustomPreview;
selectAttr["SelectHidePreview"] = SelectHidePreview;
selectAttr["SelectStatePreview"] = SelectStatePreview;
selectAttr["LeHighlighter"] = LeHighlighter;

export { selectAttr };
