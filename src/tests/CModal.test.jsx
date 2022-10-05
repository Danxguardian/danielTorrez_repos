import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import React from "react";

import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { CModal } from "../01_Components/CModal";

describe("Component Modal", () => {
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

	beforeEach(() => {
		store = mockStore(initialState);
		render(
			<Provider store={store}>
				<CModal
					type={2}
					title={"Dummy Test"}
					message={"Test Message"}
					btnAccept={"Aceptar"}
					btnCancel={"Cancel"}
					btnAcceptFunc={() => {}}
					btnCancelFunc={() => {}}
				/>
			</Provider>
		);
	});

	it("If CModal no crash", () => {
		const modalTitle = screen.getByText("Dummy Test");
		expect(modalTitle).toBeInTheDocument();
	});

	it("If click accept/cancel", async () => {
		const buttonAccept = screen.getByText("Aceptar");
		const buttonCancel = screen.getByText("Cancel");

		// simulate button click
		fireEvent.click(buttonAccept);
		fireEvent.click(buttonCancel);
	});
});
