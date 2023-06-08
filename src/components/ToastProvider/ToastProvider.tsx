import React, { useRef, useState } from "react";

import { LeClassNames } from "../../types";
import { Toast } from "../Toast";
import { ToastPositions, ToastProps } from "../Toast/Toast.model";
import { ToastContext } from "../ToastContext";
import "./ToastProvider.scss";

type ToastProviderProps = {
	children: React.ReactNode;
	stackable?: boolean;
	position?: ToastPositions;
	duration?: number;
};

const ToastProvider = ({
	children,
	position = "topCenter",
	stackable = true,
	duration = 2500,
}: ToastProviderProps) => {
	const [toasts, setToasts] = useState<ToastProps[]>([]);
	const [zIndex, setZIndex] = useState<number>(1000);

	const wrapperRef = useRef<HTMLDivElement>(null);

	const randomId = (): string => Math.random().toString(36).substr(2, 9);

	const classNames: LeClassNames = {
		leToastProvider: () => `le-toast--provider`,
		leToastWrapper: () => `le-toast--wrapper le-toast--wrapper-${position}`,
	};

	const createToast = (toast: ToastProps): void => {
		setToasts((curr) => {
			toast.zIndex = zIndex + 1;

			if (!toast.id) {
				toast.id = randomId();
			}

			setZIndex((curr) => curr + 1);

			return [...curr, toast];
		});
	};

	const removeToast = (id: string): void => {
		setToasts((curr) => curr.filter((toast) => toast.id !== id));
	};

	return (
		<ToastContext.Provider value={{ toasts, createToast, removeToast, position }}>
			{children}

			{toasts.length > 0 && (
				<div className={classNames["leToastProvider"]()} data-testid="leuxToastProvider">
					<div
						ref={wrapperRef}
						className={classNames["leToastWrapper"]()}
						data-testid="leuxToastWrapper"
					>
						{toasts.map((toast, index) => (
							<Toast
								key={index}
								duration={duration}
								customStyles={{ ...toast.customStyles, position: stackable ? "relative" : "fixed" }}
								{...toast}
							/>
						))}
					</div>
				</div>
			)}
		</ToastContext.Provider>
	);
};

export { ToastProvider, ToastProviderProps };
