import { render } from "@testing-library/react";

import { Table } from "./Table";
import "@testing-library/jest-dom";
import React from "react";

describe("Table component test", () => {
	it("should render a Table component", () => {
		const { getByTestId } = render(<Table.Root />);

		const table = getByTestId("leuxTable");

		expect(table).toBeTruthy();
	});
});
