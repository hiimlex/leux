import React from "react";
import { Box, BoxProps } from "../Box";

interface GridProps {
	cols?: React.CSSProperties["gridTemplateColumns"] | number;
	rows?: React.CSSProperties["gridTemplateRows"] | number;
	gap?: {
		row?: React.CSSProperties["rowGap"];
		col?: React.CSSProperties["columnGap"];
	};
	width?: React.CSSProperties["width"];
	padding?: React.CSSProperties["padding"];
	children?: React.ReactNode;
}

const Grid = ({
	rows,
	cols,
	gap,
	width = "100%",
	padding,
	children,
}: GridProps) => {
	const handleColumns = () => {
		if (typeof cols === "number") {
			return `repeat(${cols}, 1fr)`;
		} else {
			return cols;
		}
	};

	const handleRows = () => {
		if (typeof rows === "number") {
			return `repeat(${rows}, 1fr)`;
		} else {
			return rows;
		}
	};

	return (
		<div
			style={{
				display: "grid",
				width,
				padding,
				gridTemplateColumns: handleColumns(),
				gridTemplateRows: handleRows(),
				rowGap: gap && gap.row,
				columnGap: gap && gap.col,
			}}
		>
			{children}
		</div>
	);
};

export { Grid, GridProps };
