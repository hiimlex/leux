import { createContext } from "react";
import { ModalProps } from "../../components";

type ModalContextProps = {
	modals: ModalProps[];
	createModal: (modal: ModalProps) => void;
	openModal: (id: string) => void;
	closeModal: (id: string, shouldDestroy?: boolean) => void;
	hasModal: (id: string) => boolean;
	destroyModal: (id: string) => void;
	destroyAll: () => void;
};

const ModalContext = createContext<ModalContextProps>({} as ModalContextProps);

export { ModalContext, ModalContextProps };
