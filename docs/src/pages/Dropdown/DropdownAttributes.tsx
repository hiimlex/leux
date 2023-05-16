import { LeHighlighter, LePreview, LeSourceButton } from "@/components";
import { useState } from "react";
import {
	Box,
	Button,
	Dropdown,
	DropdownItem,
	DropdownSeparator,
	Topography,
} from "../../../../src";
import { attributes as dropdownAttr } from "./dropdown.md";
import { DropdownVariant } from "../../../../src/components/Dropdown/Dropdown.model";

const DropdownImportPreview = () => (
	<LeHighlighter language="tsx" code={`import { Dropdown, DropdownProps } from "leux";`} />
);

const DropdownAnchorPreview = () => {
	const [showCode, setShowCode] = useState<boolean | undefined>(false);

	return (
		<>
			<LePreview showCode={showCode} setShowCode={setShowCode}>
				<Dropdown anchor={<Button>anchor</Button>}>
					<DropdownItem>Test large content to see where's the text direction goes</DropdownItem>
				</Dropdown>
			</LePreview>
			{showCode && (
				<LeHighlighter
					language="tsx"
					code={`const Component = () => {
	return (
		<Dropdown anchor={<Button>anchor</Button>}>
			<DropdownItem>item 1</DropdownItem>
		</Dropdown>
	);
};`}
				/>
			)}
		</>
	);
};

const DropdownVariantPreview = () => {
	const [showCode, setShowCode] = useState<boolean | undefined>(false);

	return (
		<>
			<LePreview showCode={showCode} setShowCode={setShowCode} direction="row">
				<Dropdown
					variant="filled"
					anchor={<Button variant="filled">Toggle</Button>}
					customWrapperStyles={{ marginRight: 12 }}
				>
					<DropdownItem>item 1</DropdownItem>
					<DropdownItem>item 2</DropdownItem>
				</Dropdown>

				<Dropdown variant="outlined" anchor={<Button variant="outlined">Toggle</Button>}>
					<DropdownItem>item 1</DropdownItem>
					<DropdownItem>item 2</DropdownItem>
				</Dropdown>
			</LePreview>
			{showCode && (
				<LeHighlighter
					language="tsx"
					code={`const Component = () => {
	return (
		<>
			<Dropdown
				variant="filled"
				anchor={<Button variant="filled">Toggle</Button>}
				customWrapperStyles={{ marginRight: 12 }}
			>
				<DropdownItem>item 1</DropdownItem>
				<DropdownItem>item 2</DropdownItem>
			</Dropdown>

			<Dropdown variant="outlined" anchor={<Button variant="outlined">Toggle</Button>}>
				<DropdownItem>item 1</DropdownItem>
				<DropdownItem>item 2</DropdownItem>
			</Dropdown>
		</>
	);
};`}
				/>
			)}
		</>
	);
};

const DropdownSizePreview = () => {
	const [showCode, setShowCode] = useState<boolean | undefined>(false);

	return (
		<>
			<LePreview showCode={showCode} setShowCode={setShowCode} direction="row">
				<Dropdown
					size="small"
					anchor={<Button size="small">Toggle</Button>}
					customWrapperStyles={{ marginRight: 12 }}
				>
					<DropdownItem>small</DropdownItem>
				</Dropdown>
				<Dropdown
					size="medium"
					anchor={<Button size="medium">Toggle</Button>}
					customWrapperStyles={{ marginRight: 12 }}
				>
					<DropdownItem>medium</DropdownItem>
				</Dropdown>
				<Dropdown size="large" anchor={<Button size="large">Toggle</Button>}>
					<DropdownItem>large</DropdownItem>
				</Dropdown>
			</LePreview>
			{showCode && (
				<LeHighlighter
					language="tsx"
					code={`const Component = () => {
return (
	<>
		<Dropdown
			size="small"
			anchor={<Button size="small">Toggle</Button>}
			customWrapperStyles={{ marginRight: 12 }}
		>
			<DropdownItem>small</DropdownItem>
		</Dropdown>
		<Dropdown
			size="medium"
			anchor={<Button size="medium">Toggle</Button>}
			customWrapperStyles={{ marginRight: 12 }}
		>
			<DropdownItem>medium</DropdownItem>
		</Dropdown>
		<Dropdown size="large" anchor={<Button size="large">Toggle</Button>}>
			<DropdownItem>large</DropdownItem>
		</Dropdown>
	</>
);
};`}
				/>
			)}
		</>
	);
};

const DropdownPositionPreview = () => {
	const [showCode, setShowCode] = useState<boolean | undefined>(false);

	return (
		<>
			<LePreview showCode={showCode} setShowCode={setShowCode} direction="column">
				<Box
					flex
					alignItems="center"
					justifyContent="flex-start"
					customStyles={{ marginBottom: 12 }}
				>
					<Dropdown
						position="bottomLeft"
						anchor={<Button>Bottom left</Button>}
						customWrapperStyles={{ marginRight: 12 }}
					>
						<DropdownItem>the text direction goes</DropdownItem>
					</Dropdown>
					<Dropdown position="bottomRight" anchor={<Button>Bottom right</Button>}>
						<DropdownItem>the text direction goes</DropdownItem>
					</Dropdown>
				</Box>
				<Box flex justifyContent="flex-start" alignItems="center">
					<Dropdown
						position="topLeft"
						anchor={<Button>Top left</Button>}
						customWrapperStyles={{ marginRight: 12 }}
					>
						<DropdownItem>the text direction goes</DropdownItem>
					</Dropdown>
					<Dropdown
						position="topRight"
						anchor={<Button>Top right</Button>}
						customWrapperStyles={{ marginRight: 12 }}
					>
						<DropdownItem>the text direction goes</DropdownItem>
					</Dropdown>
				</Box>
			</LePreview>
			{showCode && (
				<LeHighlighter
					language="tsx"
					code={`const Component = () => {
return (
	<>
		<Box
			flex
			alignItems="center"
			justifyContent="flex-start"
			customStyles={{ marginBottom: 12 }}
		>
			<Dropdown
				position="bl"
				anchor={<Button>Bottom left</Button>}
				customWrapperStyles={{ marginRight: 12 }}
			>
				<DropdownItem>the text direction goes</DropdownItem>
			</Dropdown>
			<Dropdown position="br" anchor={<Button>Bottom right</Button>}>
				<DropdownItem>the text direction goes</DropdownItem>
			</Dropdown>
		</Box>
		<Box flex justifyContent="flex-start" alignItems="center">
			<Dropdown
				position="tl"
				anchor={<Button>Top left</Button>}
				customWrapperStyles={{ marginRight: 12 }}
			>
				<DropdownItem>the text direction goes</DropdownItem>
			</Dropdown>
			<Dropdown
				position="tr"
				anchor={<Button>Top right</Button>}
				customWrapperStyles={{ marginRight: 12 }}
			>
				<DropdownItem>the text direction goes</DropdownItem>
			</Dropdown>
		</Box>
	</>
);
};`}
				/>
			)}
		</>
	);
};

const DropdownTriggerPreview = () => {
	const [showCode, setShowCode] = useState<boolean | undefined>(false);

	return (
		<>
			<LePreview showCode={showCode} setShowCode={setShowCode} direction="row">
				<Dropdown
					trigger="click"
					anchor={<Button>Click</Button>}
					customWrapperStyles={{ marginRight: 12 }}
				>
					<DropdownItem>Item 1</DropdownItem>
				</Dropdown>
				<Dropdown trigger="hover" anchor={<Topography variant="body-2">Hover</Topography>}>
					<DropdownItem>Item 1</DropdownItem>
				</Dropdown>
			</LePreview>
			{showCode && (
				<LeHighlighter
					language="tsx"
					code={`const Component = () => {
	return (
		<>
			<Dropdown
				trigger="click"
				anchor={<Button>Click</Button>}
				customWrapperStyles={{ marginRight: 12 }}
			>
				<DropdownItem>Item 1</DropdownItem>
			</Dropdown>
			<Dropdown trigger="hover" anchor={<Topography variant="body-2">Hover</Topography>}>
				<DropdownItem>Item 1</DropdownItem>
			</Dropdown>
		</>
	);
};`}
				/>
			)}
		</>
	);
};

const DropdownItemPreview = () => {
	const [showCode, setShowCode] = useState<boolean | undefined>(false);

	return (
		<>
			<LePreview showCode={showCode} setShowCode={setShowCode}>
				<Dropdown>
					<DropdownItem onClick={() => alert("1")}>Alert 1</DropdownItem>
					<DropdownItem onClick={() => alert("2")}>Alert 2</DropdownItem>
				</Dropdown>
			</LePreview>
			{showCode && (
				<LeHighlighter
					language="tsx"
					code={`const Component = () => {
	return (
		<Dropdown>
			<DropdownItem onClick={() => alert("1")}>Alert 1</DropdownItem>
			<DropdownItem onClick={() => alert("2")}>Alert 2</DropdownItem>
		</Dropdown>
	);
};`}
				/>
			)}
		</>
	);
};

const DropdownSeparatorPreview = () => {
	const [showCode, setShowCode] = useState<boolean | undefined>(false);

	const [variant, setVariant] = useState<DropdownVariant>("filled");

	const handleVariantChange = (variant: DropdownVariant) => {
		setVariant(variant);
	};

	return (
		<>
			<LePreview showCode={showCode} setShowCode={setShowCode}>
				<Dropdown variant={variant}>
					<DropdownItem onClick={() => handleVariantChange("filled")}>filled</DropdownItem>
					<DropdownSeparator />
					<DropdownItem onClick={() => handleVariantChange("outlined")}>outlined</DropdownItem>
				</Dropdown>
			</LePreview>
			{showCode && (
				<LeHighlighter
					language="tsx"
					code={`const Component = () => {
	const [variant, setVariant] = useState<DropdownVariant>("filled");

	const handleVariantChange = (variant: DropdownVariant) => {
		setVariant(variant);
	};

	return (
		<Dropdown variant={variant}>
			<DropdownItem onClick={() => handleVariantChange("filled")}>filled</DropdownItem>
			<DropdownSeparator />
			<DropdownItem onClick={() => handleVariantChange("outlined")}>outlined</DropdownItem>
		</Dropdown>
	);
};`}
				/>
			)}
		</>
	);
};

const DropdownItemDisabledPreview = () => {
	const [showCode, setShowCode] = useState<boolean | undefined>(false);

	return (
		<>
			<LePreview showCode={showCode} setShowCode={setShowCode}>
				<Dropdown>
					<DropdownItem onClick={() => alert("1")}>Alert 1</DropdownItem>
					<DropdownItem disabled onClick={() => alert("2")}>
						Alert 2
					</DropdownItem>
				</Dropdown>
			</LePreview>
			{showCode && (
				<LeHighlighter
					language="tsx"
					code={`const Component = () => {
	return (
		<Dropdown>
			<DropdownItem onClick={() => alert("1")}>Alert 1</DropdownItem>
			<DropdownItem disabled onClick={() => alert("2")}>
				Alert 2
			</DropdownItem>
		</Dropdown>
	);
};`}
				/>
			)}
		</>
	);
};

dropdownAttr["LeSourceButton"] = LeSourceButton;
dropdownAttr["LeHighlighter"] = LeHighlighter;
dropdownAttr["DropdownImportPreview"] = DropdownImportPreview;
dropdownAttr["DropdownVariantPreview"] = DropdownVariantPreview;
dropdownAttr["DropdownAnchorPreview"] = DropdownAnchorPreview;
dropdownAttr["DropdownSizePreview"] = DropdownSizePreview;
dropdownAttr["DropdownPositionPreview"] = DropdownPositionPreview;
dropdownAttr["DropdownTriggerPreview"] = DropdownTriggerPreview;
dropdownAttr["DropdownItemPreview"] = DropdownItemPreview;
dropdownAttr["DropdownSeparatorPreview"] = DropdownSeparatorPreview;
dropdownAttr["DropdownItemDisabledPreview"] = DropdownItemDisabledPreview;

export { dropdownAttr };
