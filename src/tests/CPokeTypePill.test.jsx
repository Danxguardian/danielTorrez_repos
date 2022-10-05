import React from "react";
import { render, screen } from "@testing-library/react";
import { CPokeTypePill } from "../01_Components/CPokeTypePill";

describe("Component CPokeTypePill", () => {
	test("If CPokeTypePill is rendered", () => {
		render(<CPokeTypePill children={"Grass"} />);

		const type = screen.getByText("Grass");
		expect(type).toBeInTheDocument();
	});
});
