import { act, render } from "@testing-library/react";

import "@testing-library/jest-dom";
import React, { useContext } from "react";
import { Button } from "../Button";
import { ModalContext } from "../ModalContext";
import { ModalProvider } from "../ModalProvider";
import { ModalProps } from "./Modal.model";

const TestModalComponent = (props: ModalProps) => {
	const { createModal, closeModal } = useContext(ModalContext);

	const handleCreateModal = () => {
		createModal({ ...props, destroyOnClose: true });
	};

	const handleCloseModal = () => {
		closeModal(props.id);
	};

	return (
		<div>
			<Button onClick={handleCreateModal}>open Modal</Button>
			<Button onClick={handleCloseModal}>close Modal</Button>
		</div>
	);
};

describe("Modal component test", () => {
	it("should render a Modal Component", () => {
		const { getByText, getByTestId } = render(
			<ModalProvider>
				<TestModalComponent id="testModal" title="Test Modal" />
			</ModalProvider>
		);

		const button = getByText("open Modal");

		act(() => {
			button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
		});

		const modal = getByTestId("leuxModal");

		expect(modal).toBeInTheDocument();
	});

	it("should render a Modal Component with no footer", () => {
		const { getByText, getByTestId } = render(
			<ModalProvider>
				<TestModalComponent id="testModal" title="Test Modal" footer={null} />
			</ModalProvider>
		);

		const button = getByText("open Modal");

		act(() => {
			button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
		});

		const modal = getByTestId("leuxModal");

		expect(modal).toBeInTheDocument();
	});

	it("should render a Modal component and hide after 500 ms", () => {
		const { getByTestId, getByText } = render(
			<ModalProvider>
				<TestModalComponent id="testModal" title="Test Modal"></TestModalComponent>
			</ModalProvider>
		);

		const button = getByText("open Modal");

		act(() => {
			button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
		});

		const modal = getByTestId("leuxModal");

		expect(modal).toBeInTheDocument();

		const closeButton = getByTestId("leuxModalClose");

		act(() => {
			closeButton.dispatchEvent(new MouseEvent("click", { bubbles: true }));
		});

		setTimeout(() => {
			expect(modal).not.toBeInTheDocument();
		}, 500);
	});

	it("should render a Modal Component with custom position style", () => {
		const { getByText, getByTestId } = render(
			<ModalProvider>
				<TestModalComponent id="testModal" title="Test Modal" top={100} left={100} right={100} />
			</ModalProvider>
		);

		const button = getByText("open Modal");

		act(() => {
			button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
		});

		const modal = getByTestId("leuxModal");

		expect(modal).toHaveStyle({
			top: "100px",
			left: "100px",
			right: "100px",
			position: "fixed",
		});
	});

	it("should render a Modal Component with custom width style", () => {
		const { getByText, getByTestId } = render(
			<ModalProvider>
				<TestModalComponent id="testModal" title="Test Modal" width={100} />
			</ModalProvider>
		);

		const button = getByText("open Modal");

		act(() => {
			button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
		});

		const modal = getByTestId("leuxModal");

		expect(modal).toHaveStyle({
			width: "100px",
		});
	});

	it("should render a Modal Component with children", () => {
		const { getByText, getByTestId } = render(
			<ModalProvider>
				<TestModalComponent id="testModal" title="Test Modal">
					<div>Test</div>
				</TestModalComponent>
			</ModalProvider>
		);

		const button = getByText("open Modal");

		act(() => {
			button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
		});

		const modal = getByTestId("leuxModal");

		expect(modal).toHaveTextContent("Test");
	});
});
