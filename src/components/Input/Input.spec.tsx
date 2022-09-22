import { render } from "@testing-library/react";

import { Input } from "./Input";
import "@testing-library/jest-dom";
import React from "react";

describe("Input component test", () => {
	it("should render Input component", () => {
		const { getByTestId } = render(<Input type="text" fieldKey="test" />);

		const input = getByTestId("leuxInput");

		expect(input).toBeTruthy();
	});
});
