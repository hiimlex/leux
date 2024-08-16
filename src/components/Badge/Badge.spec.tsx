import { render } from "@testing-library/react";
import React from "react";

import "@testing-library/jest-dom";
import { Badge } from "./Badge";

describe("Badge component test", () => {
	it("should render a Badge component", () => {
		const { getByTestId } = render(<Badge />);

		const badge = getByTestId("leuxBadge");

		expect(badge).toBeTruthy();
	});

	it("should render a Badge component with primary theme", () => {
		const { getByTestId } = render(<Badge theme="primary" />);

		const badge = getByTestId("leuxBadge");

		expect(badge).toHaveClass("le-badge--primary");
	});

	it("should render a Badge component with large size", () => {
		const { getByTestId } = render(<Badge size="large" children="large" />);

		const badge = getByTestId("leuxBadge");

		expect(badge).toHaveClass("le-badge--large");
	});

	it("should render a Badge component with outlined variant", () => {
		const { getByTestId } = render(<Badge variant="outlined" />);

		const badge = getByTestId("leuxBadge");

		expect(badge).toHaveClass("le-badge--outlined");
	});

	it("should render a Badge component with custom styles", () => {
		const { getByTestId } = render(
			<Badge children="test" customClass="le-bg-primary" customStyles={{ padding: 0 }} />
		);

		const badge = getByTestId("leuxBadge");

		expect(badge).toHaveStyle("padding: 0;");
	});

	it("should check if the class styles are being applied on Badge component", () => {
		const { getByTestId } = render(
			<Badge children="test" variant="outlined" theme="primary" size="small" />
		);

		const badge = getByTestId("leuxBadge");

		expect(badge).toHaveClass("le-badge--outlined le-badge--primary le-badge--small");
	});
});
