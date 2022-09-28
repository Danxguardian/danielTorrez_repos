import {
	GET_POKE_REQUEST,
	GET_POKE_SUCCESS,
	GET_POKE_ERROR,
	GET_POKE_DETAIL_REQUEST,
	GET_POKE_DETAIL_SUCCESS,
	GET_POKE_DETAIL_ERROR,
} from "./actionTypes";

const getPokeRequest = (payload) => {
	return { type: GET_POKE_REQUEST, payload: payload };
};

const getPokeSuccess = (payload) => {
	return { type: GET_POKE_SUCCESS, payload: payload };
};
const getPokeError = ({ error }) => {
	return { type: GET_POKE_ERROR, payload: error };
};

const getPokeDetailRequest = (id) => {
	return { type: GET_POKE_DETAIL_REQUEST, payload: id };
};

const getPokeDetailSuccess = (payload) => {
	return { type: GET_POKE_DETAIL_SUCCESS, payload: payload };
};
const getPokeDetailError = ({ error }) => {
	return { type: GET_POKE_DETAIL_ERROR, payload: error };
};

export {
	getPokeRequest,
	getPokeSuccess,
	getPokeError,
	getPokeDetailRequest,
	getPokeDetailSuccess,
	getPokeDetailError,
};

export default {
	getPokeRequest,
	getPokeSuccess,
	getPokeError,
	getPokeDetailRequest,
	getPokeDetailSuccess,
	getPokeDetailError,
};
