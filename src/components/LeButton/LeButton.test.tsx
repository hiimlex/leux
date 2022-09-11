import React from "react";
import { render } from "@testing-library/react";

import LeButton from "./LeButton";

describe("Button", () => {
	test("renders Button component", () => {
		render(<LeButton />);
	});
});
