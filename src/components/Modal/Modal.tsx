import React, { useContext } from "react";
import { LeClassNames } from "../../types";
import { Button, ButtonProps } from "../Button";
import { ModalProps } from "./Modal.model";
import { ModalContext } from "../ModalContext";
import "./Modal.scss";

const defaultFooterButtons: ButtonProps[] = [
	{
		children: "Cancel",
		variant: "outlined",
		theme: "default",
		buttonProps: {
			id: "modalCancel",
		},
	},
	{
		children: "OK",
		variant: "filled",
		theme: "primary",
		buttonProps: {
			id: "modalOk",
		},
	},
];

const Modal = ({
	id,
	title,
	width = "40%",
	visible = true,
	zIndex,
	children,
	centered = true,
	maskClosable = true,
	onCancel,
	onClose,
	onOk,
	cancelText = "Cancel",
	okText = "Ok",
	footer = defaultFooterButtons,
	customFooter,
	closable = true,
	customClass,
	customStyles,
	customWrapperClass,
	customWrapperStyles,
	destroyOnClose = true,
	top,
	left,
	right,
}: ModalProps) => {
	if (!visible) return null;

	const { closeModal } = useContext(ModalContext);

	const handleClose = () => {
		if (!closable) return;
		closeModal(id, destroyOnClose);

		if (onClose) onClose();
	};

	const handleClickMask = (event: React.MouseEvent) => {
		event.preventDefault();
		if (maskClosable) handleClose();
	};

	const handleFooterClick = (button: ButtonProps) => {
		const { onClick, buttonProps } = button;

		if (onClick) onClick();
		if (buttonProps && buttonProps.id === "modalCancel" && onCancel) onCancel(id, handleClose);
		else if (buttonProps && buttonProps.id === "modalOk" && onOk) onOk(id, handleClose);
	};

	const handleFooterChildren = (button: ButtonProps): React.ReactNode => {
		const { children, buttonProps } = button;

		if (buttonProps && buttonProps.id === "modalCancel" && cancelText) return cancelText;
		else if (buttonProps && buttonProps.id === "modalOk" && okText) return okText;
		else return children;
	};

	const stopPropagation = (event: React.MouseEvent) => event.stopPropagation();

	const classNames: LeClassNames = {
		modalWrapper: ({ centered, customClass }: { centered?: boolean; customClass?: string }) =>
			`le-modal--wrapper ${centered ? "le-modal--wrapper-centered" : ""} ${customClass || ""}`,
		modal: ({ customClass }: { customClass?: string }) => `le-modal ${customClass || ""}`,
		modalHeader: () => "le-modal--header",
		modalHeaderTitle: () => "le-modal--header-title",
		modalHeaderClose: () => "le-modal--header-close",
		modalBody: () => "le-modal--body",
		modalFooter: () => "le-modal--footer",
	};

	return (
		<div
			className={classNames["modalWrapper"]({ centered, customClass: customWrapperClass })}
			style={customWrapperStyles}
			onClick={handleClickMask}
		>
			<div
				className={classNames["modal"]({ customClass })}
				style={{
					width,
					zIndex,
					top,
					left,
					right,
					position: top || left || right ? "fixed" : "relative",
					...customStyles,
				}}
				onClick={stopPropagation}
				data-testid="leuxModal"
			>
				<header className={classNames["modalHeader"]()}>
					<h4 className={classNames["modalHeaderTitle"]()}>{title}</h4>
					{closable && (
						<div
							className={classNames["modalHeaderClose"]()}
							role="button"
							onClick={handleClose}
							data-testid="leuxModalClose"
						>
							×
						</div>
					)}
				</header>
				<main className={classNames["modalBody"]()}>{children}</main>
				{!!footer && (
					<footer className={classNames["modalFooter"]()}>
						{customFooter}
						{!customFooter &&
							footer.map((button, index) => (
								<Button
									key={index}
									{...button}
									children={handleFooterChildren(button)}
									onClick={() => handleFooterClick(button)}
								/>
							))}
					</footer>
				)}
			</div>
		</div>
	);
};

export { Modal };
