import { render } from "@testing-library/react";

import { Checkbox } from "./Checkbox";
import "@testing-library/jest-dom";
import React from "react";

describe("Input component test", () => {
	it("should render Input component", () => {
		const { getByTestId } = render(<Checkbox fieldKey="test" />);

		const input = getByTestId("leuxCheckbox");

		expect(input).toBeTruthy();
	});
});
