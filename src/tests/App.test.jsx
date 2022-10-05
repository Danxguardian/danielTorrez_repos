import { render } from "@testing-library/react";
import React from "react";

import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { App } from "../App";

const fakePkmn = {
	id: 1,
	name: "bulbasaur",
	order: 1,
	past_types: [],
	types: [
		{
			slot: 1,
			type: {
				name: "grass",
				url: "https://pokeapi.co/api/v2/type/12/",
			},
		},
		{
			slot: 2,
			type: {
				name: "poison",
				url: "https://pokeapi.co/api/v2/type/4/",
			},
		},
	],
};

describe("App call", () => {
	const initialState = {
		modal: {
			isShow: true,
			default: {
				type: 1,
				title: "Seleccione una acción",
				message: "Por favor seleccione la acción a realizar",
				accept: "Aceptar",
				cancel: "Cancelar",
			},
		},
		loader: {
			status: true,
			default: {
				title: "Espere un momento, por favor",
			},
		},
		main: {},
	};
	const mockStore = configureStore();
	let store, wrapper;

	it("Render App", () => {
		store = mockStore(initialState);
		const { getByText } = render(
			<Provider store={store}>
				<App />
			</Provider>
		);

		expect(getByText("Simple App")).not.toBeNull();
	});
});
