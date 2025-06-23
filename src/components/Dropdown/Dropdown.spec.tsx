import { render, fireEvent } from "@testing-library/react";

import "@testing-library/jest-dom";
import React from "react";
import { Dropdown } from "./Dropdown";

describe("Dropdown component test", () => {
	it("should render a anchor Button with a Dropdown component", () => {
		const { getByTestId } = render(<Dropdown.Root anchor={<button>anchor</button>} />);

		const anchor = getByTestId("leuxDropdownAnchor");

		expect(anchor).toBeTruthy();
	});

	it("should renders a dropdown button", () => {
		const { getByTestId } = render(<Dropdown.Root />);
		const dropdownButton = getByTestId("leuxDropdownAnchor");
		expect(dropdownButton).toBeInTheDocument();
	});

	it("should opens and closes the dropdown menu on click", () => {
		const { getByTestId } = render(
			<Dropdown.Root>
				<Dropdown.Item>Option 1</Dropdown.Item>
				<Dropdown.Item>Option 2</Dropdown.Item>
			</Dropdown.Root>
		);

		const dropdownButton = getByTestId("leuxDropdownAnchor");

		fireEvent.click(dropdownButton);

		const dropdownMenu = getByTestId("leuxDropdownMenu");

		expect(dropdownMenu).toBeVisible();

		fireEvent.click(dropdownButton);

		expect(dropdownMenu).not.toBeVisible();
	});

	it("should closes the dropdown menu on outside click", () => {
		const { getByTestId } = render(
			<>
				<Dropdown.Root>
					<Dropdown.Item>Option 1</Dropdown.Item>
					<Dropdown.Item>Option 2</Dropdown.Item>
				</Dropdown.Root>
				<div data-testid="outside-click-target"></div>
			</>
		);

		const dropdownButton = getByTestId("leuxDropdownAnchor");
		fireEvent.click(dropdownButton);

		const outsideClickTarget = getByTestId("outside-click-target");

		const dropdownMenu = getByTestId("leuxDropdownMenu");
		expect(dropdownMenu).toBeVisible();

		fireEvent.click(outsideClickTarget);

		expect(dropdownMenu).not.toBeVisible();
	});

	it("should closes the dropdown menu on item click", () => {
		const { getByTestId, getByText } = render(
			<Dropdown.Root>
				<Dropdown.Item>Option 1</Dropdown.Item>
				<Dropdown.Item>Option 2</Dropdown.Item>
			</Dropdown.Root>
		);
		const dropdownButton = getByTestId("leuxDropdownAnchor");
		fireEvent.click(dropdownButton);

		const dropdownMenu = getByTestId("leuxDropdownMenu");
		expect(dropdownMenu).toBeVisible();

		const option1 = getByText("Option 1");
		fireEvent.click(option1);

		expect(dropdownMenu).not.toBeVisible();
	});

	it("should renders a separator", () => {
		const { getByTestId } = render(
			<Dropdown.Root>
				<Dropdown.Item>Option 1</Dropdown.Item>
				<Dropdown.Separator />
				<Dropdown.Item>Option 2</Dropdown.Item>
			</Dropdown.Root>
		);

		const dropdownButton = getByTestId("leuxDropdownAnchor");

		fireEvent.click(dropdownButton);

		const separator = getByTestId("leuxDropdownSeparator");
		expect(separator).toBeInTheDocument();
	});
});
