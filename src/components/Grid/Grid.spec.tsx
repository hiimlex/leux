import { render } from "@testing-library/react";
import React from "react";

import "@testing-library/jest-dom";
import { Grid } from "./Grid";

describe("Grid component test", () => {
	it("should render a Grid component", () => {
		const { getByTestId } = render(<Grid />);

		const grid = getByTestId("leuxGrid");

		expect(grid).toBeTruthy();
	});
});
