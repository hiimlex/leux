import { fireEvent, render } from "@testing-library/react";
import React from "react";
import { Button } from "./Button";

import "@testing-library/jest-dom";

describe("Button component test", () => {
	it("should render Button component", () => {
		const { getByTestId } = render(<Button children="Button test" />);

		const button = getByTestId("leuxButton");

		expect(button).toBeTruthy();
	});

	it("should render a Outlined Secondary Button component", () => {
		const { getByTestId } = render(
			<Button colorScheme="secondary" variant="outlined" size="large">
				Secondary Button
			</Button>
		);

		const button = getByTestId("leuxButton");

		expect(button).toHaveClass("le-button--outlined le-button--secondary le-button--large");
	});

	it("should create a Button and increment when click action is triggered", () => {
		let testIncrement = 0;

		const cb = () => {
			testIncrement++;
		};

		const { getByTestId } = render(<Button children="Increment" onClick={cb} />);

		const button = getByTestId("leuxButton");
		fireEvent.click(button);

		expect(testIncrement).toBe(1);
	});

	it("should create a Disabled Button and not increment when click action is triggered", () => {
		let testIncrement = 0;

		const cb = () => {
			testIncrement++;
		};

		const { getByTestId } = render(
			<Button children="Increment" onClick={cb} state={{ disabled: true }} />
		);

		const button = getByTestId("leuxButton");
		button.click();

		expect(testIncrement).toBe(0);
	});

	it("should create a Button with custom class and styles", () => {
		const { getByTestId } = render(
			<Button children="Custom Button" customClass="custom-class" customStyles={{ color: "red" }} />
		);

		const button = getByTestId("leuxButton");

		expect(button).toHaveClass("custom-class");
		expect(button).toHaveStyle("color: red");
	});
});
