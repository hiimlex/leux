import { render } from "@testing-library/react";
import React from "react";

import { Topography } from "./Topography";

describe("LeTopography test", () => {
	test("renders LeTopography component", () => {
		render(<Topography type="h1" children="Test" />);
	});
});
