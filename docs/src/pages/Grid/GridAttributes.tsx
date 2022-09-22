import { LeHighlighter, LeSourceButton } from "@/components";
import { NavLink } from "react-router-dom";
import { Box, BoxVariants, Grid, Topography } from "../../../../src";
import { attributes as gridAttr } from "./grid.md";

const GridImportPreview = () => {
	return (
		<LeHighlighter
			language="tsx"
			code={`import {  Grid, GridProps, Box } from 'leux'`}
		/>
	);
};

const GridColPreview = () => {
	return (
		<>
			<div className="le-preview">
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
							<Topography type="body-1">{item} BG</Topography>
						</Box>
					))}
				</Grid>
			</div>
			<LeHighlighter
				language="tsx"
				code={`<Grid cols={3}>
	{["primary", "success", "danger"].map((item) => (
		<Box
			key={item}
			bgColor={item}
			padding={12}
			customStyles={{ textTransform: "capitalize" }}
			textColor="lighter"
			centered
		>
			<Topography type="body-1">{item} BG</Topography>
		</Box>
	))}
</Grid>`}
			/>
		</>
	);
};

const GridRowPreview = () => {
	return (
		<>
			<div className="le-preview">
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
							<Topography type="body-1">{item} BG</Topography>
						</Box>
					))}
				</Grid>
			</div>
			<LeHighlighter
				language="tsx"
				code={`<Grid rows={3}>
	{["primary", "success", "danger"].map((item) => (
		<Box
			key={item}
			bgColor={item}
			padding={12}
			customStyles={{ textTransform: "capitalize" }}
			textColor="lighter"
			centered
		>
			<Topography type="body-1">{item} BG</Topography>
		</Box>
	))}
</Grid>`}
			/>
		</>
	);
};

const GridGapPreview = () => {
	return (
		<>
			<div className="le-preview">
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
							<Topography type="body-1">{item}</Topography>
						</Box>
					))}
				</Grid>
			</div>
			<LeHighlighter
				language="tsx"
				code={`<Grid cols={3} rows={3} gap={{ col: 5, row: 5 }} width="25%" padding="12px">
	{[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
		<Box
			key={item}
			padding={4}
			bgColor="default"
			textColor="darker"
			centered
			borderRadius="12px"
		>
			<Topography type="body-1">{item}</Topography>
		</Box>
	))}
</Grid>`}
			/>
		</>
	);
};

const GridSpanPreview = () => {
	return (
		<>
			<div className="le-preview">
				<Grid cols={4} rows={2} gap={{ row: 12, col: 12 }}>
					<Box
						padding={4}
						bgColor="success"
						textColor="lighter"
						centered
						gridSpan={{ row: 2 }}
					>
						<Topography type="body-1">2 rows and 1 col</Topography>
					</Box>
					<Box
						padding={4}
						bgColor="danger"
						textColor="lighter"
						centered
						gridSpan={{ col: 2 }}
					>
						<Topography type="body-1">1 row and 2 cols</Topography>
					</Box>
					{[1, 2, 3, 4].map((item) => (
						<Box
							key={item}
							padding={4}
							bgColor="default"
							textColor="darker"
							centered
						>
							<Topography type="body-1">1 col and 1 row</Topography>
						</Box>
					))}
				</Grid>
			</div>
			<LeHighlighter
				language="tsx"
				code={`<Grid cols={4} rows={2} gap={{ row: 12, col: 12 }}>
	<Box
		padding={4}
		bgColor="success"
		textColor="darker"
		centered
		gridSpan={{ row: 2 }}
	>
		<Topography type="body-1">2 rows and 1 col</Topography>
	</Box>
	<Box
		padding={4}
		bgColor="danger"
		textColor="darker"
		centered
		gridSpan={{ col: 2 }}
	>
		<Topography type="body-1">1 row and 2 cols</Topography>
	</Box>
	{[1, 2, 3, 4].map((item) => (
		<Box
			key={item}
			padding={4}
			bgColor="default"
			textColor="darker"
			centered
		>
			<Topography type="body-1">1 col</Topography>
		</Box>
	))}
</Grid>`}
			/>
		</>
	);
};

gridAttr["LeSourceButton"] = LeSourceButton;
gridAttr["GridImportPreview"] = GridImportPreview;
gridAttr["GridColPreview"] = GridColPreview;
gridAttr["GridRowPreview"] = GridRowPreview;
gridAttr["GridGapPreview"] = GridGapPreview;
gridAttr["GridSpanPreview"] = GridSpanPreview;
gridAttr["NavLink"] = NavLink;
gridAttr["LeHighlighter"] = LeHighlighter;

export { gridAttr };
