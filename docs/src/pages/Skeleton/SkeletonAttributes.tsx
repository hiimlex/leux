import { LeHighlighter, LePreview, LeSourceButton } from "@/components";
import { attributes as skeletonAttr } from "./skeleton.md";
import { Avatar, Box, Button, Skeleton, SkeletonSize, Topography } from "../../../../src";
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
						<Topography
							variant="body-1"
							customStyles={{
								marginRight: 12,
								width: "30%",
							}}
						>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
						</Topography>
					</Skeleton>
					<Skeleton show={show} variant="round" customStyles={{ marginRight: 12 }}>
						<Avatar src="AL" asText></Avatar>
					</Skeleton>
					<Skeleton show={show} variant="square">
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
					<Topography
						variant="body-1"
						customStyles={{
							marginRight: 12,
							width: "30%",
						}}
					>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
					</Topography>
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
	const [size, setSize] = useState<SkeletonSize>("medium");

	const handleSize = (size: SkeletonSize) => {
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
						<Topography
							variant="body-1"
							customStyles={{
								marginRight: 12,
							}}
						>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
						</Topography>
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
					<Topography
						variant="body-1"
						customStyles={{
							marginRight: 12,
						}}
					>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
					</Topography>
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
						<Topography variant="body-1">
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
						</Topography>
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
					<Topography variant="body-1">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
					</Topography>
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
						<Topography variant="body-1">
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
						</Topography>
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
					<Topography variant="body-1">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
					</Topography>
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

skeletonAttr["LeSourceButton"] = LeSourceButton;
skeletonAttr["LeHighlighter"] = LeHighlighter;
skeletonAttr["SkeletonImportPreview"] = SkeletonImportPreview;
skeletonAttr["SkeletonVariantPreview"] = SkeletonVariantPreview;
skeletonAttr["SkeletonSizePreview"] = SkeletonSizePreview;
skeletonAttr["SkeletonRowsPreview"] = SkeletonRowsPreview;
skeletonAttr["SkeletonActivePreview"] = SkeletonActivePreview;

export { skeletonAttr };
