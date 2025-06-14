import React from "react";
import { GridProps } from "./Grid.model";

const Grid: React.FC<GridProps> = ({
	rows,
	cols,
	gap,
	width = "100%",
	padding,
	children,
	customClass,
	customStyles,
}) => {
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
				...customStyles,
			}}
			className={customClass}
			data-testid="leuxGrid"
		>
			{children}
		</div>
	);
};

export { Grid };
