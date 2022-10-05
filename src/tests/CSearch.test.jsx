import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { CSearch } from "../01_Components/CSearch";

describe("Component CSearch", () => {
	test("If CSearch is rendered and enter with value", async () => {
		const valueSearch = "bulbasaur";
		const onSearch = jest.fn();

		render(<CSearch onSearch={onSearch} />);

		const search = screen.getByPlaceholderText("Buscar");

		expect(search).toBeInTheDocument();

		fireEvent.focus(search);
		fireEvent.change(search, { target: { value: valueSearch } });

		await waitFor(() => {
			fireEvent.keyDown(search, {
				keyCode: 13,
				which: 13,
			});
		});

		expect(onSearch).toBeCalledTimes(1);
	});

	test("If CSearch is rendered and enter without value", async () => {
		const valueSearch = "";
		const onSearch = jest.fn();

		render(<CSearch onSearch={onSearch} />);

		const search = screen.getByPlaceholderText("Buscar");

		expect(search).toBeInTheDocument();

		fireEvent.focus(search);
		fireEvent.change(search, { target: { value: valueSearch } });

		await waitFor(() => {
			fireEvent.keyDown(search, {
				keyCode: 12,
				which: 12,
			});
		});

		expect(onSearch).toBeCalledTimes(0);
	});
});
