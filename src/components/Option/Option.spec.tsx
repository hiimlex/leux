import React from "react";

import { render } from "@testing-library/react";

import "@testing-library/jest-dom";

import { Option } from "./Option";

describe("Option component test", () => {
	it("should render a Option component", () => {
		const { getByTestId } = render(<Option />);

		const option = getByTestId("leuxOption");

		expect(option).toBeTruthy();
	});
});
