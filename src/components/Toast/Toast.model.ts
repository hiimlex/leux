import React from "react";

type ToastTheme = "primary" | "secondary" | "success" | "danger" | "warning" | "default";
type ToastSize = "small" | "medium" | "large";
type ToastVariant = "filled";
type ToastPosition =
	| "topLeft"
	| "topCenter"
	| "topRight"
	| "bottomLeft"
	| "bottomCenter"
	| "bottomRight";

interface ToastProps {
	id?: string;
	label: string;
	theme?: ToastTheme;
	variant?: ToastVariant;
	size?: ToastSize;
	duration?: number;
	loading?: boolean;
	closable?: boolean;
	zIndex?: React.CSSProperties["zIndex"];
	onClose?: () => void;
	customStyles?: React.CSSProperties;
	customClass?: string;
}

export { ToastProps, ToastTheme, ToastVariant, ToastSize, ToastPosition };
