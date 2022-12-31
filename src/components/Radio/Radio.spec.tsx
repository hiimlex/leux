import { render } from "@testing-library/react";

import { Radio } from "./Radio";
import "@testing-library/jest-dom";
import React from "react";

describe("Radio component test", () => {
	it("should render a Radio component", () => {
		const { getByTestId } = render(<Radio label="test" />);

		const radio = getByTestId("leuxRadio");

		expect(radio).toBeTruthy();
	});
});
