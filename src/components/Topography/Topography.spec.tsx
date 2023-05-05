import { render } from "@testing-library/react";
import React from "react";

import { Topography } from "./Topography";

import "@testing-library/jest-dom";

describe("Topography component test", () => {
	it("should render a Topography H1 component", () => {
		const { getByTestId } = render(<Topography variant="h1" children="Test" />);

		const topography = getByTestId("leuxTopography");

		expect(topography).toHaveClass("le-text--h1");
	});

	it("should render a Topography H2 component", () => {
		const { getByTestId } = render(<Topography variant="h2" children="Test" />);

		const topography = getByTestId("leuxTopography");

		expect(topography).toHaveClass("le-text--h2");
	});

	it("should render a Topography H3 component", () => {
		const { getByTestId } = render(<Topography variant="h3" children="Test" />);

		const topography = getByTestId("leuxTopography");

		expect(topography).toHaveClass("le-text--h3");
	});

	it("should render a Topography H4 component", () => {
		const { getByTestId } = render(<Topography variant="h4" children="Test" />);

		const topography = getByTestId("leuxTopography");

		expect(topography).toHaveClass("le-text--h4");
	});
	it("should render a Topography H5 component", () => {
		const { getByTestId } = render(<Topography variant="h5" children="Test" />);

		const topography = getByTestId("leuxTopography");

		expect(topography).toHaveClass("le-text--h5");
	});

	it("should render a Topography H6 component", () => {
		const { getByTestId } = render(<Topography variant="h6" children="Test" />);

		const topography = getByTestId("leuxTopography");

		expect(topography).toHaveClass("le-text--h6");
	});

	it("should render a Topography subtitle-1 component", () => {
		const { getByTestId } = render(<Topography variant="subtitle-1" children="Test" />);

		const topography = getByTestId("leuxTopography");

		expect(topography).toHaveClass("le-text--subtitle-1");
	});

	it("should render a Topography subtitle-2 component", () => {
		const { getByTestId } = render(<Topography variant="subtitle-2" children="Test" />);

		const topography = getByTestId("leuxTopography");

		expect(topography).toHaveClass("le-text--subtitle-2");
	});

	it("should render a Topography body-1 component", () => {
		const { getByTestId } = render(<Topography variant="body-1" children="Test" />);

		const topography = getByTestId("leuxTopography");

		expect(topography).toHaveClass("le-text--body-1");
	});

	it("should render a Topography body-2 component", () => {
		const { getByTestId } = render(<Topography variant="body-2" children="Test" />);

		const topography = getByTestId("leuxTopography");

		expect(topography).toHaveClass("le-text--body-2");
	});

	it("should render a Topography caption component", () => {
		const { getByTestId } = render(<Topography variant="caption" children="Test" />);

		const topography = getByTestId("leuxTopography");

		expect(topography).toHaveClass("le-text--caption");
	});

	it("should render a Topography button component", () => {
		const { getByTestId } = render(<Topography variant="button" children="Test" />);

		const topography = getByTestId("leuxTopography");

		expect(topography).toHaveClass("le-text--button");
	});

	it("should render a Topography overline component", () => {
		const { getByTestId } = render(<Topography variant="overline" children="Test" />);

		const topography = getByTestId("leuxTopography");

		expect(topography).toHaveClass("le-text--overline");
	});

	it("should render a Custom Class Topography component", () => {
		const { getByTestId } = render(
			<Topography variant="h1" children="Test" customClass="le-text--body-1" />
		);

		const topography = getByTestId("leuxTopography");

		expect(topography).toHaveClass("le-text--body-1");
	});

	it("should render a Custom Styles Topography component", () => {
		const { getByTestId } = render(
			<Topography variant="h1" children="Test" customStyles={{ fontSize: 12 }} />
		);

		const topography = getByTestId("leuxTopography");

		expect(topography).toHaveStyle("font-size: 12px");
	});
});
