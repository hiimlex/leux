import { render } from "@testing-library/react";
import React from "react";

import "@testing-library/jest-dom";
import { Badge } from "./Badge";

describe("Box component test", () => {
	it("should render a Badge component", () => {
		const { getByTestId } = render(<Badge />);

		const box = getByTestId("leuxBadge");

		expect(box).toBeTruthy();
	});

	it("should render a Badge component with primary type", () => {
		const { getByTestId } = render(<Badge variant="primary" />);

		const box = getByTestId("leuxBadge");

		expect(box).toHaveClass("le-badge--primary");
	});
});
