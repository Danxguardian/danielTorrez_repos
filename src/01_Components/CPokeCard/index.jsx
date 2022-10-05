import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { backgroundByType, imagePokemon } from "../../04_Constans/constans";
import capitalizeFirstLetter from "../../06_Utils/utils";
import { getService } from "../../07_Services/getServices";
import { CPokeTypePill } from "../CPokeTypePill";
import "./index.css";

export const CPokeCard = ({ pokemon, findByID }) => {
	const { name, url } = pokemon;
	const [typePkmn, setTypePkmn] = useState(null);

	const [firstType, setFirstType] = useState(backgroundByType["normal"]);

	const id = url
		.slice(0, -1)
		.split("/")
		.pop();

	useEffect(() => {
		getService(url)
			.then((data) => setTypePkmn(data.data.types))
			.catch((error) => {
				throw error;
			});
	}, [id]);

	useEffect(() => {
		if (typePkmn)
			setFirstType(backgroundByType[typePkmn[0]["type"]["name"]]);
	}, [typePkmn]);

	return (
		<div
			className={"row poke-card center-text"}
			style={{ background: firstType }}
			onClick={() => findByID(id)}
		>
			<img
				className="poke-card-img"
				src={imagePokemon.replace("{id}", id)}
			/>
			<h5>{`#${id}`}</h5>
			<h4>{capitalizeFirstLetter(name)}</h4>
			{typePkmn && (
				<div className="d-flex justify-content-center">
					{typePkmn.map(({ type } = element) => {
						return (
							<div key={type.name + id}>
								<CPokeTypePill
									style={{
										background: backgroundByType[type.name],
									}}
								>
									{capitalizeFirstLetter(type.name)}
								</CPokeTypePill>
							</div>
						);
					})}
				</div>
			)}
		</div>
	);
};
