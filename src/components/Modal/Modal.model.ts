import { ButtonProps } from "../Button";

type ModalFooterFunction = (id: string) => void;

type ModalFooterButton = ButtonProps & { cancel?: boolean; ok?: boolean };

type ModalFooterProps = ModalFooterButton[] | null;

type ModalFloatPosition = {
	top?: React.CSSProperties["top"];
	left?: React.CSSProperties["left"];
	right?: React.CSSProperties["right"];
	bottom?: React.CSSProperties["bottom"];
};

interface ModalProps {
	id: string;
	title: string;
	children?: React.ReactNode;
	visible?: boolean;

	width?: React.CSSProperties["width"];
	zIndex?: React.CSSProperties["zIndex"];
	centered?: boolean;
	position?: ModalFloatPosition;

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

export { ModalProps, ModalFooterFunction, ModalFooterProps, ModalFooterButton };
