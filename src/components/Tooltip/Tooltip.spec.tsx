import { fireEvent, render } from "@testing-library/react";

import { Tooltip } from "./Tooltip";
import "@testing-library/jest-dom";
import React from "react";

describe("Tooltip component test", () => {
	it("should render Tooltip component", () => {
		const { getByTestId } = render(
			<Tooltip title="hello">
				<span>hover me</span>
			</Tooltip>
		);

		const leuxTooltipProvider = getByTestId("leuxTooltipProvider");

		expect(leuxTooltipProvider).toBeTruthy();

		fireEvent.mouseEnter(leuxTooltipProvider);

		const leuxTooltip = getByTestId("leuxTooltip");

		expect(leuxTooltip).toBeTruthy();

		expect(leuxTooltip).toHaveTextContent("hello");
	});

	it("should render a Tooltip component and triggers Mouse enter and leave", () => {
		const { getByTestId } = render(
			<Tooltip title="hello">
				<span>hover me</span>
			</Tooltip>
		);

		const leuxTooltipProvider = getByTestId("leuxTooltipProvider");

		fireEvent.mouseEnter(leuxTooltipProvider);

		const leuxTooltip = getByTestId("leuxTooltip");

		expect(leuxTooltip).toBeTruthy();

		fireEvent.mouseLeave(leuxTooltip);
	});

	it("should render a Tooltip component with a custom class and left direction", () => {
		const { getByTestId } = render(
			<Tooltip title="hello" customClass="custom-class" direction="left">
				<span>hover me</span>
			</Tooltip>
		);

		const leuxTooltipProvider = getByTestId("leuxTooltipProvider");

		fireEvent.mouseEnter(leuxTooltipProvider);

		const leuxTooltip = getByTestId("leuxTooltip");

		expect(leuxTooltip).toBeTruthy();
		expect(leuxTooltip).toHaveClass("le-tooltip--left");
		expect(leuxTooltip).toHaveClass("custom-class");
	});

	it("should render a primary Tooltip component", () => {
		const { getByTestId } = render(
			<Tooltip title="hello" theme="primary">
				<span>hover me</span>
			</Tooltip>
		);

		const leuxTooltipProvider = getByTestId("leuxTooltipProvider");

		expect(leuxTooltipProvider).toBeTruthy();

		fireEvent.mouseEnter(leuxTooltipProvider);

		const leuxTooltip = getByTestId("leuxTooltip");

		expect(leuxTooltip).toBeTruthy();

		expect(leuxTooltip).toHaveTextContent("hello");
		expect(leuxTooltip).toHaveClass("le-tooltip--primary");
	});
});
