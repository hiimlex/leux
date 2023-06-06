import { fireEvent, render } from "@testing-library/react";

import "@testing-library/jest-dom";
import React, { useContext } from "react";
import { Button } from "../Button";
import { ToastContext } from "../ToastContext";
import { ToastProvider } from "../ToastProvider";

const TestToastComponent = () => {
	const { createToast } = useContext(ToastContext);

	const handleCreateToast = () => {
		createToast({ label: "Test Toast", id: "testToast" });
	};

	return (
		<div>
			<Button onClick={handleCreateToast}>create toast</Button>
		</div>
	);
};

describe("Toast component test", () => {
	it("should render a Toast component", () => {
		const { getByTestId } = render(
			<ToastProvider>
				<TestToastComponent />
			</ToastProvider>
		);

		const button = getByTestId("leuxButton");

		fireEvent.click(button);

		const toast = getByTestId("leuxToast");

		expect(toast).toBeTruthy();
	});
});
