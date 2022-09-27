import { LeHighlighter, LeSourceButton } from "@/components";
import { useState } from "react";
import {
	Button,
	Input,
	InputSizes,
	InputVariant,
	Topography,
} from "../../../../src";
import { attributes as inputAttr } from "./input.md";

const InputImportPreview = () => (
	<LeHighlighter
		code={`import { Input, InputProps } from 'leux';`}
		language="tsx"
	/>
);

const InputKeyPreview = () => (
	<>
		<div className="le-preview le-input-group">
			<Topography type="body-1">
				Inspect element to see the id and name attributes
			</Topography>
			<Input fieldKey="key" placeholder="Key" />
		</div>
		<LeHighlighter
			code={`const Component = () => (
	<>
		<Topography type="body-1">
			Inspect element to see the id and name attributes
		</Topography>
		<Input fieldKey="key" placeholder="Key" />
	</>
);`}
			language="tsx"
		/>
	</>
);

const InputVariantPreview = () => (
	<>
		<div className="le-preview le-input-group">
			{(["filled", "outlined"] as InputVariant[]).map((variant, index) => (
				<Input key={index} variant={variant} placeholder="Placeholder" />
			))}
		</div>
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
		<div className="le-preview le-input-group">
			{(["small", "medium", "large"] as InputSizes[]).map((size, index) => (
				<Input key={index} variant="outlined" placeholder={size} size={size} />
			))}
		</div>
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

const InputFocusPreview = () => (
	<>
		<div className="le-preview le-input-group">
			<Input placeholder="Focus" focusStyle />
			<Input placeholder="Focus" focusStyle={false} />
		</div>
		<LeHighlighter
			code={`const Component = () => (
	<>
		<Input placeholder="Focus" focusStyle />
		<Input placeholder="Focus" focusStyle={false} />
	</>
);`}
			language="tsx"
		/>
	</>
);

const InputActionPreview = () => {
	const [value, setValue] = useState("");
	const handleOnChange = (value: string) => setValue(value);

	return (
		<>
			<div className="le-preview le-input-group">
				<Topography type="body-2">
					type to see the value here: {value}
				</Topography>
				<Input
					placeholder="Action"
					onChange={handleOnChange}
				/>
			</div>
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
	const handleOnChange = (value: string) => setValue(value)

	return (
		<>
			<div className="le-preview le-input-group">
				<Button
					variant={disabled ? "danger" : "primary"}
					onClick={handleOnClick}
				>
					{disabled ? "off" : "on"}
				</Button>
				<Topography type="body-1">Value: {value}</Topography>
				<Input
					state={{ disabled }}
					placeholder="Disabled"
					onChange={handleOnChange}
				/>
			</div>
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
			<div className="le-preview">
				<Input
					placeholder="Custom input"
					customStyles={{
						color: "red",
						borderColor: "green",
						backgroundColor: "blue",
					}}
					customClass="le-text--h6"
				/>
			</div>
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
inputAttr["InputFocusPreview"] = InputFocusPreview;
inputAttr["InputStatePreview"] = InputStatePreview;
inputAttr["InputCustomPreview"] = InputCustomPreview;
inputAttr["InputKeyPreview"] = InputKeyPreview;
inputAttr["LeHighlighter"] = LeHighlighter;

export { inputAttr };
