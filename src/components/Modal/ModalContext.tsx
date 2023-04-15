import React, { PropsWithChildren, createContext, useState } from "react";
import { ModalProps } from "./Modal.model";
import { Modal } from "./Modal";

import "./Modal.scss";

type ModalContextProps = {
	createModal: (modal: ModalProps) => void;
	showModal: (id: string) => void;
	hideModal: (id: string) => void;
	removeModal: (id: string) => void;
};

const ModalContext = createContext<ModalContextProps | null>(null);

const { Provider } = ModalContext;

type ModalProviderProps = {
	children: React.ReactNode;
};

const ModalProvider = ({ children }: ModalProviderProps) => {
	const [modals, setModals] = useState<ModalProps[]>([]);
	const [zIndex, setZIndex] = useState<number>(1000);

	const createModal = (modal: ModalProps) => {
		modal.zIndex = zIndex;

		setZIndex((curr) => curr + 1);

		setModals((curr) => [...curr, modal]);
	};

	const removeModal = (id: string) => {
		setModals((curr) => curr.filter((modal) => modal.id !== id));
	};

	const showModal = (id: string) => {
		setModals((curr) =>
			curr.map((modal) => {
				if (modal.id === id) {
					modal.zIndex = zIndex;

					setZIndex((curr) => curr + 1);

					modal.visible = true;
				}

				return modal;
			})
		);
	};

	const hideModal = (id: string) => {
		setModals((curr) =>
			curr.map((modal) => {
				if (modal.id === id) {
					modal.visible = false;

					modal.zIndex = 0;

					setZIndex((curr) => curr - 1);
				}

				return modal;
			})
		);
	};

	return (
		<Provider value={{ hideModal, createModal, showModal, removeModal }}>
			{modals.length > 0 && modals.some((el) => el.visible) && (
				<div className="le-modal--provider">
					{modals.map((modal) => (
						<Modal key={modal.id} {...modal} />
					))}
				</div>
			)}
			{children}
		</Provider>
	);
};

export { ModalContext, ModalProvider };
