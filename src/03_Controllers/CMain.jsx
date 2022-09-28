import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
	getPokeDetailRequest,
	getPokeRequest,
} from "../05_Store/Actions/AMain";
const CMain = ({ RenderComponent }) => {
	const dispatch = useDispatch();
	const stateForWorks = useSelector((state) => state.main);
	const pokemonResultList = stateForWorks.pokemon || {};
	const pokemonDetail = stateForWorks.pokemonDetail || null;

	const mainJSONData = {
		pokemonResultList,
		pokemonDetail,
	};

	const previous = () => {
		if (pokemonResultList.previous) {
			dispatch(getPokeRequest({ url: pokemonResultList.previous }));
		}
	};

	const next = () => {
		if (pokemonResultList.next) {
			dispatch(getPokeRequest({ url: pokemonResultList.next }));
		}
	};

	const findByID = (id) => {
		dispatch(getPokeDetailRequest({ id }));
	};

	const onSearch = (id) => {
		dispatch(getPokeDetailRequest({ id }));
	};

	const propsToComponent = {
		mainJSONData,
		previous,
		next,
		findByID,
		onSearch,
	};

	return <RenderComponent {...propsToComponent} />;
};

export default CMain;
