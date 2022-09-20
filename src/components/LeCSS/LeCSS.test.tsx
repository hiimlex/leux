import { render } from "@testing-library/react";
import React from "react";

import "@testing-library/jest-dom";
import { LeCSS } from "./LeCSS";

describe("LeCSS component test", () => {
	it("should render a LeCSS component", () => {
		const { getByTestId } = render(<LeCSS />);

		const leCSS = getByTestId("leuxCSS");

		expect(leCSS).toBeTruthy();
	});
});
