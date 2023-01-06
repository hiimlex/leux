import { render } from "@testing-library/react";

import { Spinner } from "./Spinner";
import "@testing-library/jest-dom";
import React from "react";

describe("Spinner component test", () => {
	it("should render a Spinner component", () => {
		const { getByTestId } = render(<Spinner />);

		const spinner = getByTestId("leuxSpinner");

		expect(spinner).toBeTruthy();
	});

	it("should render a Spinner component with small size", () => {
		const { getByTestId } = render(<Spinner size="small" />);

		const spinner = getByTestId("leuxSpinner");

		expect(spinner).toHaveClass("le-spinner--small");
	});
});
