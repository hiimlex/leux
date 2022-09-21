import React from "react";

type BadgeTypes = "dashed" | "ghost" | "outlined";
type BadgeVariants =
	| "primary"
	| "secondary"
	| "success"
	| "danger"
	| "warning"
	| "default";
type BadgeSizes = "small" | "medium" | "large";

interface BadgeProps {
	type?: BadgeTypes;
	variant?: BadgeVariants;
	children?: React.ReactNode;
	size?: BadgeSizes;
	customClass?: string;
	customStyles?: React.CSSProperties;
}

export { BadgeProps, BadgeTypes };
