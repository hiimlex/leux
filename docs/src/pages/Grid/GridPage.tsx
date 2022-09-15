import { LeSourceButton } from "@/components";
import React from "react";
import { ReactComponent as GridMD, attributes as gridAttr } from "./grid.md";

import Code from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Box, Grid } from "../../../../src";

const ImportPreview = () => {
	return <Code children={`import {  Grid } from 'leux'`} style={dracula} />;
};

const GridColPreview = () => {
	return (
		<>
			<div className="le-preview">
				<Grid cols={3}>
					<Box bgColor="primary" height="60px" padding={12}>
						Primary bg
					</Box>
					<Box bgColor="secondary" height="60px" padding={12}>
						Secondary bg
					</Box>
					<Box bgColor="danger" height="60px" padding={12}>
						Danger bg
					</Box>
				</Grid>
			</div>
			<Code
				style={dracula}
				children={`<Grid cols={3}>
	<Box bgColor="primary" height="60px" padding={12}>
		Primary bg
	</Box>
	<Box bgColor="secondary" height="60px" padding={12}>
		Secondary bg
	</Box>
	<Box bgColor="danger" height="60px" padding={12}>
		Danger bg
	</Box>
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
					<Box bgColor="primary" height="20px" padding={4}>
						Primary bg
					</Box>
					<Box bgColor="secondary" height="20px" padding={4}>
						Secondary bg
					</Box>
					<Box bgColor="danger" height="20px" padding={4}>
						Danger bg
					</Box>
				</Grid>
			</div>
			<Code
				style={dracula}
				children={`<Grid rows={3}>
	<Box bgColor="primary" height="20px" padding={4}>
		Primary bg
	</Box>
	<Box bgColor="secondary" height="20px" padding={4}>
		Secondary bg
	</Box>
	<Box bgColor="danger" height="20px" padding={4}>
		Danger bg
	</Box>
</Grid>`}
			/>
		</>
	);
};


const GridPage = () => {
	gridAttr["LeSourceButton"] = LeSourceButton;
	gridAttr["ImportPreview"] = ImportPreview;
	gridAttr["GridColPreview"] = GridColPreview;
	gridAttr["GridRowPreview"] = GridRowPreview;

	return (
		<React.Fragment>
			<GridMD {...gridAttr} />
		</React.Fragment>
	);
};

export default GridPage;
