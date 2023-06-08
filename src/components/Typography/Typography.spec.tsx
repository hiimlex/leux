import { render } from "@testing-library/react";
import React from "react";

import { Typography } from "./Typography";

import "@testing-library/jest-dom";

describe("Typography component test", () => {
	it("should render a Typography H1 component", () => {
		const { getByTestId } = render(<Typography variant="h1" children="Test" />);

		const typography = getByTestId("leuxTypography");

		expect(typography).toHaveClass("le-text--h1");
	});

	it("should render a Typography H2 component", () => {
		const { getByTestId } = render(<Typography variant="h2" children="Test" />);

		const typography = getByTestId("leuxTypography");

		expect(typography).toHaveClass("le-text--h2");
	});

	it("should render a Typography H3 component", () => {
		const { getByTestId } = render(<Typography variant="h3" children="Test" />);

		const typography = getByTestId("leuxTypography");

		expect(typography).toHaveClass("le-text--h3");
	});

	it("should render a Typography H4 component", () => {
		const { getByTestId } = render(<Typography variant="h4" children="Test" />);

		const typography = getByTestId("leuxTypography");

		expect(typography).toHaveClass("le-text--h4");
	});
	it("should render a Typography H5 component", () => {
		const { getByTestId } = render(<Typography variant="h5" children="Test" />);

		const typography = getByTestId("leuxTypography");

		expect(typography).toHaveClass("le-text--h5");
	});

	it("should render a Typography H6 component", () => {
		const { getByTestId } = render(<Typography variant="h6" children="Test" />);

		const typography = getByTestId("leuxTypography");

		expect(typography).toHaveClass("le-text--h6");
	});

	it("should render a Typography subtitle-1 component", () => {
		const { getByTestId } = render(<Typography variant="subtitle-1" children="Test" />);

		const typography = getByTestId("leuxTypography");

		expect(typography).toHaveClass("le-text--subtitle-1");
	});

	it("should render a Typography subtitle-2 component", () => {
		const { getByTestId } = render(<Typography variant="subtitle-2" children="Test" />);

		const typography = getByTestId("leuxTypography");

		expect(typography).toHaveClass("le-text--subtitle-2");
	});

	it("should render a Typography body-1 component", () => {
		const { getByTestId } = render(<Typography variant="body-1" children="Test" />);

		const typography = getByTestId("leuxTypography");

		expect(typography).toHaveClass("le-text--body-1");
	});

	it("should render a Typography body-2 component", () => {
		const { getByTestId } = render(<Typography variant="body-2" children="Test" />);

		const typography = getByTestId("leuxTypography");

		expect(typography).toHaveClass("le-text--body-2");
	});

	it("should render a Typography caption component", () => {
		const { getByTestId } = render(<Typography variant="caption" children="Test" />);

		const typography = getByTestId("leuxTypography");

		expect(typography).toHaveClass("le-text--caption");
	});

	it("should render a Typography button component", () => {
		const { getByTestId } = render(<Typography variant="button" children="Test" />);

		const typography = getByTestId("leuxTypography");

		expect(typography).toHaveClass("le-text--button");
	});

	it("should render a Typography overline component", () => {
		const { getByTestId } = render(<Typography variant="overline" children="Test" />);

		const typography = getByTestId("leuxTypography");

		expect(typography).toHaveClass("le-text--overline");
	});

	it("should render a Custom Class Typography component", () => {
		const { getByTestId } = render(
			<Typography variant="h1" children="Test" customClass="le-text--body-1" />
		);

		const typography = getByTestId("leuxTypography");

		expect(typography).toHaveClass("le-text--body-1");
	});

	it("should render a Custom Styles Typography component", () => {
		const { getByTestId } = render(
			<Typography variant="h1" children="Test" customStyles={{ fontSize: 12 }} />
		);

		const typography = getByTestId("leuxTypography");

		expect(typography).toHaveStyle("font-size: 12px");
	});
});
