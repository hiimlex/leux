import React, { useMemo } from "react";
import { useModal } from "../../hooks";
import { LeClassNames } from "../../types";
import { Button } from "../Button";
import { ModalFooterButton, ModalFooterProps, ModalProps } from "./Modal.model";
import "./Modal.scss";

const defaultFooterButtons: ModalFooterProps = [
	{
		children: "Cancel",
		variant: "outlined",
		theme: "default",
		cancel: true,
	},
	{
		children: "OK",
		variant: "filled",
		theme: "primary",
		ok: true,
	},
];

const Modal: React.FC<ModalProps> = (props: ModalProps) => {
	const {
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
		position,
	} = props;

	const { closeModal } = useModal();

	const positionCss: React.CSSProperties["position"] = useMemo(
		() => (position ? "fixed" : "relative"),
		[position]
	);

	if (!visible) return null;

	const stopPropagation = (event: React.MouseEvent) => event.stopPropagation();

	const handleClose = () => {
		if (!closable) return;

		closeModal(id, destroyOnClose);

		if (onClose) onClose();
	};

	const handleClickMask = (event: React.MouseEvent) => {
		event.preventDefault();
		if (maskClosable) handleClose();
	};

	const handleFooterClick = (button: ModalFooterButton) => {
		const { onClick, cancel, ok } = button;

		if (onClick) onClick();
		if (cancel && onCancel) onCancel(id);
		if (ok && onOk) onOk(id);
	};

	const handleFooterChildren = (button: ModalFooterButton): React.ReactNode => {
		const { children, cancel, ok } = button;

		if (cancel) return cancelText;
		if (ok) return okText;

		return children;
	};

	const classNames: LeClassNames = {
		modalWrapper: ({ centered, customClass }: { centered?: boolean; customClass?: string }) =>
			`le-modal--wrapper ${centered ? "le-modal--wrapper-centered" : ""} ${customClass ?? ""}`,
		modal: ({ customClass }: { customClass?: string }) => `le-modal ${customClass ?? ""}`,
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
					top: position?.top,
					left: position?.left,
					right: position?.right,
					bottom: position?.bottom,
					position: positionCss,
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
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20px"
								height="20px"
								viewBox="2.5 2.5 18 18"
								fill="none"
							>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M10.9393 12L6.9696 15.9697L8.03026 17.0304L12 13.0607L15.9697 17.0304L17.0304 15.9697L13.0607 12L17.0303 8.03039L15.9696 6.96973L12 10.9393L8.03038 6.96973L6.96972 8.03039L10.9393 12Z"
								/>
							</svg>
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
