import { render } from "@testing-library/react";

import "@testing-library/jest-dom";
import React from "react";
import { Progress } from "./Progress";
import { TestId } from "../../types";

describe("Progress component test", () => {
	it("should render with default props", () => {
		const { getByTestId } = render(<Progress progress={50} />);

		const progressElement = getByTestId(TestId.Progress);
		const progressBarElement = getByTestId(TestId.ProgressBar);
		expect(progressElement).toBeInTheDocument();
		expect(progressBarElement).toBeInTheDocument();
	});

	it("should render with custom color", () => {
		const { getByTestId } = render(<Progress progress={50} customColor="red" />);

		const progressElement = getByTestId(TestId.Progress);
		expect(progressElement).toBeInTheDocument();
		const progressBarElement = getByTestId(TestId.ProgressBar);
		expect(progressBarElement).toBeInTheDocument();
		expect(progressBarElement).toHaveStyle("--customColor: red");
	});

	it("should check if progress bar width is correct", () => {
		const { getByTestId } = render(<Progress progress={75} width={100} />);

		const progressElement = getByTestId(TestId.Progress);
		expect(progressElement).toBeInTheDocument();
		expect(progressElement).toHaveStyle("width: 100px");
		const progressBarElement = getByTestId(TestId.ProgressBar);
		expect(progressBarElement).toHaveStyle("--progress: 75%");
	});

	it("should render with custom progress text", () => {
		const { getByTestId } = render(<Progress progress={30} progressText="Loading..." />);

		const progressElement = getByTestId(TestId.Progress);
		expect(progressElement).toBeInTheDocument();
		const infoElement = getByTestId(TestId.ProgressInfo);
		expect(infoElement).toHaveTextContent("Loading...");
	});

	it("should apply active class when isActive", () => {
		const { getByTestId } = render(<Progress progress={50} isActive />);

		const progressElement = getByTestId(TestId.Progress);
		expect(progressElement).toHaveClass("le-progress--active");
	});

	it("should render with icon", () => {
		const icon = <span data-testid="icon">Icon</span>;
		const { getByTestId } = render(<Progress progress={50} icon={icon} showIcon />);

		const progressElement = getByTestId(TestId.Progress);
		expect(progressElement).toBeInTheDocument();
		const iconElement = getByTestId("icon");
		expect(iconElement).toBeInTheDocument();
		expect(iconElement).toHaveTextContent("Icon");
	});
});
