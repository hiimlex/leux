import { createContext } from "react";
import { ToastPosition, ToastProps } from "../Toast";

type ToastContextProps = {
	toasts: ToastProps[];
	createToast: (toast: ToastProps) => void;
	removeToast: (id: string) => void;
	position?: ToastPosition;
};

const ToastContext = createContext<ToastContextProps>({} as ToastContextProps);

export { ToastContext, ToastContextProps };
