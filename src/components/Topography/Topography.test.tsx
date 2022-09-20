import { render } from "@testing-library/react";
import React from "react";

import { Topography } from "./Topography";

import "@testing-library/jest-dom";

describe("Topography component test", () => {
	it("should render a Topography H1 component", () => {
		const { getByTestId } = render(<Topography type="h1" children="Test" />);

		const topography = getByTestId("leuxTopography");

		expect(topography).toBeTruthy();
	});

	it("should render a Custom Class Topography component", () => {
		const { getByTestId } = render(
			<Topography type="h1" children="Test" customClass="le-text--body-1" />
		);

		const topography = getByTestId("leuxTopography");

		expect(topography).toHaveClass("le-text--body-1");
	});

	it("should render a Custom Styles Topography component", () => {
		const { getByTestId } = render(
			<Topography type="h1" children="Test" customStyles={{ fontSize: 12 }} />
		);

		const topography = getByTestId("leuxTopography");

		expect(topography).toHaveStyle("font-size: 12px");
	});
});
