import React from "react";

import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import { Button, ModalProps } from "../../components";
import { useModal } from "../../hooks";
import { OverlayProvider } from "./OverlayProvider";

const OverlayModalTest = (props: ModalProps) => {
	const { createModal, closeModal, destroyAll, destroyModal, openModal } = useModal();

	const handleCreateModal = () => {
		createModal({ ...props, closable: false, maskClosable: false, destroyOnClose: false });
	};

	const handleCloseModal = () => {
		closeModal(props.id, false);
	};

	const handleDestroyModal = () => {
		destroyModal(props.id);
	};

	const handleOpenModal = () => {
		openModal(props.id);
	};

	return (
		<div>
			<Button onClick={handleCreateModal}>createModal</Button>
			<Button onClick={handleCloseModal}>closeModal</Button>
			<Button onClick={destroyAll}>destroyAll</Button>
			<Button onClick={handleDestroyModal}>destroyModal</Button>
			<Button onClick={handleOpenModal}>openModal</Button>
		</div>
	);
};

describe("OverlayProvider test", () => {
	it("should render a Overlay Provider", () => {
		const { getByTestId } = render(
			<OverlayProvider>
				<></>
			</OverlayProvider>
		);

		const overlayProvider = getByTestId("leuxOverlayProvider");

		expect(overlayProvider).toBeInTheDocument();
	});

	it("should render a Overlay Provider and contains a Modal Provider", () => {
		const { getByText, getByTestId } = render(
			<OverlayProvider>
				<OverlayModalTest id="testModal" title="test"></OverlayModalTest>
			</OverlayProvider>
		);

		const button = getByText("createModal");

		fireEvent.click(button);

		const modalProvider = getByTestId("leuxModalProvider");

		expect(modalProvider).toBeInTheDocument();
	});

	// it("should render a Toast Component", () => {
	// 	const { getByText, getByTestId } = render(
	// 		<OverlayProvider>
	// 			<OverlayToastTest></OverlayToastTest>
	// 		</OverlayProvider>
	// 	);
	// });
});
