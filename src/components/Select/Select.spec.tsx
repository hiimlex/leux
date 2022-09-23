import React from "react";

import { render } from "@testing-library/react";

import "@testing-library/jest-dom";

import { Select } from "./Select";

describe("Select component test", () => {
	it("should render a Select component", () => {
		const { getByTestId } = render(<Select />);

		const select = getByTestId("leuxSelect");

		expect(select).toBeTruthy();
	});
});
