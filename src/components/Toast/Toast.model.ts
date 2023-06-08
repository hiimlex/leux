import React from "react";

type ToastThemes = "primary" | "secondary" | "success" | "danger" | "warning" | "default";
type ToastSizes = "small" | "medium" | "large";
type ToastVariants = "filled";
type ToastPositions =
	| "topLeft"
	| "topCenter"
	| "topRight"
	| "bottomLeft"
	| "bottomCenter"
	| "bottomRight";

interface ToastProps {
	id?: string;
	label: string;
	theme?: ToastThemes;
	variant?: ToastVariants;
	size?: ToastSizes;
	duration?: number;
	loading?: boolean;
	closable?: boolean;
	zIndex?: React.CSSProperties["zIndex"];
	onClose?: () => void;
	customStyles?: React.CSSProperties;
	customClass?: string;
}

export { ToastProps, ToastThemes, ToastVariants, ToastSizes, ToastPositions };
