import { render } from "@testing-library/react";

import { Select } from "./Select";
import "@testing-library/jest-dom";
import React from "react";

describe("Select component test", () => {
	it("should render Select component", () => {
		const { getByTestId } = render(<Select />);

		const input = getByTestId("leuxSelect");

		expect(input).toBeTruthy();
	});
});
