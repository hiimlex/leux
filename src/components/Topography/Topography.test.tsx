import { render } from "@testing-library/react";
import React from "react";

import { Topography } from "./Topography";

describe("LeTopography test", () => {
	it("should render a Topography H1 component", () => {
		render(<Topography type="h1" children="Test" />);
	});
});
