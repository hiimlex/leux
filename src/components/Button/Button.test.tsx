import { render } from "@testing-library/react";
import React from "react";
import { Button } from "./Button";

import "@testing-library/jest-dom";

describe("Button test", () => {
	it("should render Button component", () => {
		const { container } = render(<Button label="Button test" />);
		expect(container.firstChild).toHaveClass("le-button--default");
	});

	it("should render a Outlined Secondary Button component", () => {
		const { container } = render(
			<Button variant="secondary" type="outlined" size="large">
				Secondary Button
			</Button>
		);

		expect(container.firstChild).toHaveClass(
			"le-button--outlined le-button--secondary le-button--large"
		);
	});
});
