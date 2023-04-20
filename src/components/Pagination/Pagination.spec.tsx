import { render } from "@testing-library/react";

import { Pagination } from "./Pagination";
import "@testing-library/jest-dom";
import React from "react";

describe("Input component test", () => {
	it("should render Input component", () => {
		const { getByTestId } = render(
			<Pagination currentPage={0} totalPages={0} totalItems={0} itemsPerPage={0} />
		);

		const input = getByTestId("leuxPagination");

		expect(input).toBeTruthy();
	});
});
