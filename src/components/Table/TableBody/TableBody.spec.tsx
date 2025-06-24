import { render } from "@testing-library/react";

import "@testing-library/jest-dom";
import React from "react";
import { Table } from "../Table";

describe("TableBody component test", () => {
	it("should render", () => {
		const { getByTestId } = render(
			<table>
				<Table.Body>
					<Table.BodyRow>
						<Table.BodyCell>Test</Table.BodyCell>
					</Table.BodyRow>
				</Table.Body>
			</table>
		);

		const tableHeader = getByTestId("leuxTableBody");

		expect(tableHeader).toBeTruthy();
	});
});
