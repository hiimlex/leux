import { ButtonProps } from "../Button";

type ModalFooterFunction = (id: string, onClose: () => void) => void;

type ModalFooterProps = ButtonProps[] | null;

interface ModalProps {
	id: string;
	title: string;
	children?: React.ReactNode;
	visible?: boolean;

	width?: React.CSSProperties["width"];
	zIndex?: React.CSSProperties["zIndex"];
	centered?: boolean;
	top?: React.CSSProperties["top"];
	left?: React.CSSProperties["left"];
	right?: React.CSSProperties["right"];
	customClass?: string;
	customStyles?: React.CSSProperties;
	customWrapperClass?: string;
	customWrapperStyles?: React.CSSProperties;

	closable?: boolean;
	maskClosable?: boolean;
	destroyOnClose?: boolean;
	onClose?: () => void;
	onOk?: ModalFooterFunction;
	onCancel?: ModalFooterFunction;
	okText?: string;
	cancelText?: string;
	footer?: ModalFooterProps;
	customFooter?: React.ReactNode;
}

export { ModalProps, ModalFooterFunction, ModalFooterProps };
