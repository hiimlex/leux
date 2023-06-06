import { render } from "@testing-library/react";

import { Input } from "./Input";
import "@testing-library/jest-dom";
import React from "react";

describe("Input component test", () => {
	it("should render a Input text component", () => {
		const { getByTestId } = render(<Input fieldKey="test" />);

		const input = getByTestId("leuxInput");

		expect(input).toBeTruthy();
	});

	it("should render a Input component with type password", () => {
		const { getByTestId } = render(<Input type="password" fieldKey="test" />);

		const input = getByTestId("leuxInput");

		expect(input).toBeTruthy();
		expect(input).toHaveAttribute("type", "password");
	});

	it("should render a disabled Input component", () => {
		const { getByTestId } = render(
			<Input type="text" fieldKey="test" state={{ disabled: true }} />
		);

		const input = getByTestId("leuxInput");

		expect(input).toBeTruthy();
		expect(input).toHaveAttribute("disabled");
		expect(input).toBeDisabled();
	});

	it("should render a Input component with a placeholder", () => {
		const { getByTestId } = render(<Input type="text" fieldKey="test" placeholder="test" />);

		const input = getByTestId("leuxInput");

		expect(input).toBeTruthy();
		expect(input).toHaveAttribute("placeholder", "test");
	});

	it("should render a Input component with a custom class and styles", () => {
		const { getByTestId } = render(
			<Input
				type="text"
				fieldKey="test"
				customClass="test"
				customStyles={{ backgroundColor: "red" }}
			/>
		);

		const input = getByTestId("leuxInput");

		expect(input).toBeTruthy();
		expect(input).toHaveClass("test");
		expect(input).toHaveStyle("background-color: red");
	});

	it("should render a Input component with small size and outlined variant", () => {
		const { getByTestId } = render(
			<Input type="text" fieldKey="test" size="small" variant="outlined" />
		);

		const input = getByTestId("leuxInput");

		expect(input).toBeTruthy();
		expect(input).toHaveClass("le-input--small");
		expect(input).toHaveClass("le-input--outlined");
	});
});
