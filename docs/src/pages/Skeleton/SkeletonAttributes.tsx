import { LeApiTable, LeHighlighter, LePreview, LeSourceButton, PropsMapping } from "@/components";
import { attributes as skeletonAttr } from "./skeleton.md";
import {
	Avatar,
	Box,
	Button,
	Skeleton,
	SkeletonProps,
	SkeletonSizes,
	Typography,
} from "../../../../src";
import { useState } from "react";

const SkeletonImportPreview = () => (
	<LeHighlighter code={`import { Skeleton, SkeletonProps } from "leux";`} language="tsx" />
);

const SkeletonVariantPreview = () => {
	const [showCode, setShowCode] = useState<boolean | undefined>(false);
	const [show, setShow] = useState(false);

	const handleShow = () => {
		setShow(!show);
	};

	return (
		<>
			<LePreview direction="column" showCode={showCode} setShowCode={setShowCode}>
				<Box flex flexDirection="row">
					<Button
						onClick={handleShow}
						customStyles={{ marginRight: 12 }}
						theme="primary"
						variant={show ? "filled" : "outlined"}
					>
						{show ? "show" : "hide"}
					</Button>
				</Box>
				<Box
					flex
					flexDirection="row"
					alignItems="center"
					justifyContent="space-between"
					width="100%"
				>
					<Skeleton show={show} variant="paragraph" customStyles={{ marginRight: 12 }}>
						<Typography
							variant="body-1"
							customStyles={{
								marginRight: 12,
								width: "30%",
							}}
						>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
						</Typography>
					</Skeleton>
					<Skeleton show={show} variant="round" customStyles={{ marginRight: 12 }}>
						<Avatar src="AL" asText></Avatar>
					</Skeleton>
					<Skeleton show={show} variant="rect">
						<Box flex bgColor="success" customStyles={{ width: 64, height: 64 }}></Box>
					</Skeleton>
				</Box>
			</LePreview>
			{showCode && (
				<LeHighlighter
					code={`const Component = () => {
	const [show, setShow] = useState(false);

	const handleShow = () => {
		setShow(!show);
	};

	return (
		<Box flex flexDirection="column">
			<Box flex flexDirection="row">
				<Button
					onClick={handleShow}
					customStyles={{ marginRight: 12 }}
					theme="primary"
					variant={show ? "filled" : "outlined"}
				>
					{show ? "show" : "hide"}
				</Button>
			</Box>
			<Box
				flex
				flexDirection="row"
				alignItems="center"
				justifyContent="space-between"
				width="100%"
			>
				<Skeleton show={show} variant="paragraph" customStyles={{ marginRight: 12 }}>
					<Typography
						variant="body-1"
						customStyles={{
							marginRight: 12,
							width: "30%",
						}}
					>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
					</Typography>
				</Skeleton>
				<Skeleton show={show} variant="round" customStyles={{ marginRight: 12 }}>
					<Avatar src="AL" asText></Avatar>
				</Skeleton>
				<Skeleton show={show} variant="square">
					<Box flex bgColor="success" customStyles={{ width: 64, height: 64 }}></Box>
				</Skeleton>
			</Box>
		</Box>
	);		
};`}
					language="tsx"
				/>
			)}
		</>
	);
};

const SkeletonSizePreview = () => {
	const [showCode, setShowCode] = useState<boolean | undefined>(false);
	const [size, setSize] = useState<SkeletonSizes>("medium");

	const handleSize = (size: SkeletonSizes) => {
		setSize(size);
	};

	return (
		<>
			<LePreview direction="column" showCode={showCode} setShowCode={setShowCode}>
				<Box flex flexDirection="row">
					<Button
						onClick={() => handleSize("small")}
						customStyles={{ marginRight: 12 }}
						theme="primary"
						variant={size === "small" ? "filled" : "outlined"}
					>
						small
					</Button>
					<Button
						onClick={() => handleSize("medium")}
						customStyles={{ marginRight: 12 }}
						theme="primary"
						variant={size === "medium" ? "filled" : "outlined"}
					>
						medium
					</Button>
					<Button
						onClick={() => handleSize("large")}
						customStyles={{ marginRight: 12 }}
						theme="primary"
						variant={size === "large" ? "filled" : "outlined"}
					>
						large
					</Button>
				</Box>
				<Box
					flex
					flexDirection="row"
					alignItems="center"
					justifyContent="space-between"
					width="100%"
				>
					<Skeleton active show size={size} width="100%">
						<Typography
							variant="body-1"
							customStyles={{
								marginRight: 12,
							}}
						>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
						</Typography>
					</Skeleton>
				</Box>
			</LePreview>
			{showCode && (
				<LeHighlighter
					code={`const Component = () => {
	const [size, setSize] = useState<SkeletonSize>("medium");

	const handleSize = (size: SkeletonSize) => {
		setSize(size);
	};

	return (
		<Box flex flexDirection="column">
			<Box flex flexDirection="row">
				<Button
					onClick={() => handleSize("small")}
					customStyles={{ marginRight: 12 }}
					theme="primary"
					variant={size === "small" ? "filled" : "outlined"}
				>
					small
				</Button>
				<Button
					onClick={() => handleSize("medium")}
					customStyles={{ marginRight: 12 }}
					theme="primary"
					variant={size === "medium" ? "filled" : "outlined"}
				>
					medium
				</Button>
				<Button
					onClick={() => handleSize("large")}
					customStyles={{ marginRight: 12 }}
					theme="primary"
					variant={size === "large" ? "filled" : "outlined"}
				>
					large
				</Button>
			</Box>
			<Box
				flex
				flexDirection="row"
				alignItems="center"
				justifyContent="space-between"
				width="100%"
			>
				<Skeleton active show size={size} width="100%">
					<Typography
						variant="body-1"
						customStyles={{
							marginRight: 12,
						}}
					>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
					</Typography>
				</Skeleton>
			</Box>
		</Box>
	);		
};`}
					language="tsx"
				/>
			)}
		</>
	);
};

const SkeletonRowsPreview = () => {
	const [showCode, setShowCode] = useState<boolean | undefined>(false);
	const [rows, setRows] = useState(2);

	const handleRows = (rows: number) => {
		setRows((curr) => curr + rows);
	};

	return (
		<>
			<LePreview direction="column" showCode={showCode} setShowCode={setShowCode}>
				<Box flex flexDirection="row">
					<Button
						state={{ disabled: rows === 5 }}
						onClick={() => handleRows(+1)}
						customStyles={{ marginRight: 12 }}
						theme="primary"
					>
						+
					</Button>
					<Button state={{ disabled: rows === 1 }} onClick={() => handleRows(-1)} theme="danger">
						-
					</Button>
				</Box>
				<Box
					flex
					flexDirection="row"
					alignItems="center"
					justifyContent="space-between"
					width="100%"
				>
					<Skeleton show rows={rows} variant="paragraph">
						<Typography variant="body-1">
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
						</Typography>
					</Skeleton>
				</Box>
			</LePreview>
			{showCode && (
				<LeHighlighter
					language="tsx"
					code={`const Component = () => {
	const [rows, setRows] = useState(2);

	const handleRows = (rows: number) => {
		setRows((curr) => curr + rows);
	};

	return (
		<Box flex flexDirection="column">
			<Box flex flexDirection="row">
				<Button
					state={{ disabled: rows === 5 }}
					onClick={() => handleRows(+1)}
					customStyles={{ marginRight: 12 }}
					theme="primary"
				>
					+
				</Button>
				<Button state={{ disabled: rows === 1 }} onClick={() => handleRows(-1)} theme="danger">
					-
				</Button>
			</Box>
			<Box
				flex
				flexDirection="row"
				alignItems="center"
				justifyContent="space-between"
				width="100%"
			>
				<Skeleton active show rows={rows} variant="paragraph">
					<Typography variant="body-1">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
					</Typography>
				</Skeleton>
			</Box>
		</Box>
	)
};`}
				/>
			)}
		</>
	);
};

const SkeletonActivePreview = () => {
	const [showCode, setShowCode] = useState<boolean | undefined>(false);
	const [active, setActive] = useState(false);

	const handleActive = () => {
		setActive((curr) => !curr);
	};

	return (
		<>
			<LePreview direction="column" showCode={showCode} setShowCode={setShowCode}>
				<Box flex flexDirection="row">
					<Button onClick={handleActive} theme="primary" variant={active ? "filled" : "outlined"}>
						{active ? "active" : "inactive"}
					</Button>
				</Box>
				<Box
					flex
					flexDirection="row"
					alignItems="center"
					justifyContent="space-between"
					width="100%"
				>
					<Skeleton active={active} show variant="paragraph">
						<Typography variant="body-1">
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
						</Typography>
					</Skeleton>
				</Box>
			</LePreview>
			{showCode && (
				<LeHighlighter
					language="tsx"
					code={`const Component = () => {
	const [active, setActive] = useState(false);

	const handleActive = () => {
		setActive((curr) => !curr);
	};
					
	return (
		<Box flex flexDirection="column">
			<Box flex flexDirection="row">
				<Button onClick={handleActive} theme="primary" variant={active ? "filled" : "outlined"}>
					{active ? "active" : "inactive"}
				</Button>
			</Box>
			<Box
				flex
				flexDirection="row"
				alignItems="center"
				justifyContent="space-between"
				width="100%"
			>
				<Skeleton active={active} show variant="paragraph">
					<Typography variant="body-1">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
					</Typography>
				</Skeleton>
			</Box>
		</Box>
	)
};`}
				/>
			)}
		</>
	);
};

const SkeletonApiTable = () => {
	const props: PropsMapping<SkeletonProps> = {
		children: {
			type: "React.ReactNode",
		},
		size: {
			type: "SkeletonSizes | 'small' | 'medium' | 'large'",
			defaultValue: "medium",
		},
		variant: {
			type: "SkeletonVariants |  'paragraph' | 'round' | 'rect'",
		},
		width: {
			type: "React.CSSProperties['width']",
			defaultValue: "100%",
		},
		rows: {
			type: "number",
			defaultValue: "2",
		},
		active: {
			type: "boolean",
			defaultValue: "false",
		},
		show: {
			type: "boolean",
			defaultValue: "true",
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

skeletonAttr["LeSourceButton"] = LeSourceButton;
skeletonAttr["LeHighlighter"] = LeHighlighter;
skeletonAttr["SkeletonImportPreview"] = SkeletonImportPreview;
skeletonAttr["SkeletonVariantPreview"] = SkeletonVariantPreview;
skeletonAttr["SkeletonSizePreview"] = SkeletonSizePreview;
skeletonAttr["SkeletonRowsPreview"] = SkeletonRowsPreview;
skeletonAttr["SkeletonActivePreview"] = SkeletonActivePreview;
skeletonAttr["SkeletonApiTable"] = SkeletonApiTable;

export { skeletonAttr };
