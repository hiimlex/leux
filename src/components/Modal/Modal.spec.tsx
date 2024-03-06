import { act, fireEvent, render } from "@testing-library/react";

import "@testing-library/jest-dom";
import React from "react";
import { useModal } from "../../hooks";
import { Button } from "../Button";
import { ModalProvider } from "../../providers";
import { ModalProps } from "./Modal.model";

const OPEN_MODAL = "open Modal";
const CLOSE_MODAL = "close Modal";

const TestModalComponent = (props: ModalProps) => {
	const { createModal, closeModal } = useModal();

	const handleCreateModal = () => {
		createModal({ ...props, destroyOnClose: true });
	};

	const handleCloseModal = () => {
		closeModal(props.id);
	};

	return (
		<div>
			<Button onClick={handleCreateModal}>{OPEN_MODAL}</Button>
			<Button onClick={handleCloseModal}>{CLOSE_MODAL}</Button>
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

		const button = getByText(OPEN_MODAL);

		fireEvent.click(button);

		const modal = getByTestId("leuxModal");

		expect(modal).toBeInTheDocument();
	});

	it("should render a Modal component and hide after 500 ms", () => {
		const { getByTestId, getByText } = render(
			<ModalProvider>
				<TestModalComponent id="testModal" title="Test Modal"></TestModalComponent>
			</ModalProvider>
		);
		const button = getByText(OPEN_MODAL);

		fireEvent.click(button);

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
				<TestModalComponent
					id="testModal"
					title="Test Modal"
					position={{ top: 100, left: 100, right: 100 }}
				/>
			</ModalProvider>
		);

		const button = getByText(OPEN_MODAL);

		fireEvent.click(button);

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

		const button = getByText(OPEN_MODAL);

		fireEvent.click(button);
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

		const button = getByText(OPEN_MODAL);

		fireEvent.click(button);

		const modal = getByTestId("leuxModal");

		expect(modal).toHaveTextContent("Test");
	});

	it("should render a Modal Component and click on Ok and on Cancel button", () => {
		const onOk = jest.fn();
		const onCancel = jest.fn();
		const { getByText, getByTestId } = render(
			<ModalProvider>
				<TestModalComponent
					id="testModal"
					title="Test Modal"
					okText="OK_BUTTON"
					onOk={onOk}
					onCancel={onCancel}
					cancelText="CANCEL_BUTTON"
				/>
			</ModalProvider>
		);

		const openButton = getByText("open Modal");

		fireEvent.click(openButton);

		const modal = getByTestId("leuxModal");

		expect(modal).toBeInTheDocument();

		const okButton = getByText("OK_BUTTON");

		fireEvent.click(okButton);

		expect(onOk).toHaveBeenCalled();
	});

	it("should render a Modal Component centered", () => {
		const { getByText, getByTestId } = render(
			<ModalProvider>
				<TestModalComponent id="testModal" title="Test Modal" centered />
			</ModalProvider>
		);

		const button = getByText(OPEN_MODAL);

		fireEvent.click(button);

		const modalWrapper = getByTestId("leuxModalWrapper");

		expect(modalWrapper).toHaveClass("le-modal--wrapper-centered");
	});

	it("should render a Modal Component and expect to not be visible", () => {
		const { queryByTestId, getByText } = render(
			<ModalProvider>
				<TestModalComponent id="testModal" title="Test Modal" visible={false} />
			</ModalProvider>
		);

		const button = getByText(OPEN_MODAL);

		fireEvent.click(button);

		const modal = queryByTestId("leuxModal");

		expect(modal).toBeInTheDocument();
	});

	it("should render a Modal Component with custom wrapper className", () => {
		const CUSTOM_CLASS = "CUSTOM_CLASS";
		const CUSTOM_STYLES = { background: "red" };

		const { queryByTestId, getByText } = render(
			<ModalProvider>
				<TestModalComponent
					id="testModal"
					title="Test Modal"
					customWrapperClass={CUSTOM_CLASS}
					customWrapperStyles={CUSTOM_STYLES}
				/>
			</ModalProvider>
		);

		const button = getByText(OPEN_MODAL);

		fireEvent.click(button);

		const modal = queryByTestId("leuxModalWrapper");

		expect(modal).toHaveClass(CUSTOM_CLASS);
		expect(modal).toHaveStyle(CUSTOM_STYLES);
	});
});
