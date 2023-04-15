interface ModalProps {
	id: string;
	title: string;
	width?: React.CSSProperties["width"];
	visible?: boolean;
	children?: React.ReactNode;
	zIndex?: React.CSSProperties["zIndex"];
	centered?: boolean;
}

export { ModalProps };
