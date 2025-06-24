import { PropsMapping, LeApiTable, LeHighlighter, LePreview, LeSourceButton } from "@/components";
import { NavLink } from "react-router-dom";
import { Box, BoxVariants, Grid, GridProps, Typography } from "@leux/ui";
import { attributes as gridAttr } from "./grid.md";
import { useState } from "react";
import React from "react";

const GridImportPreview = () => {
	return <LeHighlighter language="tsx" code={`import { Grid, GridProps, Box } from "@leux/ui";`} />;
};

const GridColPreview = () => {
	const [showCode, setShowCode] = useState<boolean>(false);

	return (
		<>
			<LePreview showCode={showCode} setShowCode={setShowCode}>
				<Grid cols={3}>
					{(["primary", "success", "danger"] as BoxVariants[]).map((item) => (
						<Box
							key={item}
							bgColor={item}
							padding={12}
							customStyles={{ textTransform: "capitalize" }}
							textColor="lighter"
							centered
						>
							<Typography variant="body-1">{item} BG</Typography>
						</Box>
					))}
				</Grid>
			</LePreview>
			{showCode && (
				<LeHighlighter
					language="tsx"
					code={`const Component = () => (
	<Grid cols={3}>
		{(["primary", "success", "danger"] as BoxVariants[]).map((item) => (
			<Box
				key={item}
				bgColor={item}
				padding={12}
				customStyles={{ textTransform: "capitalize" }}
				textColor="lighter"
				centered
			>
				<Typography variant="body-1">{item} BG</Typography>
			</Box>
		))}
	</Grid>
);`}
				/>
			)}
		</>
	);
};

const GridRowPreview = () => {
	const [showCode, setShowCode] = useState<boolean>(false);

	return (
		<>
			<LePreview showCode={showCode} setShowCode={setShowCode}>
				<Grid rows={3}>
					{(["primary", "success", "danger"] as BoxVariants[]).map((item) => (
						<Box
							key={item}
							bgColor={item}
							padding={12}
							customStyles={{ textTransform: "capitalize" }}
							textColor="lighter"
							centered
						>
							<Typography variant="body-1">{item} BG</Typography>
						</Box>
					))}
				</Grid>
			</LePreview>
			{showCode && (
				<LeHighlighter
					language="tsx"
					code={`const Component = () => (
	<Grid rows={3}>
		{(["primary", "success", "danger"] as BoxVariants[]).map((item) => (
			<Box
				key={item}
				bgColor={item}
				padding={12}
				customStyles={{ textTransform: "capitalize" }}
				textColor="lighter"
				centered
			>
				<Typography variant="body-1">{item} BG</Typography>
			</Box>
		))}
	</Grid>
);`}
				/>
			)}
		</>
	);
};

const GridGapPreview = () => {
	const [showCode, setShowCode] = useState<boolean>(false);

	return (
		<>
			<LePreview showCode={showCode} setShowCode={setShowCode}>
				<Grid cols={3} rows={3} gap={{ col: 12, row: 12 }}>
					{[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
						<Box
							key={item}
							padding={4}
							bgColor="default"
							textColor="darker"
							centered
							borderRadius="12px"
						>
							<Typography variant="body-1">{item}</Typography>
						</Box>
					))}
				</Grid>
			</LePreview>
			{showCode && (
				<LeHighlighter
					language="tsx"
					code={`const Component = () => (
	<Grid cols={3} rows={3} gap={{ col: 5, row: 5 }} width="25%" padding="12px">
		{[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
			<Box
				key={item}
				padding={4}
				bgColor="default"
				textColor="darker"
				centered
				borderRadius="12px"
			>
				<Typography variant="body-1">{item}</Typography>
			</Box>
		))}
	</Grid>
);`}
				/>
			)}
		</>
	);
};

const GridSpanPreview = () => {
	const [showCode, setShowCode] = useState<boolean>(false);

	return (
		<>
			<LePreview showCode={showCode} setShowCode={setShowCode}>
				<Grid cols={4} rows={2} gap={{ row: 12, col: 12 }}>
					<Box padding={4} bgColor="success" textColor="lighter" centered gridSpan={{ row: 2 }}>
						<Typography variant="body-1">2 rows and 1 col</Typography>
					</Box>
					<Box padding={4} bgColor="danger" textColor="lighter" centered gridSpan={{ col: 2 }}>
						<Typography variant="body-1">1 row and 2 cols</Typography>
					</Box>
					{[1, 2, 3, 4].map((item) => (
						<Box key={item} padding={4} bgColor="default" textColor="darker" centered>
							<Typography variant="body-1">1 col and 1 row</Typography>
						</Box>
					))}
				</Grid>
			</LePreview>
			{showCode && (
				<LeHighlighter
					language="tsx"
					code={`const Component = () => (
	<Grid cols={4} rows={2} gap={{ row: 12, col: 12 }}>
		<Box
			padding={4}
			bgColor="success"
			textColor="darker"
			centered
			gridSpan={{ row: 2 }}
		>
			<Typography variant="body-1">2 rows and 1 col</Typography>
		</Box>
		<Box
			padding={4}
			bgColor="danger"
			textColor="darker"
			centered
			gridSpan={{ col: 2 }}
		>
			<Typography variant="body-1">1 row and 2 cols</Typography>
		</Box>
		{[1, 2, 3, 4].map((item) => (
			<Box
				key={item}
				padding={4}
				bgColor="default"
				textColor="darker"
				centered
			>
				<Typography variant="body-1">1 col</Typography>
			</Box>
		))}
	</Grid>
);`}
				/>
			)}
		</>
	);
};

const GridApiTable = () => {
	const props: PropsMapping<GridProps> = {
		rows: {
			type: "React.CSSProperties['gridTemplateRows'] | number",
		},
		cols: {
			type: "React.CSSProperties['gridTemplateColumns'] | number",
		},
		gap: {
			type: "{ row: React.CSSProperties['rowGap']; col: React.CSSProperties['columnGap'] }",
		},
		width: {
			type: "React.CSSProperties['width']",
		},
		padding: {
			type: "React.CSSProperties['padding']",
		},
		children: {
			type: "React.ReactNode",
		},
		customClass: {
			type: "string",
		},
		customStyles: {
			type: "React.CSSProperties",
		},
	};

	return <LeApiTable props={props}></LeApiTable>;
};

gridAttr["LeSourceButton"] = LeSourceButton;
gridAttr["GridImportPreview"] = GridImportPreview;
gridAttr["GridColPreview"] = GridColPreview;
gridAttr["GridRowPreview"] = GridRowPreview;
gridAttr["GridGapPreview"] = GridGapPreview;
gridAttr["GridSpanPreview"] = GridSpanPreview;
gridAttr["NavLink"] = NavLink;
gridAttr["LeHighlighter"] = LeHighlighter;
gridAttr["GridApiTable"] = GridApiTable;

export { gridAttr };
