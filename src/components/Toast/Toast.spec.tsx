import { fireEvent, render } from "@testing-library/react";

import "@testing-library/jest-dom";
import React, { act } from "react";
import { useToast } from "../../hooks";
import { ToastProvider } from "../../providers";
import { ToastProps } from "./Toast.model";

const LABELS = {
	CREATE: "create toast",
};

const TestToastComponent = (props: ToastProps) => {
	const { createToast } = useToast();

	const handleCreateToast = () => {
		createToast({ ...props });
	};

	return (
		<div>
			<button onClick={handleCreateToast}>{LABELS.CREATE}</button>
		</div>
	);
};

describe("Toast component test", () => {
	it("should render a Toast component", () => {
		const { getByTestId, getByText } = render(
			<ToastProvider>
				<TestToastComponent id="test" label="test" />
			</ToastProvider>
		);

		const createBtn = getByText(LABELS.CREATE);

		act(() => {
			fireEvent.click(createBtn);
		});

		const toast = getByTestId("leuxToast");

		expect(toast).toBeTruthy();
	});

	it("should render a Toast component and close by clicking on it", () => {
		const { getByTestId, getByText } = render(
			<ToastProvider>
				<TestToastComponent label="test" />
			</ToastProvider>
		);

		const createBtn = getByText(LABELS.CREATE);

		act(() => {
			fireEvent.click(createBtn);
		});

		const toast = getByTestId("leuxToast");

		expect(toast).toBeTruthy();

		act(() => {
			fireEvent.click(toast);
		});

		expect(toast).not.toBeInTheDocument();
	});

	it("should render a Toast component and try to close a non-closable toast", () => {
		const { getByTestId, getByText } = render(
			<ToastProvider>
				<TestToastComponent label="test" closable={false} />
			</ToastProvider>
		);

		const createBtn = getByText(LABELS.CREATE);

		act(() => {
			fireEvent.click(createBtn);
		});

		const toast = getByTestId("leuxToast");

		expect(toast).toBeTruthy();

		act(() => {
			fireEvent.click(toast);
		});

		expect(toast).toBeInTheDocument();
	});

	it("should render a Toast component with loading state", () => {
		const { getByTestId, getByText } = render(
			<ToastProvider>
				<TestToastComponent label="test" loading />
			</ToastProvider>
		);

		const createBtn = getByText(LABELS.CREATE);

		act(() => {
			fireEvent.click(createBtn);
		});

		const toast = getByTestId("leuxToast");

		expect(toast).toHaveClass("le-toast--loading");
	});

	it("should render a Toast component with custom class", () => {
		const { getByTestId, getByText } = render(
			<ToastProvider>
				<TestToastComponent label="test" customClass="custom-class" />
			</ToastProvider>
		);

		const createBtn = getByText(LABELS.CREATE);

		act(() => {
			fireEvent.click(createBtn);
		});

		const toast = getByTestId("leuxToast");

		expect(toast).toHaveClass("custom-class");
	});

	it("should render a Toast component with onClose callback", () => {
		const onClose = jest.fn();

		const { getByTestId, getByText } = render(
			<ToastProvider>
				<TestToastComponent label="test" onClose={onClose} />
			</ToastProvider>
		);

		const createBtn = getByText(LABELS.CREATE);

		act(() => {
			fireEvent.click(createBtn);
		});

		const toast = getByTestId("leuxToast");

		act(() => {
			fireEvent.click(toast);
		});

		expect(onClose).toHaveBeenCalled();
	});

	it("should render a Toast component and close by waiting for the default duration", async () => {
		const { getByTestId, getByText } = render(
			<ToastProvider>
				<TestToastComponent id="test" label="test" />
			</ToastProvider>
		);

		const createBtn = getByText(LABELS.CREATE);

		act(() => {
			fireEvent.click(createBtn);
		});

		const toast = getByTestId("leuxToast");

		expect(toast).toBeTruthy();

		await act(async () => {
			await new Promise((r) => setTimeout(r, 2050));
		});

		expect(toast).not.toBeInTheDocument();
	});
});
