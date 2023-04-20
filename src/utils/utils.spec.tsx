import { act, render } from "@testing-library/react";
import React from "react";

import "@testing-library/jest-dom";
import { useBreakpoint } from "./useBreakpoint";

const TestUseBreakpoint = () => {
	const { breakpoint } = useBreakpoint();

	return <div data-testid="testUseBreakpoint">{breakpoint}</div>;
};

describe("Utils  test", () => {
	describe("useBreakpoint test", () => {
		it("should get a sm breakpoint", () => {
			const { getByTestId } = render(<TestUseBreakpoint />);

			act(() => {
				global.innerWidth = 500;

				global.dispatchEvent(new Event("resize"));
			});

			const testUseBreakpoint = getByTestId("testUseBreakpoint");

			expect(testUseBreakpoint).toHaveTextContent("sm");
		});

		it("should get a md breakpoint", () => {
			const { getByTestId } = render(<TestUseBreakpoint />);

			act(() => {
				global.innerWidth = 1100;

				global.dispatchEvent(new Event("resize"));
			});

			const testUseBreakpoint = getByTestId("testUseBreakpoint");

			expect(testUseBreakpoint).toHaveTextContent("md");
		});

		it("should get a lg breakpoint", () => {
			const { getByTestId } = render(<TestUseBreakpoint />);

			act(() => {
				global.innerWidth = 1300;

				global.dispatchEvent(new Event("resize"));
			});

			const testUseBreakpoint = getByTestId("testUseBreakpoint");

			expect(testUseBreakpoint).toHaveTextContent("lg");
		});

		it("should get a xl breakpoint", () => {
			const { getByTestId } = render(<TestUseBreakpoint />);

			act(() => {
				global.innerWidth = 1500;

				global.dispatchEvent(new Event("resize"));
			});

			const testUseBreakpoint = getByTestId("testUseBreakpoint");

			expect(testUseBreakpoint).toHaveTextContent("xl");
		});
	});
});
