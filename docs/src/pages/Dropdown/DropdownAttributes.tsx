import { LeApiTable, LeHighlighter, LePreview, LeSourceButton, PropsMapping } from "@/components";
import {
	Box,
	Button,
	Dropdown,
	DropdownItemProps,
	DropdownProps,
	DropdownVariant,
	Typography,
} from "lib";
import React, { useState } from "react";
import { attributes as dropdownAttr } from "./dropdown.md";

const DropdownImportPreview = () => (
	<LeHighlighter language="tsx" code={`import { Dropdown, DropdownProps } from "@leux/ui";`} />
);

const DropdownAnchorPreview = () => {
	const [showCode, setShowCode] = useState<boolean>(false);

	return (
		<>
			<LePreview showCode={showCode} setShowCode={setShowCode}>
				<Dropdown.Root placement="top">
					<Dropdown.Item>item 1</Dropdown.Item>
				</Dropdown.Root>
			</LePreview>
			{showCode && (
				<LeHighlighter
					language="tsx"
					code={`const Component = () => {
	return (
		<Dropdown.Root anchor={<Button>anchor</Button>}>
			<Dropdown.Item>item 1</Dropdown.Item>
		</Dropdown.Root>
	);
};`}
				/>
			)}
		</>
	);
};

const DropdownVariantPreview = () => {
	const [showCode, setShowCode] = useState<boolean>(false);

	return (
		<>
			<LePreview showCode={showCode} setShowCode={setShowCode} direction="row">
				<Dropdown.Root
					variant="filled"
					anchor={<Button variant="filled">Toggle</Button>}
					customWrapperStyles={{ marginRight: 12 }}
				>
					<Dropdown.Item>item 1</Dropdown.Item>
					<Dropdown.Item>item 2</Dropdown.Item>
				</Dropdown.Root>

				<Dropdown.Root variant="outlined" anchor={<Button variant="outlined">Toggle</Button>}>
					<Dropdown.Item>item 1</Dropdown.Item>
					<Dropdown.Item>item 2</Dropdown.Item>
				</Dropdown.Root>
			</LePreview>
			{showCode && (
				<LeHighlighter
					language="tsx"
					code={`const Component = () => {
	return (
		<>
			<Dropdown.Root
				variant="filled"
				anchor={<Button variant="filled">Toggle</Button>}
				customWrapperStyles={{ marginRight: 12 }}
			>
				<Dropdown.Item>item 1</Dropdown.Item>
				<Dropdown.Item>item 2</Dropdown.Item>
			</Dropdown.Root>

			<Dropdown.Root variant="outlined" anchor={<Button variant="outlined">Toggle</Button>}>
				<Dropdown.Item>item 1</Dropdown.Item>
				<Dropdown.Item>item 2</Dropdown.Item>
			</Dropdown.Root>
		</>
	);
};`}
				/>
			)}
		</>
	);
};

const DropdownSizePreview = () => {
	const [showCode, setShowCode] = useState<boolean>(false);

	return (
		<>
			<LePreview showCode={showCode} setShowCode={setShowCode} direction="row">
				<Dropdown.Root
					size="small"
					anchor={<Button size="small">Toggle</Button>}
					customWrapperStyles={{ marginRight: 12 }}
				>
					<Dropdown.Item>small</Dropdown.Item>
				</Dropdown.Root>
				<Dropdown.Root
					size="medium"
					anchor={<Button size="medium">Toggle</Button>}
					customWrapperStyles={{ marginRight: 12 }}
				>
					<Dropdown.Item>medium</Dropdown.Item>
				</Dropdown.Root>
				<Dropdown.Root size="large" anchor={<Button size="large">Toggle</Button>}>
					<Dropdown.Item>large</Dropdown.Item>
				</Dropdown.Root>
			</LePreview>
			{showCode && (
				<LeHighlighter
					language="tsx"
					code={`const Component = () => {
return (
	<>
		<Dropdown.Root
			size="small"
			anchor={<Button size="small">Toggle</Button>}
			customWrapperStyles={{ marginRight: 12 }}
		>
			<Dropdown.Item>small</Dropdown.Item>
		</Dropdown.Root>
		<Dropdown.Root
			size="medium"
			anchor={<Button size="medium">Toggle</Button>}
			customWrapperStyles={{ marginRight: 12 }}
		>
			<Dropdown.Item>medium</Dropdown.Item>
		</Dropdown.Root>
		<Dropdown.Root size="large" anchor={<Button size="large">Toggle</Button>}>
			<DropdownItem>large</DropdownItem>
		</Dropdown.Root>
	</>
);
};`}
				/>
			)}
		</>
	);
};

const DropdownPositionPreview = () => {
	const [showCode, setShowCode] = useState<boolean>(false);

	return (
		<>
			<LePreview showCode={showCode} setShowCode={setShowCode} direction="column">
				<Box
					flex
					alignItems="center"
					justifyContent="flex-start"
					customStyles={{ marginBottom: 12 }}
				>
					<Dropdown.Root
						placement="bottom-start"
						anchor={<Button>Bottom left</Button>}
						customWrapperStyles={{ marginRight: 12 }}
					>
						<Dropdown.Item>the text direction goes</Dropdown.Item>
					</Dropdown.Root>
					<Dropdown.Root placement="bottom-end" anchor={<Button>Bottom right</Button>}>
						<Dropdown.Item>the text direction goes</Dropdown.Item>
					</Dropdown.Root>
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
			<Dropdown.Root
				placement="bottom-start"
				anchor={<Button>Bottom left</Button>}
				customWrapperStyles={{ marginRight: 12 }}
			>
				<Dropdown.Item>the text direction goes</Dropdown.Item>
			</Dropdown.Root>
			<Dropdown placement="bottom-end" anchor={<Button>Bottom right</Button>}>
				<Dropdown.Item>the text direction goes</Dropdown.Item>
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

const DropdownItemPreview = () => {
	const [showCode, setShowCode] = useState<boolean>(false);

	return (
		<>
			<LePreview showCode={showCode} setShowCode={setShowCode}>
				<Dropdown.Root>
					<Dropdown.Item onClick={() => alert("1")}>Alert 1</Dropdown.Item>
					<Dropdown.Item onClick={() => alert("2")}>Alert 2</Dropdown.Item>
				</Dropdown.Root>
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
	const [showCode, setShowCode] = useState<boolean>(false);

	const [variant, setVariant] = useState<DropdownVariant>("filled");

	const handleVariantChange = (variant: DropdownVariant) => {
		setVariant(variant);
	};

	return (
		<>
			<LePreview showCode={showCode} setShowCode={setShowCode}>
				<Dropdown.Root variant={variant}>
					<Dropdown.Item onClick={() => handleVariantChange("filled")}>filled</Dropdown.Item>
					<Dropdown.Separator />
					<Dropdown.Item onClick={() => handleVariantChange("outlined")}>outlined</Dropdown.Item>
				</Dropdown.Root>
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
	const [showCode, setShowCode] = useState<boolean>(false);

	return (
		<>
			<LePreview showCode={showCode} setShowCode={setShowCode}>
				<Dropdown.Root>
					<Dropdown.Item onClick={() => alert("1")}>Alert 1</Dropdown.Item>
					<Dropdown.Item disabled onClick={() => alert("2")}>
						Alert 2
					</Dropdown.Item>
				</Dropdown.Root>
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

const DropdownApiTable = () => {
	const props: PropsMapping<DropdownProps> = {
		anchor: {
			type: "React.ReactNode",
		},
		menuId: {
			type: "string",
			defaultValue: "undefined",
		},
		children: {
			type: "React.ReactNode",
		},
		trigger: {
			type: "'click' | 'hover'",
			defaultValue: "click",
		},
		placement: {
			type: "'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end' | 'right' | 'right-start' | 'right-end'",
		},
		size: {
			type: "'small' | 'medium' | 'large'",
			defaultValue: "'medium'",
		},
		offset: {
			type: "number",
			defaultValue: "12",
		},
		strategy: {
			type: "'fixed' | 'absolute'",
			defaultValue: "'fixed'",
		},
		variant: {
			type: "'filled' | 'outlined'",
		},
		clickOutside: {
			type: "boolean",
			defaultValue: "true",
		},
		closeOnClick: {
			type: "boolean",
			defaultValue: "true",
		},
		width: {
			type: "React.CSSProperties['width']",
		},
		menuProps: {
			type: "React.HTMLAttributes<HTMLUListElement>",
		},
		customMenuClass: {
			type: "string",
		},
		customWrapperStyles: {
			type: "React.CSSProperties",
		},
		customWrapperClass: {
			type: "string",
		},
		customMenuStyles: {
			type: "React.CSSProperties",
		},
	};

	return <LeApiTable props={props} />;
};

const DropdownItemApiTable = () => {
	const props: PropsMapping<DropdownItemProps> = {
		children: {
			type: "React.ReactNode",
		},
		centered: {
			type: "boolean",
		},
		disabled: {
			type: "boolean",
		},
		closeOnClick: {
			type: "boolean",
		},
		onClick: {
			type: "() => void",
		},
		itemProps: {
			type: "React.HTMLAttributes<HTMLLIElement>",
		},
		noBreakWord: {
			type: "boolean",
		},
		setShow: {
			type: "React.Dispatch<React.SetStateAction<boolean>>",
			defaultValue: "readonly",
		},
		trigger: {
			type: "'click' | 'hover'",
			defaultValue: "readonly",
		},
		customClass: {
			type: "string",
		},
		customStyles: {
			type: "React.CSSProperties",
		},
	};

	return <LeApiTable props={props} />;
};

dropdownAttr["LeSourceButton"] = LeSourceButton;
dropdownAttr["LeHighlighter"] = LeHighlighter;
dropdownAttr["DropdownImportPreview"] = DropdownImportPreview;
dropdownAttr["DropdownVariantPreview"] = DropdownVariantPreview;
dropdownAttr["DropdownAnchorPreview"] = DropdownAnchorPreview;
dropdownAttr["DropdownSizePreview"] = DropdownSizePreview;
dropdownAttr["DropdownPositionPreview"] = DropdownPositionPreview;
dropdownAttr["DropdownItemPreview"] = DropdownItemPreview;
dropdownAttr["DropdownSeparatorPreview"] = DropdownSeparatorPreview;
dropdownAttr["DropdownItemDisabledPreview"] = DropdownItemDisabledPreview;
dropdownAttr["DropdownApiTable"] = DropdownApiTable;
dropdownAttr["DropdownItemApiTable"] = DropdownItemApiTable;

export { dropdownAttr };
