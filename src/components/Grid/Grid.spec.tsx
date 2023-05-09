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

	it("should render a Grid component using cols as number and rows as number", () => {
		const { getByTestId } = render(<Grid cols={3} rows={3} />);

		const grid = getByTestId("leuxGrid");

		expect(grid).toHaveStyle("grid-template-columns: repeat(3, 1fr)");
		expect(grid).toHaveStyle("grid-template-rows: repeat(3, 1fr)");
	});

	it("should render a Grid component with gaps", () => {
		const { getByTestId } = render(<Grid gap={{ row: "1rem", col: "1rem" }} />);

		const grid = getByTestId("leuxGrid");

		expect(grid).toHaveStyle("row-gap: 1rem");
		expect(grid).toHaveStyle("column-gap: 1rem");
	});
});
