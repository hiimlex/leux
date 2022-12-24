import { render } from "@testing-library/react";

import { Tooltip } from "./Tooltip";
import "@testing-library/jest-dom";
import React from "react";

describe("Input component test", () => {
	it("should render Input component", () => {
		const { getByTestId } = render(
			<Tooltip title="hello">
				<span>hover me</span>
			</Tooltip>
		);

		const leuxTooltipProvider = getByTestId("leuxTooltipProvider");

		expect(leuxTooltipProvider).toBeTruthy();
	});
});
