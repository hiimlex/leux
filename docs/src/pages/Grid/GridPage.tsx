import { LeSourceButton } from "@/components";
import React from "react";
import { ReactComponent as GridMD, attributes as gridAttr } from "./grid.md";

import Code from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Box, Grid, Topography } from "../../../../src";
import { NavLink } from "react-router-dom";

const ImportPreview = () => {
	return <Code children={`import {  Grid, Box } from 'leux'`} style={dracula} />;
};

const GridColPreview = () => {
	return (
		<>
			<div className="le-preview">
				<Grid cols={3}>
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
				</Grid>
			</div>
			<Code
				language="jsx"
				style={dracula}
				children={`<Grid cols={3}>
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
				</Grid>
			</div>
			<Code
				language="jsx"
				style={dracula}
				children={`<Grid rows={3}>
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
			<Code
				language="jsx"
				children={`<Grid cols={3} rows={3} gap={{ col: 5, row: 5 }} width="25%" padding="12px">
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
				style={dracula}
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
			<Code
				language="jsx"
				children={`<Grid cols={4} rows={2} gap={{ row: 12, col: 12 }}>
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
				style={dracula}
			/>
		</>
	);
};

const GridPage = () => {
	gridAttr["LeSourceButton"] = LeSourceButton;
	gridAttr["ImportPreview"] = ImportPreview;
	gridAttr["GridColPreview"] = GridColPreview;
	gridAttr["GridRowPreview"] = GridRowPreview;
	gridAttr["GridGapPreview"] = GridGapPreview;
	gridAttr["GridSpanPreview"] = GridSpanPreview;
	gridAttr["NavLink"] = NavLink;
	gridAttr["Code"] = Code;

	return (
		<React.Fragment>
			<GridMD {...gridAttr} />
		</React.Fragment>
	);
};

export default GridPage;
