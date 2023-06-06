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

	it("should render a Spinner component with circle variant", () => {
		const { getByTestId } = render(<Spinner variant="circle" />);

		const spinner = getByTestId("leuxSpinner");

		expect(spinner).toHaveClass("le-spinner--circle");
	});

	it("should render a Spinner component with custom speed, size and color", () => {
		const { getByTestId } = render(<Spinner customSpeed="2s" customSize={50} customColor="red" />);

		const spinner = getByTestId("leuxSpinner");

		expect(spinner).toHaveStyle("--spinner-speed: 2s");
		expect(spinner).toHaveStyle("--spinner-size: 50");
		expect(spinner).toHaveStyle("--spinner-color: red");
	});
});
