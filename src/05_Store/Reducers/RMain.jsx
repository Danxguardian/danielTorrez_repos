import * as Types from "../Actions/actionTypes";
const INIT_STATE = {};

const mainReducer = (state = INIT_STATE, action) => {
	switch (action.type) {
		case Types.GET_POKE_REQUEST: {
			return { ...state };
		}
		case Types.GET_POKE_SUCCESS: {
			return { ...state, pokemon: action.payload };
		}
		case Types.GET_POKE_ERROR: {
			return { ...state, error: action.payload };
		}
		case Types.GET_POKE_DETAIL_REQUEST: {
			return { ...state };
		}
		case Types.GET_POKE_DETAIL_SUCCESS: {
			return { ...state, pokemonDetail: action.payload };
		}
		case Types.GET_POKE_DETAIL_ERROR: {
			return { ...state, error: action.payload };
		}
		default:
			return state;
	}
};

export default mainReducer;
