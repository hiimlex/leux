import { createContext } from "react";
import { ToastPositions, ToastProps } from "../Toast";

type ToastContextProps = {
	toasts: ToastProps[];
	createToast: (toast: ToastProps) => void;
	removeToast: (id: string) => void;
	position?: ToastPositions;
};

const ToastContext = createContext<ToastContextProps>({} as ToastContextProps);

export { ToastContext, ToastContextProps };
