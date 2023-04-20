import { render } from "@testing-library/react";
import React from "react";

import "@testing-library/jest-dom";
import { Avatar } from "./Avatar";

describe("Avatar component test", () => {
	it("should render an Avatar component", () => {
		const { getByTestId } = render(
			<Avatar src="https://avatars.githubusercontent.com/u/49082043?v=4" />
		);

		const avatar = getByTestId("leuxAvatar");

		expect(avatar).toBeTruthy();
	});

	it("should render an Avatar component component with small size", () => {
		const { getByTestId } = render(
			<Avatar src="https://avatars.githubusercontent.com/u/49082043?v=4" size="small" />
		);

		const avatar = getByTestId("leuxAvatar");

		expect(avatar).toHaveClass("le-avatar--small");
	});

	it("should display an Avatar component src as text", () => {
		const { getByTestId } = render(<Avatar src="simple text" asText />);

		const avatar = getByTestId("leuxAvatar");

		expect(avatar).toHaveTextContent("ST");
	});

	it("should display an Avatar component with size equal to 48px", () => {
		const { getByTestId } = render(
			<Avatar src="https://avatars.githubusercontent.com/u/49082043?v=4" customSize={48} />
		);

		const avatar = getByTestId("leuxAvatar");

		expect(avatar).toHaveStyle("width: 48px; height: 48px;");
	});

	it("should display an Avatar component with custom styles", () => {
		const { getByTestId } = render(
			<Avatar
				src="test text"
				customClass="le-color-bg--primary"
				customStyles={{ width: "52px", height: "52px" }}
				asText
			/>
		);

		const avatar = getByTestId("leuxAvatar");

		expect(avatar).toHaveStyle("width: 52px; height: 52px;");
	});
});
