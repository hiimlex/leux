import { act, fireEvent, render } from "@testing-library/react";
import React from "react";

import "@testing-library/jest-dom";
import { OverlayProvider } from "..";
import { ModalProps, ToastProps } from "../components";
import { useModal, useToast } from "../hooks";
import { useBreakpoint } from "./useBreakpoint";

const TestUseBreakpoint = () => {
	const { breakpoint } = useBreakpoint();

	return <div data-testid="testUseBreakpoint">{breakpoint}</div>;
};

describe("useBreakpoint test", () => {
	it("should get a sm breakpoint", () => {
		const { getByTestId } = render(<TestUseBreakpoint />);

		act(() => {
			global.innerWidth = 500;

			global.dispatchEvent(new Event("resize"));
		});

		const testUseBreakpoint = getByTestId("testUseBreakpoint");

		expect(testUseBreakpoint).toHaveTextContent("sm");
	});

	it("should get a md breakpoint", () => {
		const { getByTestId } = render(<TestUseBreakpoint />);

		act(() => {
			global.innerWidth = 1100;

			global.dispatchEvent(new Event("resize"));
		});

		const testUseBreakpoint = getByTestId("testUseBreakpoint");

		expect(testUseBreakpoint).toHaveTextContent("md");
	});

	it("should get a lg breakpoint", () => {
		const { getByTestId } = render(<TestUseBreakpoint />);

		act(() => {
			global.innerWidth = 1300;

			global.dispatchEvent(new Event("resize"));
		});

		const testUseBreakpoint = getByTestId("testUseBreakpoint");

		expect(testUseBreakpoint).toHaveTextContent("lg");
	});

	it("should get a xl breakpoint", () => {
		const { getByTestId } = render(<TestUseBreakpoint />);

		act(() => {
			global.innerWidth = 1500;

			global.dispatchEvent(new Event("resize"));
		});

		const testUseBreakpoint = getByTestId("testUseBreakpoint");

		expect(testUseBreakpoint).toHaveTextContent("xl");
	});
});

const MODAL_LABELS = {
	CREATE: "CREATE MODAL",
	OPEN: "OPEN MODAL",
	CLOSE: "CLOSE MODAL",
	DESTROY: "DESTROY MODAL",
	DESTROY_ALL: "DESTROY ALL MODAL",
};

const ModalTest = (props: ModalProps) => {
	const { createModal, closeModal, destroyAll, destroyModal, openModal, modals } = useModal();

	const handleCreateModal = () =>
		createModal({ ...props, closable: false, maskClosable: false, destroyOnClose: false });

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
		<div data-testid="modalTest">
			<button onClick={handleCreateModal}>{MODAL_LABELS.CREATE}</button>
			<button onClick={handleOpenModal}>{MODAL_LABELS.OPEN}</button>
			<button onClick={handleCloseModal}>{MODAL_LABELS.CLOSE}</button>
			<button onClick={destroyAll}>{MODAL_LABELS.DESTROY_ALL}</button>
			<button onClick={handleDestroyModal}>{MODAL_LABELS.DESTROY}</button>
			{modals.map((modal) => (
				<div key={modal.id}>
					{modal.title}-{modal.zIndex}
				</div>
			))}
		</div>
	);
};

describe("useModal test", () => {
	it("should create a modal with hook", () => {
		const { getByText, getByTestId } = render(
			<OverlayProvider>
				<ModalTest id="test" title="test" />
			</OverlayProvider>
		);

		const createModalButton = getByText(MODAL_LABELS.CREATE);

		fireEvent.click(createModalButton);

		const modal = getByTestId("leuxModal");

		expect(modal).toBeInTheDocument();
	});

	it("should close a modal with hook", () => {
		const { getByText, getByTestId } = render(
			<OverlayProvider>
				<ModalTest id="test" title="test" />
			</OverlayProvider>
		);

		const createModalButton = getByText(MODAL_LABELS.CREATE);

		fireEvent.click(createModalButton);

		const modal = getByTestId("leuxModal");

		const closeModalButton = getByText(MODAL_LABELS.CLOSE);

		fireEvent.click(closeModalButton);

		expect(modal).not.toBeInTheDocument();
	});

	it("should destroy a modal with hook", () => {
		const { getByText, getByTestId } = render(
			<OverlayProvider>
				<ModalTest id="test" title="test" />
			</OverlayProvider>
		);

		const createModalButton = getByText(MODAL_LABELS.CREATE);

		fireEvent.click(createModalButton);

		const modal = getByTestId("leuxModal");

		const destroyModalButton = getByText(MODAL_LABELS.DESTROY);

		fireEvent.click(destroyModalButton);

		expect(modal).not.toBeInTheDocument();
	});

	it("should destroy a modal with hook", () => {
		const { getByText, getByTestId } = render(
			<OverlayProvider>
				<ModalTest id="test" title="test" />
			</OverlayProvider>
		);

		const createModalButton = getByText(MODAL_LABELS.CREATE);

		fireEvent.click(createModalButton);

		const modal = getByTestId("leuxModal");

		const destroyAllModalsButton = getByText(MODAL_LABELS.DESTROY_ALL);

		fireEvent.click(destroyAllModalsButton);

		expect(modal).not.toBeInTheDocument();
	});

	it("shouldn't create a modal with duplicated id", () => {
		const { getByText, getByTestId } = render(
			<OverlayProvider>
				<ModalTest id="test" title="test" />
			</OverlayProvider>
		);

		const createModalButton = getByText(MODAL_LABELS.CREATE);

		fireEvent.click(createModalButton);
		fireEvent.click(createModalButton);

		const modal = getByTestId("leuxModal");

		expect(modal).toBeInTheDocument();
	});

	it("should create a modal close and reopen", () => {
		const { getByText, getByTestId } = render(
			<OverlayProvider>
				<ModalTest id="test" title="test" zIndex={1000} />
			</OverlayProvider>
		);

		const createModalButton = getByText(MODAL_LABELS.CREATE);
		const openModalButton = getByText(MODAL_LABELS.OPEN);
		const closeModalButton = getByText(MODAL_LABELS.CLOSE);

		const modalTest = getByTestId("modalTest");

		fireEvent.click(createModalButton);

		const modal = getByTestId("leuxModal");

		expect(modal).toBeInTheDocument();

		expect(modalTest).toHaveTextContent("test-1000");

		fireEvent.click(closeModalButton);

		expect(modal).not.toBeInTheDocument();

		fireEvent.click(openModalButton);

		const modalReOpened = getByTestId("leuxModal");

		expect(modalReOpened).toBeInTheDocument();
		expect(modalTest).toHaveTextContent("test-1001");
	});
});

const TOAST_LABELS = {
	CREATE: "CREATE TOAST",
	REMOVE: "REMOVE TOAST",
};

const ToastTest = (toast: ToastProps) => {
	const { createToast, removeToast, toasts } = useToast();

	const handleCreateToast = () => createToast({ ...toast });

	const handleRemoveToast = () => toasts[0].id && removeToast(toasts[0].id);

	return (
		<div>
			<button onClick={handleCreateToast}>{TOAST_LABELS.CREATE}</button>
			<button onClick={handleRemoveToast}>{TOAST_LABELS.REMOVE}</button>
		</div>
	);
};

describe("useToast test", () => {
	it("should create a Toast component with hook", () => {
		const { getByText, getByTestId } = render(
			<OverlayProvider>
				<ToastTest label="Test" />
			</OverlayProvider>
		);

		const createToast = getByText(TOAST_LABELS.CREATE);

		fireEvent.click(createToast);

		const toast = getByTestId("leuxToast");

		expect(toast).toBeInTheDocument();
	});

	it("should create and a remove a Toast component with hook", () => {
		const { getByText, getByTestId } = render(
			<OverlayProvider>
				<ToastTest label="Test" />
			</OverlayProvider>
		);

		const createToast = getByText(TOAST_LABELS.CREATE);
		const removeToast = getByText(TOAST_LABELS.REMOVE);

		fireEvent.click(createToast);

		const toast = getByTestId("leuxToast");

		expect(toast).toBeInTheDocument();

		fireEvent.click(removeToast);

		expect(toast).not.toBeInTheDocument();
	});
});
