import React from "react";

interface GridProps {
	cols?: string | number;
	rows?: string | number;
	gap?: { row?: number; col?: number };
	width?: string;
	children?: React.ReactNode;
}

const Grid = ({ rows, cols, gap, width = "100%", children }: GridProps) => {
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
				gridTemplateColumns: handleColumns(),
				gridTemplateRows: handleRows(),
				rowGap: gap && gap.row ? `${gap.row}px` : "0px",
				columnGap: gap && gap.col ? `${gap.col}px` : "0px",
			}}
		>
			{children}
		</div>
	);
};

export { Grid, GridProps };
