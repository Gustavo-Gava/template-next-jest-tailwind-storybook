import React from "react";
import { render, screen } from "@testing-library/react";

import { Button } from "./index";

describe("Button", () => {
	it("renders a button", () => {
		render(<Button>Button</Button>);
		const button = screen.getByRole("button", { name: /button/i });
		expect(button).toBeInTheDocument();
	});
});
