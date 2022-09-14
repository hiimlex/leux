import { render } from "@testing-library/react";
import React from "react";

import { Button } from "./Button";

describe("Button test", () => {
	test("renders Button component", () => {
		render(<Button>test</Button>);
	});
});
