import { createContext } from "react";
import { ToastProps } from "../Toast";

type ToastContextProps = {
	toasts: ToastProps[];
	createToast: (toast: ToastProps) => void;
	removeToast: (id: string) => void;
};

const ToastContext = createContext<ToastContextProps>({} as ToastContextProps);

export { ToastContext, ToastContextProps };
