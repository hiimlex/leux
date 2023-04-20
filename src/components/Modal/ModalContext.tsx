import React, { createContext, useState } from "react";
import { Modal } from "./Modal";
import { ModalProps } from "./Modal.model";

import "./Modal.scss";

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

const { Provider } = ModalContext;

type ModalProviderProps = {
	children: React.ReactNode;
};

const ModalProvider = ({ children }: ModalProviderProps) => {
	const [modals, setModals] = useState<ModalProps[]>([]);
	const [zIndex, setZIndex] = useState<number>(1000);

	const hasModal = (id: string): boolean => modals.some((el) => el.id === id);

	const createModal = (modal: ModalProps): ModalProps => {
		const { id } = modal;

		const canCreate = !hasModal(id);

		if (!canCreate) throw new Error(`Modal with id ${id} already exists`);

		modal.zIndex = zIndex;

		setZIndex((curr) => curr + 1);

		setModals((curr) => [...curr, modal]);

		openModal(id);

		return modal;
	};

	const destroyModal = (id: string) => {
		setModals((curr) => curr.filter((modal) => modal.id !== id));
	};

	const openModal = (id: string) => {
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

	const closeModal = (id: string, shouldDestroy = false) => {
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

		if (shouldDestroy) destroyModal(id);
	};

	const destroyAll = () => {
		setModals([]);
	};

	return (
		<Provider
			value={{
				modals,
				hasModal,
				createModal,
				closeModal,
				openModal,
				destroyModal,
				destroyAll,
			}}
		>
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

export { ModalContext, ModalProvider, ModalContextProps, ModalProviderProps };
