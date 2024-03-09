import { fireEvent, render } from "@testing-library/react";

import "@testing-library/jest-dom";
import React from "react";
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
				<TestToastComponent label="test" />
			</ToastProvider>
		);

		const createBtn = getByText(LABELS.CREATE);

		fireEvent.click(createBtn);

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

		fireEvent.click(createBtn);

		const toast = getByTestId("leuxToast");

		expect(toast).toBeTruthy();

		fireEvent.click(toast);

		expect(toast).not.toBeInTheDocument();
	});
});
