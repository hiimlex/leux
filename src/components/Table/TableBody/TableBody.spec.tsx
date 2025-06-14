import { render } from "@testing-library/react";

import { TableBody } from "./TableBody";
import "@testing-library/jest-dom";
import React from "react";

describe("TableBody component test", () => {
	it("should render", () => {
		const { getByTestId } = render(
			<table>
				<TableBody />
			</table>
		);

		const tableHeader = getByTestId("leuxTableBody");

		expect(tableHeader).toBeTruthy();
	});
});
