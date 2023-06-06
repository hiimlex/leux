import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import React, { useContext } from "react";
import { Button } from "../Button";
import { ModalProps } from "../Modal";
import { ModalContext } from "../ModalContext";
import { ModalProvider } from "./ModalProvider";

const TestModalComponent = (props: ModalProps) => {
	const { createModal, closeModal, destroyAll, destroyModal, openModal } = useContext(ModalContext);

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

describe("ModalProvider component test", () => {
	it("should render a Modal Component", () => {
		const { getByText, getByTestId } = render(
			<ModalProvider>
				<TestModalComponent id="testModal" title="Test Modal" />
			</ModalProvider>
		);

		const button = getByText("createModal");

		fireEvent.click(button);

		const modal = getByTestId("leuxModal");

		expect(modal).toBeInTheDocument();
	});

	it("should destrot a Modal Component", () => {
		const { getByText, getByTestId } = render(
			<ModalProvider>
				<TestModalComponent id="testModal" title="Test Modal" />
			</ModalProvider>
		);

		const button = getByText("createModal");

		fireEvent.click(button);

		const modal = getByTestId("leuxModal");

		expect(modal).toBeInTheDocument();

		const buttonDestroy = getByText("destroyModal");

		fireEvent.click(buttonDestroy);

		expect(modal).not.toBeInTheDocument();
	});

	it("should destroy all Modals", () => {
		const { getByText, getByTestId } = render(
			<ModalProvider>
				<TestModalComponent id="testModal" title="Test Modal" />
			</ModalProvider>
		);

		const button = getByText("createModal");

		fireEvent.click(button);

		const modal = getByTestId("leuxModal");

		expect(modal).toBeInTheDocument();

		const buttonDestroy = getByText("destroyAll");

		fireEvent.click(buttonDestroy);

		expect(modal).not.toBeInTheDocument();
	});
});
