import { fireEvent, render, waitFor } from "@testing-library/react";
import React from "react";

import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import PMain from "../02_Pages/PMain";
import CMain from "../03_Controllers/CMain";
import { App } from "../App";
const mainStore = {
	pokemon: {
		count: 1154,
		next: "https://pokeapi.co/api/v2/pokemon?offset=4&limit=4",
		previous: null,
		results: [
			{
				name: "bulbasaur",
				url: "https://pokeapi.co/api/v2/pokemon/1/",
			},
			{
				name: "ivysaur",
				url: "https://pokeapi.co/api/v2/pokemon/2/",
			},
			{
				name: "venusaur",
				url: "https://pokeapi.co/api/v2/pokemon/3/",
			},
			{
				name: "charmander",
				url: "https://pokeapi.co/api/v2/pokemon/4/",
			},
		],
	},
	pokemonDetail: {
		id: 2,
		is_default: true,
		moves: [
			{
				move: {
					name: "razor-wind",
					url: "https://pokeapi.co/api/v2/move/13/",
				},
				version_group_details: [
					{
						level_learned_at: 0,
						move_learn_method: {
							name: "egg",
							url:
								"https://pokeapi.co/api/v2/move-learn-method/2/",
						},
						version_group: {
							name: "gold-silver",
							url: "https://pokeapi.co/api/v2/version-group/3/",
						},
					},
					{
						level_learned_at: 0,
						move_learn_method: {
							name: "egg",
							url:
								"https://pokeapi.co/api/v2/move-learn-method/2/",
						},
						version_group: {
							name: "crystal",
							url: "https://pokeapi.co/api/v2/version-group/4/",
						},
					},
				],
			},
			{
				move: {
					name: "swords-dance",
					url: "https://pokeapi.co/api/v2/move/14/",
				},
				version_group_details: [
					{
						level_learned_at: 0,
						move_learn_method: {
							name: "machine",
							url:
								"https://pokeapi.co/api/v2/move-learn-method/4/",
						},
						version_group: {
							name: "red-blue",
							url: "https://pokeapi.co/api/v2/version-group/1/",
						},
					},
					{
						level_learned_at: 0,
						move_learn_method: {
							name: "machine",
							url:
								"https://pokeapi.co/api/v2/move-learn-method/4/",
						},
						version_group: {
							name: "yellow",
							url: "https://pokeapi.co/api/v2/version-group/2/",
						},
					},
					{
						level_learned_at: 0,
						move_learn_method: {
							name: "tutor",
							url:
								"https://pokeapi.co/api/v2/move-learn-method/3/",
						},
						version_group: {
							name: "emerald",
							url: "https://pokeapi.co/api/v2/version-group/6/",
						},
					},
					{
						level_learned_at: 0,
						move_learn_method: {
							name: "tutor",
							url:
								"https://pokeapi.co/api/v2/move-learn-method/3/",
						},
						version_group: {
							name: "firered-leafgreen",
							url: "https://pokeapi.co/api/v2/version-group/7/",
						},
					},
					{
						level_learned_at: 0,
						move_learn_method: {
							name: "machine",
							url:
								"https://pokeapi.co/api/v2/move-learn-method/4/",
						},
						version_group: {
							name: "diamond-pearl",
							url: "https://pokeapi.co/api/v2/version-group/8/",
						},
					},
					{
						level_learned_at: 0,
						move_learn_method: {
							name: "machine",
							url:
								"https://pokeapi.co/api/v2/move-learn-method/4/",
						},
						version_group: {
							name: "platinum",
							url: "https://pokeapi.co/api/v2/version-group/9/",
						},
					},
					{
						level_learned_at: 0,
						move_learn_method: {
							name: "machine",
							url:
								"https://pokeapi.co/api/v2/move-learn-method/4/",
						},
						version_group: {
							name: "heartgold-soulsilver",
							url: "https://pokeapi.co/api/v2/version-group/10/",
						},
					},
					{
						level_learned_at: 0,
						move_learn_method: {
							name: "machine",
							url:
								"https://pokeapi.co/api/v2/move-learn-method/4/",
						},
						version_group: {
							name: "black-white",
							url: "https://pokeapi.co/api/v2/version-group/11/",
						},
					},
					{
						level_learned_at: 0,
						move_learn_method: {
							name: "machine",
							url:
								"https://pokeapi.co/api/v2/move-learn-method/4/",
						},
						version_group: {
							name: "black-2-white-2",
							url: "https://pokeapi.co/api/v2/version-group/14/",
						},
					},
					{
						level_learned_at: 0,
						move_learn_method: {
							name: "machine",
							url:
								"https://pokeapi.co/api/v2/move-learn-method/4/",
						},
						version_group: {
							name: "x-y",
							url: "https://pokeapi.co/api/v2/version-group/15/",
						},
					},
					{
						level_learned_at: 0,
						move_learn_method: {
							name: "machine",
							url:
								"https://pokeapi.co/api/v2/move-learn-method/4/",
						},
						version_group: {
							name: "omega-ruby-alpha-sapphire",
							url: "https://pokeapi.co/api/v2/version-group/16/",
						},
					},
					{
						level_learned_at: 0,
						move_learn_method: {
							name: "machine",
							url:
								"https://pokeapi.co/api/v2/move-learn-method/4/",
						},
						version_group: {
							name: "sun-moon",
							url: "https://pokeapi.co/api/v2/version-group/17/",
						},
					},
					{
						level_learned_at: 0,
						move_learn_method: {
							name: "machine",
							url:
								"https://pokeapi.co/api/v2/move-learn-method/4/",
						},
						version_group: {
							name: "ultra-sun-ultra-moon",
							url: "https://pokeapi.co/api/v2/version-group/18/",
						},
					},
					{
						level_learned_at: 0,
						move_learn_method: {
							name: "machine",
							url:
								"https://pokeapi.co/api/v2/move-learn-method/4/",
						},
						version_group: {
							name: "sword-shield",
							url: "https://pokeapi.co/api/v2/version-group/20/",
						},
					},
				],
			},
			{
				move: {
					name: "cut",
					url: "https://pokeapi.co/api/v2/move/15/",
				},
				version_group_details: [
					{
						level_learned_at: 0,
						move_learn_method: {
							name: "machine",
							url:
								"https://pokeapi.co/api/v2/move-learn-method/4/",
						},
						version_group: {
							name: "red-blue",
							url: "https://pokeapi.co/api/v2/version-group/1/",
						},
					},
					{
						level_learned_at: 0,
						move_learn_method: {
							name: "machine",
							url:
								"https://pokeapi.co/api/v2/move-learn-method/4/",
						},
						version_group: {
							name: "yellow",
							url: "https://pokeapi.co/api/v2/version-group/2/",
						},
					},
					{
						level_learned_at: 0,
						move_learn_method: {
							name: "machine",
							url:
								"https://pokeapi.co/api/v2/move-learn-method/4/",
						},
						version_group: {
							name: "gold-silver",
							url: "https://pokeapi.co/api/v2/version-group/3/",
						},
					},
					{
						level_learned_at: 0,
						move_learn_method: {
							name: "machine",
							url:
								"https://pokeapi.co/api/v2/move-learn-method/4/",
						},
						version_group: {
							name: "crystal",
							url: "https://pokeapi.co/api/v2/version-group/4/",
						},
					},
					{
						level_learned_at: 0,
						move_learn_method: {
							name: "machine",
							url:
								"https://pokeapi.co/api/v2/move-learn-method/4/",
						},
						version_group: {
							name: "ruby-sapphire",
							url: "https://pokeapi.co/api/v2/version-group/5/",
						},
					},
					{
						level_learned_at: 0,
						move_learn_method: {
							name: "machine",
							url:
								"https://pokeapi.co/api/v2/move-learn-method/4/",
						},
						version_group: {
							name: "emerald",
							url: "https://pokeapi.co/api/v2/version-group/6/",
						},
					},
					{
						level_learned_at: 0,
						move_learn_method: {
							name: "machine",
							url:
								"https://pokeapi.co/api/v2/move-learn-method/4/",
						},
						version_group: {
							name: "firered-leafgreen",
							url: "https://pokeapi.co/api/v2/version-group/7/",
						},
					},
					{
						level_learned_at: 0,
						move_learn_method: {
							name: "machine",
							url:
								"https://pokeapi.co/api/v2/move-learn-method/4/",
						},
						version_group: {
							name: "diamond-pearl",
							url: "https://pokeapi.co/api/v2/version-group/8/",
						},
					},
					{
						level_learned_at: 0,
						move_learn_method: {
							name: "machine",
							url:
								"https://pokeapi.co/api/v2/move-learn-method/4/",
						},
						version_group: {
							name: "platinum",
							url: "https://pokeapi.co/api/v2/version-group/9/",
						},
					},
					{
						level_learned_at: 0,
						move_learn_method: {
							name: "machine",
							url:
								"https://pokeapi.co/api/v2/move-learn-method/4/",
						},
						version_group: {
							name: "heartgold-soulsilver",
							url: "https://pokeapi.co/api/v2/version-group/10/",
						},
					},
					{
						level_learned_at: 0,
						move_learn_method: {
							name: "machine",
							url:
								"https://pokeapi.co/api/v2/move-learn-method/4/",
						},
						version_group: {
							name: "black-white",
							url: "https://pokeapi.co/api/v2/version-group/11/",
						},
					},
					{
						level_learned_at: 0,
						move_learn_method: {
							name: "machine",
							url:
								"https://pokeapi.co/api/v2/move-learn-method/4/",
						},
						version_group: {
							name: "colosseum",
							url: "https://pokeapi.co/api/v2/version-group/12/",
						},
					},
					{
						level_learned_at: 0,
						move_learn_method: {
							name: "machine",
							url:
								"https://pokeapi.co/api/v2/move-learn-method/4/",
						},
						version_group: {
							name: "xd",
							url: "https://pokeapi.co/api/v2/version-group/13/",
						},
					},
					{
						level_learned_at: 0,
						move_learn_method: {
							name: "machine",
							url:
								"https://pokeapi.co/api/v2/move-learn-method/4/",
						},
						version_group: {
							name: "black-2-white-2",
							url: "https://pokeapi.co/api/v2/version-group/14/",
						},
					},
					{
						level_learned_at: 0,
						move_learn_method: {
							name: "machine",
							url:
								"https://pokeapi.co/api/v2/move-learn-method/4/",
						},
						version_group: {
							name: "x-y",
							url: "https://pokeapi.co/api/v2/version-group/15/",
						},
					},
					{
						level_learned_at: 0,
						move_learn_method: {
							name: "machine",
							url:
								"https://pokeapi.co/api/v2/move-learn-method/4/",
						},
						version_group: {
							name: "omega-ruby-alpha-sapphire",
							url: "https://pokeapi.co/api/v2/version-group/16/",
						},
					},
				],
			},
			{
				move: {
					name: "bind",
					url: "https://pokeapi.co/api/v2/move/20/",
				},
				version_group_details: [
					{
						level_learned_at: 0,
						move_learn_method: {
							name: "tutor",
							url:
								"https://pokeapi.co/api/v2/move-learn-method/3/",
						},
						version_group: {
							name: "black-2-white-2",
							url: "https://pokeapi.co/api/v2/version-group/14/",
						},
					},
					{
						level_learned_at: 0,
						move_learn_method: {
							name: "tutor",
							url:
								"https://pokeapi.co/api/v2/move-learn-method/3/",
						},
						version_group: {
							name: "omega-ruby-alpha-sapphire",
							url: "https://pokeapi.co/api/v2/version-group/16/",
						},
					},
					{
						level_learned_at: 0,
						move_learn_method: {
							name: "tutor",
							url:
								"https://pokeapi.co/api/v2/move-learn-method/3/",
						},
						version_group: {
							name: "ultra-sun-ultra-moon",
							url: "https://pokeapi.co/api/v2/version-group/18/",
						},
					},
				],
			},
			{
				move: {
					name: "vine-whip",
					url: "https://pokeapi.co/api/v2/move/22/",
				},
				version_group_details: [
					{
						level_learned_at: 13,
						move_learn_method: {
							name: "level-up",
							url:
								"https://pokeapi.co/api/v2/move-learn-method/1/",
						},
						version_group: {
							name: "red-blue",
							url: "https://pokeapi.co/api/v2/version-group/1/",
						},
					},
					{
						level_learned_at: 13,
						move_learn_method: {
							name: "level-up",
							url:
								"https://pokeapi.co/api/v2/move-learn-method/1/",
						},
						version_group: {
							name: "yellow",
							url: "https://pokeapi.co/api/v2/version-group/2/",
						},
					},
					{
						level_learned_at: 10,
						move_learn_method: {
							name: "level-up",
							url:
								"https://pokeapi.co/api/v2/move-learn-method/1/",
						},
						version_group: {
							name: "gold-silver",
							url: "https://pokeapi.co/api/v2/version-group/3/",
						},
					},
					{
						level_learned_at: 10,
						move_learn_method: {
							name: "level-up",
							url:
								"https://pokeapi.co/api/v2/move-learn-method/1/",
						},
						version_group: {
							name: "crystal",
							url: "https://pokeapi.co/api/v2/version-group/4/",
						},
					},
					{
						level_learned_at: 10,
						move_learn_method: {
							name: "level-up",
							url:
								"https://pokeapi.co/api/v2/move-learn-method/1/",
						},
						version_group: {
							name: "ruby-sapphire",
							url: "https://pokeapi.co/api/v2/version-group/5/",
						},
					},
					{
						level_learned_at: 10,
						move_learn_method: {
							name: "level-up",
							url:
								"https://pokeapi.co/api/v2/move-learn-method/1/",
						},
						version_group: {
							name: "emerald",
							url: "https://pokeapi.co/api/v2/version-group/6/",
						},
					},
					{
						level_learned_at: 10,
						move_learn_method: {
							name: "level-up",
							url:
								"https://pokeapi.co/api/v2/move-learn-method/1/",
						},
						version_group: {
							name: "firered-leafgreen",
							url: "https://pokeapi.co/api/v2/version-group/7/",
						},
					},
					{
						level_learned_at: 9,
						move_learn_method: {
							name: "level-up",
							url:
								"https://pokeapi.co/api/v2/move-learn-method/1/",
						},
						version_group: {
							name: "diamond-pearl",
							url: "https://pokeapi.co/api/v2/version-group/8/",
						},
					},
					{
						level_learned_at: 9,
						move_learn_method: {
							name: "level-up",
							url:
								"https://pokeapi.co/api/v2/move-learn-method/1/",
						},
						version_group: {
							name: "platinum",
							url: "https://pokeapi.co/api/v2/version-group/9/",
						},
					},
					{
						level_learned_at: 9,
						move_learn_method: {
							name: "level-up",
							url:
								"https://pokeapi.co/api/v2/move-learn-method/1/",
						},
						version_group: {
							name: "heartgold-soulsilver",
							url: "https://pokeapi.co/api/v2/version-group/10/",
						},
					},
					{
						level_learned_at: 9,
						move_learn_method: {
							name: "level-up",
							url:
								"https://pokeapi.co/api/v2/move-learn-method/1/",
						},
						version_group: {
							name: "black-white",
							url: "https://pokeapi.co/api/v2/version-group/11/",
						},
					},
					{
						level_learned_at: 10,
						move_learn_method: {
							name: "level-up",
							url:
								"https://pokeapi.co/api/v2/move-learn-method/1/",
						},
						version_group: {
							name: "colosseum",
							url: "https://pokeapi.co/api/v2/version-group/12/",
						},
					},
					{
						level_learned_at: 10,
						move_learn_method: {
							name: "level-up",
							url:
								"https://pokeapi.co/api/v2/move-learn-method/1/",
						},
						version_group: {
							name: "xd",
							url: "https://pokeapi.co/api/v2/version-group/13/",
						},
					},
					{
						level_learned_at: 9,
						move_learn_method: {
							name: "level-up",
							url:
								"https://pokeapi.co/api/v2/move-learn-method/1/",
						},
						version_group: {
							name: "black-2-white-2",
							url: "https://pokeapi.co/api/v2/version-group/14/",
						},
					},
					{
						level_learned_at: 9,
						move_learn_method: {
							name: "level-up",
							url:
								"https://pokeapi.co/api/v2/move-learn-method/1/",
						},
						version_group: {
							name: "x-y",
							url: "https://pokeapi.co/api/v2/version-group/15/",
						},
					},
					{
						level_learned_at: 9,
						move_learn_method: {
							name: "level-up",
							url:
								"https://pokeapi.co/api/v2/move-learn-method/1/",
						},
						version_group: {
							name: "omega-ruby-alpha-sapphire",
							url: "https://pokeapi.co/api/v2/version-group/16/",
						},
					},
					{
						level_learned_at: 7,
						move_learn_method: {
							name: "level-up",
							url:
								"https://pokeapi.co/api/v2/move-learn-method/1/",
						},
						version_group: {
							name: "sun-moon",
							url: "https://pokeapi.co/api/v2/version-group/17/",
						},
					},
					{
						level_learned_at: 9,
						move_learn_method: {
							name: "level-up",
							url:
								"https://pokeapi.co/api/v2/move-learn-method/1/",
						},
						version_group: {
							name: "sun-moon",
							url: "https://pokeapi.co/api/v2/version-group/17/",
						},
					},
					{
						level_learned_at: 9,
						move_learn_method: {
							name: "level-up",
							url:
								"https://pokeapi.co/api/v2/move-learn-method/1/",
						},
						version_group: {
							name: "ultra-sun-ultra-moon",
							url: "https://pokeapi.co/api/v2/version-group/18/",
						},
					},
					{
						level_learned_at: 5,
						move_learn_method: {
							name: "level-up",
							url:
								"https://pokeapi.co/api/v2/move-learn-method/1/",
						},
						version_group: {
							name: "lets-go-pikachu-lets-go-eevee",
							url: "https://pokeapi.co/api/v2/version-group/19/",
						},
					},
					{
						level_learned_at: 3,
						move_learn_method: {
							name: "level-up",
							url:
								"https://pokeapi.co/api/v2/move-learn-method/1/",
						},
						version_group: {
							name: "sword-shield",
							url: "https://pokeapi.co/api/v2/version-group/20/",
						},
					},
				],
			},
		],
		name: "ivysaur",
		sprites: {
			back_default:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/2.png",
			back_female: null,
			back_shiny:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/2.png",
			back_shiny_female: null,
			front_default:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
			front_female: null,
			front_shiny:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/2.png",
			front_shiny_female: null,
		},

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
		weight: 130,
	},
};

const mainStoreWOPokemon = {
	pokemon: null,
	pokemonDetail: null,
};

describe("App call", () => {
	const mockStore = configureStore();
	let store, wrapper;
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
		main: mainStore,
	};

	it("Render App with initial state main", () => {
		store = mockStore(initialState);
		const { getByText } = render(
			<Provider store={store}>
				<App />
			</Provider>
		);

		expect(getByText("Simple App")).not.toBeNull();
	});

	it("Render App without pokemonDetail", () => {
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
			main: mainStoreWOPokemon,
		};
		store = mockStore(initialState);
		const { getByText } = render(
			<Provider store={store}>
				<App />
			</Provider>
		);

		expect(getByText("Simple App")).not.toBeNull();
	});
});
