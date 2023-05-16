import React, { useContext, useEffect } from "react";
import { LeClassNames } from "../../types";
import { ToastProps } from "./Toast.model";
import { ToastContext } from "../ToastContext";

import "./Toast.scss";

const Toast = ({
	id,
	label,
	loading = false,
	duration = 2000,
	theme = "default",
	variant = "filled",
	size = "medium",
	position = "topRight",
	closable = true,
	onClose,
	zIndex,
	customClass,
	customStyles,
}: ToastProps) => {
	const { removeToast } = useContext(ToastContext);

	const classNames: LeClassNames = {
		leToast: () =>
			`le-toast${
				customClass ? ` ${customClass}` : ""
			} le-toast--${theme} le-toast--${variant} le-toast--${size}${
				loading ? " le-toast--loading" : ""
			}${closable ? " le-toast--closable" : ""}${
				position ? ` le-toast--position-${position}` : ""
			}`,
		leToastLabel: () => `le-toast--label`,
	};

	const handleCloseToast = () => {
		if (closable) {
			removeToast(id);

			onClose && onClose();
		}
	};

	useEffect(() => {
		const timer = setTimeout(() => {
			removeToast(id);

			if (closable) {
				onClose && onClose();
			}
		}, duration);

		return () => {
			clearTimeout(timer);
		};
	});

	return (
		<div
			data-testid="leuxToast"
			className={classNames["leToast"]()}
			id={id}
			onClick={handleCloseToast}
			style={{ ...customStyles, zIndex }}
		>
			<span className={classNames["leToastLabel"]()}>{label}</span>
		</div>
	);
};

export { Toast };
