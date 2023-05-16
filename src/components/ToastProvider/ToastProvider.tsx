import React, { useState } from "react";

import "./ToastProvider.scss";
import { ToastContext } from "../ToastContext";
import { ToastProps } from "../Toast/Toast.model";
import { Toast } from "../Toast";

type ToastProviderProps = {
	children: React.ReactNode;
	createToast: (toast: ToastProps) => void;
};

const ToastProvider = ({ children }: ToastProviderProps) => {
	const [toasts, setToasts] = useState<ToastProps[]>([]);
	const [zIndex, setZIndex] = useState<number>(1000);

	const createToast = (toast: ToastProps): void => {
		setToasts((curr) => {
			toast.zIndex = zIndex + 1;

			setZIndex((curr) => curr + 1);

			return [...curr, toast];
		});
	};

	const removeToast = (id: string): void => {
		setToasts((curr) => curr.filter((toast) => toast.id !== id));
	};

	return (
		<ToastContext.Provider value={{ toasts, createToast, removeToast }}>
			{children}

			{toasts.length > 0 && (
				<div className="le-toast--provider">
					{toasts.some((toast) => toast.stackable) && (
						<div className="le-toast--provider-stack">
							{toasts
								.filter((toast) => toast.stackable)
								.map((toast, index) => (
									<Toast key={index} {...toast} />
								))}
						</div>
					)}

					{toasts
						.filter((toast) => !toast.stackable)
						.map((toast, index) => (
							<Toast key={index} {...toast} />
						))}
				</div>
			)}
		</ToastContext.Provider>
	);
};

export { ToastProvider };
