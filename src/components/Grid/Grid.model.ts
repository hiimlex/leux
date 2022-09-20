import React from "react";

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
	customStyles?: React.CSSProperties;
	customClass?: string;
}

export { GridProps };
