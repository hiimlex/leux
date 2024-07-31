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

	it("should use Box bounding styles", () => {
		const { getByTestId } = render(
			<Box
				insets={{ all: 10 }}
				paddings={{ left: 12, top: 10, bottom: 10, right: 12 }}
				margins={{ horizontal: 12, vertical: 10 }}
			/>
		);

		const box = getByTestId("leuxBox");

		expect(box).toHaveStyle("top: 10px");
		expect(box).toHaveStyle("bottom: 10px");
		expect(box).toHaveStyle("left: 10px");
		expect(box).toHaveStyle("right: 10px");
		expect(box).toHaveStyle("padding-top: 10px");
		expect(box).toHaveStyle("padding-bottom: 10px");
		expect(box).toHaveStyle("padding-left: 12px");
		expect(box).toHaveStyle("padding-right: 12px");
		expect(box).toHaveStyle("margin-top: 10px");
		expect(box).toHaveStyle("margin-bottom: 10px");
		expect(box).toHaveStyle("margin-left: 12px");
		expect(box).toHaveStyle("margin-right: 12px");
	});

	it("should create a box with gridSpan", () => {
		const { getByTestId } = render(<Box gridSpan={{ row: 2, col: 3 }} />);

		const box = getByTestId("leuxBox");

		expect(box).toHaveStyle("grid-row-end: span 2");
		expect(box).toHaveStyle("grid-column-end: span 3");
	});

	it("should create a centered box", () => {
		const { getByTestId } = render(<Box centered />);

		const box = getByTestId("leuxBox");

		expect(box).toHaveClass("le-box--centered");
	});
});
