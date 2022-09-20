import { render } from "@testing-library/react";
import React from "react";

import "@testing-library/jest-dom";
import { Box } from "./Box";

describe("Box component test", () => {
	it("should render a Box component", () => {
		const { getByTestId } = render(<Box />);

		const box = getByTestId("leuxBox");

		expect(box).toBeTruthy();
	});
});
