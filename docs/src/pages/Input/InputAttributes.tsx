import { attributes as inputAttr } from "./input.md";
import Code from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { useState } from "react";
import { Input, Topography } from "../../../../src";
import { LeSourceButton } from "@/components";

const InputImportPreview = () => (
	<Code
		children={`import { Input, InputProps } from 'leux';`}
		style={dracula}
		language="javascript"
	/>
);

const InputVariantPreview = () => (
	<>
		<div className="le-preview le-input-group">
			<Input variant="filled" placeholder="Placeholder" />
			<Input variant="outlined" placeholder="Placeholder" />
		</div>
		<Code
			language="html"
			style={dracula}
			children={`<Input variant="filled" placeholder="Placeholder" />
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
		<Code
			language="html"
			style={dracula}
			children={`<Input variant="filled" placeholder="Small" size="small" />
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
		<Code
			children={`<Input placeholder="Focus" focusStyle />
<Input placeholder="Focus" focusStyle={false} />`}
			style={dracula}
			language="html"
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
			<Code
				language="html"
				style={dracula}
				children={`<Topography type="body-2">type to see the value here: {value}</Topography>
<Input
	key="preview"
	placeholder="Action"
	onChange={(e) => {
		setValue(e.target.value);
	}}
/>`}
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
			<Code
				children={`<Input state={{ disabled: true }} placeholder="Disabled" />`}
				language="html"
				style={dracula}
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

export { inputAttr };
