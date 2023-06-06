import { fireEvent, render } from "@testing-library/react";

import { Checkbox } from "./Checkbox";
import "@testing-library/jest-dom";
import React from "react";
import { LeSafeAny } from "../../types";
import { unescape } from "querystring";

describe("Checkbox component test", () => {
	it("should render a Checkbox component", () => {
		const { getByTestId } = render(<Checkbox fieldKey="test" />);

		const checkbox = getByTestId("leuxCheckbox");

		expect(checkbox).toBeTruthy();
	});

	it("should render a Checkbox component with a label", () => {
		const { getByTestId } = render(<Checkbox fieldKey="test" label="test" />);

		const checkbox = getByTestId("leuxCheckbox");

		expect(checkbox).toBeTruthy();
		expect(checkbox).toHaveTextContent("test");
	});

	it("should render a Checkbox component with a small size", () => {
		const { getByTestId } = render(<Checkbox fieldKey="test" size="small" />);

		const checkbox = getByTestId("leuxCheckbox");

		expect(checkbox).toBeTruthy();
		expect(checkbox).toHaveClass("le-checkbox--small");
	});

	it("should update a variable when the Checkbox is clicked", () => {
		let send = false;

		const { getByTestId } = render(
			<Checkbox
				fieldKey="test"
				label="test"
				onChange={() => {
					send = true;
				}}
			/>
		);

		const checkbox = getByTestId("leuxCheckboxInput");

		expect(checkbox).toBeTruthy();

		fireEvent.click(checkbox);

		expect(send).toBeTruthy();
	});

	it("should render a Checkbox component with a custom class and styles", () => {
		const { getByTestId } = render(
			<Checkbox
				fieldKey="test"
				customClass="test"
				customStyles={{ backgroundColor: "red" }}
				customInputClass="test"
				customInputStyles={{ backgroundColor: "red" }}
				customLabelClass="test"
				customLabelStyles={{ backgroundColor: "red" }}
			/>
		);

		const checkbox = getByTestId("leuxCheckbox");

		expect(checkbox).toBeTruthy();
		expect(checkbox).toHaveClass("test");
		expect(checkbox).toHaveStyle("background-color: red");

		const checkboxInput = getByTestId("leuxCheckboxInput");

		expect(checkboxInput).toBeTruthy();

		expect(checkboxInput).toHaveClass("test");
		expect(checkboxInput).toHaveStyle("background-color: red");

		const checkboxLabel = getByTestId("leuxCheckboxLabel");

		expect(checkboxLabel).toBeTruthy();

		expect(checkboxLabel).toHaveClass("test");
		expect(checkboxLabel).toHaveStyle("background-color: red");
	});

	it("should render a Checkbox component with a custom width", () => {
		const { getByTestId } = render(<Checkbox fieldKey="test" width="50%" />);

		const checkbox = getByTestId("leuxCheckbox");

		expect(checkbox).toBeTruthy();
		expect(checkbox).toHaveStyle("width: 50%");
	});

	it("should render a Checkbox component with a custom checkbox props", () => {
		const { getByTestId } = render(
			<Checkbox fieldKey="test" checkBoxProps={{ "data-testid": "test" } as LeSafeAny} />
		);

		const checkbox = getByTestId("test");

		expect(checkbox).toBeTruthy();
	});

	it("should render a Checkbox component with disabled state", () => {
		let send = false;

		const { getByTestId } = render(
			<Checkbox
				fieldKey="test"
				state={{ disabled: true }}
				onChange={() => {
					send = true;
				}}
			/>
		);

		const checkbox = getByTestId("leuxCheckbox");

		expect(checkbox).toBeTruthy();
		expect(checkbox).toHaveClass("le-checkbox--disabled");

		fireEvent.click(checkbox);

		expect(send).toBeFalsy();
	});
});
