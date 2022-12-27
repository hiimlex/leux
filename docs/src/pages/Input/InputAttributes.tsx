import { LeHighlighter, LePreview, LeSourceButton } from "@/components";
import { ChangeEvent, useState } from "react";
import { Button, Input, InputSizes, InputVariant, Topography } from "../../../../src";
import { attributes as inputAttr } from "./input.md";

const InputImportPreview = () => (
	<LeHighlighter code={`import { Input, InputProps } from 'leux';`} language="tsx" />
);

const InputKeyPreview = () => (
	<>
		<LePreview direction="column">
			<Input fieldKey="key" placeholder="Key" />
		</LePreview>
		<LeHighlighter
			code={`const Component = () => (
	<Input fieldKey="key" placeholder="Key" />
);`}
			language="tsx"
		/>
	</>
);

const InputVariantPreview = () => (
	<>
		<LePreview direction="column">
			{(["filled", "outlined"] as InputVariant[]).map((variant, index) => (
				<Input key={index} variant={variant} placeholder="Placeholder" />
			))}
		</LePreview>
		<LeHighlighter
			language="tsx"
			code={`const Component = () => (
	{(["filled", "outlined"] as InputVariant[]).map((variant, index) => (
		<Input key={index} variant={variant} placeholder="Placeholder" />
	))}
);`}
		/>
	</>
);

const InputSizePreview = () => (
	<>
		<LePreview direction="column">
			{(["small", "medium", "large"] as InputSizes[]).map((size, index) => (
				<Input key={index} variant="outlined" placeholder={size} size={size} />
			))}
		</LePreview>
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
	</>
);

const InputActionPreview = () => {
	const [value, setValue] = useState("");
	const handleOnChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => setValue(value);

	return (
		<>
			<LePreview direction="column">
				<Topography type="body-2">type to see the value here: {value}</Topography>
				<Input placeholder="Action" onChange={handleOnChange} />
			</LePreview>
			<LeHighlighter
				language="tsx"
				code={`const Component = () = {
	const [value, setValue] = useState("");
	const handleOnChange = (value: string) => setValue(value);

	return (
		<>
			<Topography type="body-2">type to see the value here: {value}</Topography>
			<Input
				key="preview"
				placeholder="Action"
				onChange={handleOnChange}
			/>
		</>
	)
}`}
			/>
		</>
	);
};

const InputStatePreview = () => {
	const [disabled, setDisabled] = useState(true);
	const [value, setValue] = useState("");
	const handleOnClick = () => setDisabled(!disabled);
	const handleOnChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => setValue(value);

	return (
		<>
			<LePreview direction="column">
				<Button theme={disabled ? "danger" : "primary"} onClick={handleOnClick}>
					{disabled ? "off" : "on"}
				</Button>
				<Topography type="body-1">Value: {value}</Topography>
				<Input state={{ disabled }} placeholder="Disabled" onChange={handleOnChange} />
			</LePreview>
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
			<Topography type="body-1">Value: {}</Topography>
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
		</>
	);
};

const InputCustomPreview = () => {
	return (
		<>
			<LePreview>
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
		</>
	);
};

inputAttr["InputImportPreview"] = InputImportPreview;
inputAttr["LeSourceButton"] = LeSourceButton;
inputAttr["InputVariantPreview"] = InputVariantPreview;
inputAttr["InputSizePreview"] = InputSizePreview;
inputAttr["InputActionPreview"] = InputActionPreview;
inputAttr["InputStatePreview"] = InputStatePreview;
inputAttr["InputCustomPreview"] = InputCustomPreview;
inputAttr["InputKeyPreview"] = InputKeyPreview;
inputAttr["LeHighlighter"] = LeHighlighter;

export { inputAttr };
