import { useContext } from "react";
import { ToastContext, ToastContextProps } from "../../contexts";

/**
 * useModal hook
 *
 * A one-liner hook to get the modal context and its methods
 *
 *
 * @returns {ModalContextProps}
 */
function useToast(): ToastContextProps {
	const context = useContext(ToastContext);

	return context;
}

export { useToast };
