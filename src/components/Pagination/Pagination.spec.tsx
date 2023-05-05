import { render, act, getByAltText } from "@testing-library/react";

import { Pagination } from "./Pagination";
import "@testing-library/jest-dom";
import React, { useState } from "react";

describe("Pagination component test", () => {
	it("should render Pagination component", () => {
		const { getByTestId } = render(
			<Pagination currentPage={0} totalPages={0} totalItems={0} itemsPerPage={0} />
		);

		const pagination = getByTestId("leuxPagination");

		expect(pagination).toBeTruthy();
	});

	it("should render a Pagination component with small size", () => {
		const { getByTestId } = render(
			<Pagination currentPage={0} totalPages={0} totalItems={0} itemsPerPage={0} size="small" />
		);

		const pagination = getByTestId("leuxPagination");

		expect(pagination).toHaveClass("le-pagination--small");
	});

	it("should render a Pagination with custom pagination buttons and limit 5", () => {
		const { getByTestId } = render(
			<Pagination
				currentPage={0}
				totalPages={5}
				totalItems={20}
				itemsPerPage={4}
				simplePagination={false}
				paginationButtons={{
					previous: false,
					next: false,
					limit: 5,
				}}
			/>
		);

		const pagination = getByTestId("leuxPagination");

		const paginationButtons = pagination.querySelectorAll(".le-pagination--button");

		expect(paginationButtons.length).toBe(5);
	});

	it("should render a Pagination component and change the page to next", () => {
		let currentPage = 0;

		const { getByTestId } = render(
			<Pagination
				currentPage={currentPage}
				totalPages={5}
				totalItems={20}
				itemsPerPage={4}
				onPageChange={(page: number) => (currentPage = page)}
			/>
		);

		const pagination = getByTestId("leuxPagination");

		const nextButton = pagination.querySelector(".le-pagination--next");

		if (nextButton) {
			act(() => {
				nextButton.dispatchEvent(new MouseEvent("click", { bubbles: true }));
			});

			expect(currentPage).toBe(1);
		} else {
			throw new Error("Next button not found");
		}
	});

	it("should render a Pagination component and change the page to previous", () => {
		let currentPage = 2;

		const { getByTestId } = render(
			<Pagination
				currentPage={currentPage}
				totalPages={5}
				totalItems={20}
				itemsPerPage={4}
				onPageChange={(page: number) => (currentPage = page)}
			/>
		);

		const pagination = getByTestId("leuxPagination");

		const previousButton = pagination.querySelector(".le-pagination--prev");

		if (previousButton) {
			act(() => {
				previousButton.dispatchEvent(new MouseEvent("click", { bubbles: true }));
			});

			expect(currentPage).toBe(1);
		} else {
			throw new Error("Previous button not found");
		}
	});

	it("should render a Pagination component with custom label", () => {
		const { getByTestId } = render(
			<Pagination
				currentPage={1}
				totalPages={5}
				totalItems={20}
				itemsPerPage={4}
				showPaginationLabel={({ currentPage, itemsPerPage, totalItems }) =>
					`${currentPage} of ${totalItems / itemsPerPage} pages`
				}
			/>
		);

		const pagination = getByTestId("leuxPagination");

		const paginationLabel = pagination.querySelector(".le-pagination--label");

		expect(paginationLabel).toHaveTextContent("1 of 5 pages");
	});

	it("should render a Pagination component and change the page to a page number", () => {
		let currentPage = 1;

		const { getByTestId } = render(
			<Pagination
				currentPage={currentPage}
				totalPages={5}
				totalItems={20}
				itemsPerPage={4}
				simplePagination={false}
				paginationButtons={{
					previous: false,
					next: false,
				}}
				onPageChange={(page: number) => (currentPage = page)}
			/>
		);

		const pagination = getByTestId("leuxPagination");

		act(() => {
			const pageButtons = pagination.querySelectorAll(".le-pagination--button");

			const pageButton = pageButtons[2];

			if (pageButton) {
				pageButton.dispatchEvent(new MouseEvent("click", { bubbles: true }));

				expect(currentPage).toBe(3);
			} else {
				throw new Error("Page button not found");
			}
		});
	});
});
