import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CPokeCardDetail } from "../01_Components/CPokeCardDetail";

import {
	getPokeDetailRequest,
	getPokeRequest,
} from "../05_Store/Actions/AMain";
import { showModal } from "../05_Store/Actions/AModal";
const CMain = ({ RenderComponent }) => {
	const dispatch = useDispatch();
	const stateForWorks = useSelector((state) => state.main);
	const pokemonResultList = stateForWorks.pokemon || {};
	const pokemonDetail = stateForWorks.pokemonDetail || null;

	const mainJSONData = {
		pokemonResultList,
		pokemonDetail,
	};

	useEffect(() => {
		if (pokemonDetail)
			dispatch(
				showModal("", <CPokeCardDetail pokemon={pokemonDetail} />)
			);
	}, [pokemonDetail]);

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
		if (id.length > 0) {
			id = id.toLowerCase();
			dispatch(getPokeDetailRequest({ id }));
		}
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
