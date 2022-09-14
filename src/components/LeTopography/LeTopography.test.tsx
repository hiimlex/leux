import React from "react";
import { render } from "@testing-library/react";

import LeTopography from "./LeTopography";

describe("LeTopography test", () => {
	test("renders LeTopography component", () => {
		render(<LeTopography type="h1" children="Test" />);
	});
});
