import React from "react";

import { render } from "@testing-library/react";

import "@testing-library/jest-dom";

import { CustomSelect } from "./CustomSelect";

describe("Custom Select component test", () => {
	it("should render a Custom Select component", () => {
		const { getByTestId } = render(<CustomSelect options={[]} />);

		const select = getByTestId("leuxSelect");

		expect(select).toBeTruthy();
	});
});
