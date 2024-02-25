import { act, fireEvent, render } from "@testing-library/react";
import React from "react";

import "@testing-library/jest-dom";
import { ModalProps } from "../components";
import { useModal } from "../hooks";
import { useBreakpoint } from "./useBreakpoint";
import { OverlayProvider } from "..";

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

const ModalTest = (props: ModalProps) => {
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
			<button onClick={handleCreateModal}>createModal</button>
			<button onClick={handleCloseModal}>closeModal</button>
			<button onClick={destroyAll}>destroyAll</button>
			<button onClick={handleDestroyModal}>destroyModal</button>
			<button onClick={handleOpenModal}>openModal</button>
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

		const createModalButton = getByText("createModal");

		fireEvent.click(createModalButton);

		const modal = getByTestId("leuxModal");

		expect(modal).toBeInTheDocument();
	});
});
