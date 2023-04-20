import { LeHighlighter, LePreview, LeSourceButton } from "@/components";
import { ChangeEvent, useState } from "react";
import { Box, Button, Select, Topography } from "../../../../src";
import {
	SelectOption,
	SelectSizes,
	SelectState,
	SelectVariants,
} from "../../../../src/components/Select/Select.model";
import { attributes as selectAttr } from "./select.md";

const SelectImportPreview = () => (
	<LeHighlighter code={`import { Select, SelectProps } from "leux";`} language="tsx" />
);

const SelectOptionsPreview = () => {
	const options: SelectOption[] = [
		{
			label: "Option 1",
			value: "option1",
		},
	];

	return (
		<>
			<LePreview direction="column">
				<Box flex alignItems="center" justifyContent="center" customStyles={{ marginBottom: 12 }}>
					<Topography variant="body-1" customStyles={{ marginRight: 12 }}>
						With options prop
					</Topography>
					<Select fieldKey="fieldKey" placeholder="Select one option" options={options} />
				</Box>
				<Box flex alignItems="center" justifyContent="center">
					<Topography variant="body-1" customStyles={{ marginRight: 12 }}>
						With children
					</Topography>
					<Select fieldKey="fieldKey" defaultValue="">
						<option value="">Select one option</option>
						<option value="option1">Option 1</option>
					</Select>
				</Box>
			</LePreview>
			<LeHighlighter
				code={`const Component = () => (
	<>
		<div style={{ display: "flex", alignItems: "center", marginBottom: 12 }}>
			<Topography type="body-1" customStyles={{ marginRight: 12 }}>
				With options prop
			</Topography>
			<Select fieldKey="fieldKey" placeholder="Select one option" options={options} />
		</div>
		<div style={{ display: "flex", alignItems: "center" }}>
			<Topography type="body-1" customStyles={{ marginRight: 12 }}>
				With children
			</Topography>
			<Select fieldKey="fieldKey">
				<option value="" disabled>
					Select one option
				</option>
				<option value="option1">Option 1</option>
			</Select>
		</div>
	</>
)`}
				language="tsx"
			/>
		</>
	);
};

const SelectSizePreview = () => {
	return (
		<>
			<LePreview>
				<Select
					options={[{ label: "Small", value: "small" }]}
					size="small"
					defaultValue="small"
					customStyles={{ marginRight: 12 }}
				></Select>
				<Select
					options={[{ label: "Medium", value: "medium" }]}
					size="medium"
					defaultValue="medium"
					customStyles={{ marginRight: 12 }}
				></Select>
				<Select
					options={[{ label: "Large", value: "large" }]}
					size="large"
					defaultValue="large"
				></Select>
			</LePreview>
			<LeHighlighter
				code={`const Component = () => {
	return (
		<Box flex alignItems="center" flexDirection="column">
			<Select
				options={[{ label: "Small", value: "small" }]}
				size="small"
				defaultValue="small"
				customStyles={{ marginRight: 12 }}
			></Select>
			<Select
				options={[{ label: "Medium", value: "medium" }]}
				size="medium"
				defaultValue="medium"
				customStyles={{ marginRight: 12 }}
			></Select>
			<Select
				options={[
					{ label: "Large", value: "large" },
				]}
				size="large"
				defaultValue="large"
			></Select>
		</Box>
	)
}`}
				language="tsx"
			/>
		</>
	);
};

const SelectVariantPreview = () => {
	return (
		<>
			<LePreview>
				<Select
					options={[{ label: "Outlined", value: "outlined" }]}
					variant="outlined"
					defaultValue="outlined"
					customStyles={{ marginRight: 12 }}
				></Select>
				<Select
					options={[{ label: "Filled", value: "filled" }]}
					variant="filled"
					defaultValue="filled"
				></Select>
			</LePreview>
			<LeHighlighter
				code={`const Component = () => {
	return (
		<Box flex flexDirection="column" alignItems="center">
			<Select
				options={[{ label: "Outlined", value: "outlined" }]}
				variant="outlined"
				defaultValue="outlined"
				customStyles={{ marginRight: 12 }}
			></Select>
			<Select
				options={[{ label: "Filled", value: "filled" }]}
				variant="filled"
				defaultValue="filled"
			></Select>
		</Box>
	)
}`}
				language="tsx"
			/>
		</>
	);
};

const SelectActionPreview = () => {
	const [value, setValue] = useState<string>("");

	const handleOnChange = (event: ChangeEvent<HTMLSelectElement>) => {
		const { value } = event.target;

		setValue(value);
	};

	return (
		<>
			<LePreview direction="column">
				<Topography>Value: {value}</Topography>
				<Select
					options={[
						{ label: "Option 1", value: "option1" },
						{ label: "Option 2", value: "option2" },
					]}
					placeholder="Select one option"
					onChange={handleOnChange}
				/>
			</LePreview>
			<LeHighlighter
				code={`const Component = () => {
	const [value, setValue] = useState<string>("");

	const handleOnChange = (event: ChangeEvent<HTMLSelectElement>) => {
		const { value } = event.target;

		setValue(value);
	};

	return (
		<Box flex flexDirection="column">
			<Topography>Value: {value}</Topography>
			<Select
			options={[
				{ label: "Option 1", value: "option1" },
				{ label: "Option 2", value: "option2" },
			]}
			placeholder="Select one option"
			onChange={handleOnChange}
			/>
		</Box>
	)
};`}
				language="tsx"
			/>
		</>
	);
};

const SelectStatePreview = () => {
	const [state, setState] = useState<SelectState>({});

	const disableSelect = () => {
		setState((curr) => ({ ...curr, disabled: !curr.disabled }));
	};

	return (
		<>
			<LePreview direction="column">
				<Button
					onClick={disableSelect}
					customStyles={{ marginBottom: 12 }}
					theme={!state.disabled ? "primary" : "danger"}
				>
					{!state.disabled ? "on" : "off"}
				</Button>
				<Select
					options={[
						{ label: "Option 1", value: "option1" },
						{
							label: "Disabled option",
							value: "disabledOption",
							disabled: true,
						},
					]}
					state={state}
					placeholder="Select one option"
					showPlaceholderAsOption
				/>
			</LePreview>
			<LeHighlighter
				code={`const Component = () => {
	const [state, setState] = useState<SelectState>({});

	const disableSelect = () => {
		setState((curr) => ({ ...curr, disabled: !curr.disabled }));
	};

	return (
		<Box flex flexDirection="column">
			<Button
				onClick={disableSelect}
				customStyles={{ marginBottom: 12 }}
				theme={!state.disabled ? "primary" : "danger"}
			>
				{!state.disabled ? "on" : "off"}
			</Button>
			<Select
				options={[{ label: "Option 1", value: "option1" }]}
				state={state}
				placeholder="Select one option"
				showPlaceholderAsOption
			/>
		</Box>
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
			<LePreview>
				<Select
					options={[{ label: "Custom", value: "custom" }]}
					customClass="custom-select"
					customStyles={{ background: "red", color: "white", border: "2px solid blue" }}
				/>
			</LePreview>
			<LeHighlighter
				language="tsx"
				code={`// index.tsx
const Component = () => {
	return (
		<>
			<Select
				options={[{ label: "Custom", value: "custom" }]}
				customClass="custom-select"
				customStyles={{ background: "red", color: "white", border: "2px solid blue" }}
			/>
		</>
	);
};`}
			/>
			<LeHighlighter
				language="scss"
				code={`// styles.scss
.custom-select {
	&:hover,
	&:focus,
	&:active {
		outline: none !important;
		background: black !important;
	}
}`}
			/>
		</>
	);
};

selectAttr["LeSourceButton"] = LeSourceButton;
selectAttr["LeHighlighter"] = LeHighlighter;
selectAttr["SelectImportPreview"] = SelectImportPreview;
selectAttr["SelectOptionsPreview"] = SelectOptionsPreview;
selectAttr["SelectSizePreview"] = SelectSizePreview;
selectAttr["SelectVariantPreview"] = SelectVariantPreview;
selectAttr["SelectActionPreview"] = SelectActionPreview;
selectAttr["SelectStatePreview"] = SelectStatePreview;
selectAttr["SelectCustomPreview"] = SelectCustomPreview;

export { selectAttr };
