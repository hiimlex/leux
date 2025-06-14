import { render } from "@testing-library/react";

import { TableHeader } from "./TableHeader";
import "@testing-library/jest-dom";
import React from "react";

describe("TableHeader component test", () => {
	it("should render a TableHeader component", () => {
		const { getByTestId } = render(
			<table>
				<TableHeader columns={[]} />
			</table>
		);

		const tableHeader = getByTestId("leuxTableHeader");

		expect(tableHeader).toBeTruthy();
	});
});
