import { render } from "@testing-library/react";
import React from "react";

import "@testing-library/jest-dom";
import { Avatar } from "./Avatar";

describe("Box component test", () => {
	it("should render a Box component", () => {
		const { getByTestId } = render(
			<Avatar
				src="https://images.unsplash.com/photo-1671718648038-1994195a9f5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
				size="small"
			/>
		);

		const avatar = getByTestId("leuxAvatar");

		expect(avatar).toBeTruthy();
	});
});
