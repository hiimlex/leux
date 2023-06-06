import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import React from "react";
import { OverlayProvider } from "./OverlayProvider";

const OverlayModalTest = () => {
	return <div></div>;
};

const OverlayToastTest = () => {
	return <div></div>;
};

describe("OverlayProvider test", () => {
	it("should render a Modal Component", () => {
		const { getByText, getByTestId } = render(
			<OverlayProvider>
				<OverlayModalTest></OverlayModalTest>
			</OverlayProvider>
		);
	});

	it("should render a Toast Component", () => {
		const { getByText, getByTestId } = render(
			<OverlayProvider>
				<OverlayToastTest></OverlayToastTest>
			</OverlayProvider>
		);
	});
});
