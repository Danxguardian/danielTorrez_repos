import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { backgroundByType, imagePokemon } from "../../04_Constans/constans";
import capitalizeFirstLetter from "../../06_Utils/utils";
import { getService } from "../../07_Services/getServices";
import "./index.css";

export const CPokeCard = ({ pokemon, findByID }) => {
	const { name, url } = pokemon;
	const [typePkmn, setTypePkmn] = useState(null);

	const id = url
		.slice(0, -1)
		.split("/")
		.pop();

	useEffect(() => {
		getService(url)
			.then((data) => setTypePkmn(data.data.types[0].type.name))
			.catch((error) => {
				throw error;
			});
	}, [id]);

	return (
		<div
			className={"row poke-card center-text"}
			style={{ background: backgroundByType[typePkmn] }}
			onClick={() => findByID(id)}
		>
			<img
				className="poke-card-img"
				src={imagePokemon.replace("{id}", id)}
			/>
			<h5>{`#${id}`}</h5>
			<h4>{capitalizeFirstLetter(name)}</h4>
		</div>
	);
};
