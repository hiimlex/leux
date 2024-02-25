import { useContext } from "react";
import { ModalContext, ModalContextProps } from "../../contexts";

/**
 * useModal hook
 *
 * A one-liner hook to get the modal context and its methods
 *
 *
 * @returns {ModalContextProps}
 */
function useModal(): ModalContextProps {
	const context = useContext(ModalContext);

	return context;
}

export { useModal };
