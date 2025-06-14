import React, { useEffect, useRef } from "react";
import { LeClassNames } from "../../types";
import { ToastProps } from "./Toast.model";

import { useTheme, useToast } from "../../hooks";
import "./Toast.scss";

const Toast: React.FC<ToastProps> = ({
	id,
	label,
	loading = false,
	duration,
	colorScheme = "default",
	variant = "filled",
	size = "medium",
	closable = true,
	onClose,
	zIndex,
	customClass,
	customStyles,
}) => {
	const { currentTheme } = useTheme();
	const { removeToast } = useToast();

	const classNames: LeClassNames = {
		leToast: () =>
			`le-toast le-toast--${colorScheme} le-toast--${variant} le-toast--${size} ${
				loading ? " le-toast--loading" : ""
			} ${closable ? " le-toast--closable" : ""} le-toast--${currentTheme} ${
				customClass ? ` ${customClass}` : ""
			}`,
		leToastLabel: () => `le-toast--label`,
	};

	const toastRef = useRef<HTMLDivElement>(null);

	const handleCloseToast = () => {
		if (closable && id) {
			removeToast(id);

			onClose && onClose();
		}
	};

	useEffect(() => {
		const timer = setTimeout(() => {
			if (id) {
				removeToast(id);
			}

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
			ref={toastRef}
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
