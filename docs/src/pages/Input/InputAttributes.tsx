import { LeHighlighter, LeSourceButton } from "@/components";
import { useState } from "react";
import { Input, Topography } from "../../../../src";
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
			code={`<Topography type="body-1">
	Inspect element to see the id and name attributes
</Topography>
<Input fieldKey="key" placeholder="Key" />`}
			language="tsx"
		/>
	</>
);

const InputVariantPreview = () => (
	<>
		<div className="le-preview le-input-group">
			<Input variant="filled" placeholder="Placeholder" />
			<Input variant="outlined" placeholder="Placeholder" />
		</div>
		<LeHighlighter
			language="tsx"
			code={`<Input variant="filled" placeholder="Placeholder" />
<Input variant="outlined" placeholder="Placeholder" />`}
		/>
	</>
);

const InputSizePreview = () => (
	<>
		<div className="le-preview le-input-group">
			<Input variant="outlined" placeholder="Small" size="small" />
			<Input variant="outlined" placeholder="Medium" size="medium" />
			<Input variant="outlined" placeholder="Large" size="large" />
		</div>
		<LeHighlighter
			language="tsx"
			code={`<Input variant="filled" placeholder="Small" size="small" />
<Input variant="outlined" placeholder="Medium" size="medium" />
<Input variant="outlined" placeholder="Large" size="large" />`}
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
			code={`<Input placeholder="Focus" focusStyle />
<Input placeholder="Focus" focusStyle={false} />`}
			language="tsx"
		/>
	</>
);

const InputActionPreview = () => {
	const [value, setValue] = useState("");

	return (
		<>
			<div className="le-preview le-input-group">
				<Topography type="body-2">
					type to see the value here: {value}
				</Topography>
				<Input
					placeholder="Action"
					onChange={(e) => {
						setValue(e.target.value);
					}}
				/>
			</div>
			<LeHighlighter
				language="tsx"
				code={`const Component = () = {
	const [value, setValue] = useState("");

	return (
		<>
			<Topography type="body-2">type to see the value here: {value}</Topography>
			<Input
				key="preview"
				placeholder="Action"
				onChange={(e) => {
					setValue(e.target.value);
				}}
			/>
		</>
	)
}`}
			/>
		</>
	);
};

const InputStatePreview = () => {
	return (
		<>
			<div className="le-preview">
				<Input state={{ disabled: true }} placeholder="Disabled" />
			</div>
			<LeHighlighter
				code={`<Input state={{ disabled: true }} placeholder="Disabled" />`}
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
				code={`<Input
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
