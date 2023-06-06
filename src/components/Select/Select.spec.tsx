import { fireEvent, render } from "@testing-library/react";

import "@testing-library/jest-dom";
import React from "react";
import { Select } from "./Select";

describe("Select component test", () => {
	it("should render a Select component", () => {
		const { getByTestId } = render(<Select />);

		const select = getByTestId("leuxSelect");

		expect(select).toBeTruthy();
	});

	it("should render a Select component with a placeholder", () => {
		const { getByTestId } = render(<Select placeholder="Select an option" />);

		const select = getByTestId("leuxSelect");

		expect(select).toBeTruthy();
		expect(select).toHaveTextContent("Select an option");
	});

	it("should render a Select component with a children", () => {
		const { getByTestId } = render(
			<Select>
				<option value="1">Option 1</option>
				<option value="2">Option 2</option>
			</Select>
		);

		const select = getByTestId("leuxSelect");

		expect(select).toBeTruthy();
		expect(select).toHaveTextContent("Option 1");
		expect(select).toHaveTextContent("Option 2");
	});

	it("should render a Select component with an options", () => {
		const { getByTestId } = render(
			<Select
				options={[
					{ value: "1", label: "Option 1" },
					{ value: "2", label: "Option 2" },
				]}
			/>
		);

		const select = getByTestId("leuxSelect");

		expect(select).toBeTruthy();
		expect(select).toHaveTextContent("Option 1");
		expect(select).toHaveTextContent("Option 2");
	});

	it("should render a custom Select component", () => {
		const { getByTestId } = render(
			<Select customClass="custom-class" customStyles={{ color: "red" }} fieldKey="custom-select" />
		);

		const select = getByTestId("leuxSelect");

		expect(select).toBeTruthy();
		expect(select).toHaveClass("custom-class");
		expect(select).toHaveStyle("color: red");
	});

	it("should render a disabled Select component", () => {
		const { getByTestId } = render(<Select state={{ disabled: true }} />);

		const select = getByTestId("leuxSelect");

		expect(select).toBeTruthy();
		expect(select).toBeDisabled();
	});

	it("should render a Select component with a default value", () => {
		const { getByTestId } = render(
			<Select
				options={[
					{
						value: "1",
						label: "Option 1",
					},
				]}
			/>
		);

		const select = getByTestId("leuxSelect");

		expect(select).toBeTruthy();
		expect(select).toHaveValue("1");
	});

	it("should render an outlined Select component ", () => {
		const { getByTestId } = render(<Select variant="outlined" />);

		const select = getByTestId("leuxSelect");

		expect(select).toBeTruthy();
		expect(select).toHaveClass("le-select--outlined");
	});

	it("should render a small Select component ", () => {
		const { getByTestId } = render(<Select size="small" />);

		const select = getByTestId("leuxSelect");

		expect(select).toBeTruthy();
		expect(select).toHaveClass("le-select--small");
	});

	it("should render a Select component and change value from 1 to 2", () => {
		let value = "1";

		const { getByTestId } = render(
			<Select
				options={[
					{
						value: "1",
						label: "Option 1",
					},
					{
						value: "2",
						label: "Option 2",
					},
				]}
				onChange={(e) => {
					value = e.target.value;
				}}
			/>
		);

		const select = getByTestId("leuxSelect");

		expect(select).toBeTruthy();

		fireEvent.change(select, { target: { value: "2" } });

		expect(select).toHaveValue("2");

		expect(value).toBe("2");
	});

	it("should render a Select component with a disabled option", () => {
		const { getByTestId, getAllByTestId } = render(
			<Select
				options={[
					{
						value: "1",
						label: "Option 1",
					},
					{
						value: "2",
						label: "Option 2",
						disabled: true,
					},
				]}
			/>
		);

		const select = getByTestId("leuxSelect");

		expect(select).toBeTruthy();

		expect(select).toHaveValue("1");

		const options = getAllByTestId("leuxSelectOption");

		expect(options[0]).toHaveTextContent("Option 1");
		expect(options[1]).toHaveTextContent("Option 2");

		expect(options[0]).not.toBeDisabled();
		expect(options[1]).toBeDisabled();
	});
});
