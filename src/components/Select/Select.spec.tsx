import { render } from "@testing-library/react";

import { Select } from "./Select";
import "@testing-library/jest-dom";
import React from "react";

describe("Select component test", () => {
	it("should render a Select component", () => {
		const { getByTestId } = render(<Select />);

		const select = getByTestId("leuxSelect");

		expect(select).toBeTruthy();
	});
});
