import React from "react";
import { backgroundByType, imagePokemon } from "../../04_Constans/constans";
import capitalizeFirstLetter from "../../06_Utils/utils";

import "./index.css";

export const CPokeCardDetail = ({ pokemon }) => {
	const { id, name, types, weight, moves, sprites } = pokemon;

	let typesPkmn = ["normal"];
	let movesPkmn = [];
	let spritesPkmn = [];

	if (sprites) {
		spritesPkmn = Object.keys(sprites).map((k) => sprites[k]);
		spritesPkmn = spritesPkmn.filter((sprite) => typeof sprite == "string");
	}
	if (types) typesPkmn = types.map((type) => type.type.name);
	if (moves) movesPkmn = moves.slice(0, 5).map((move) => move.move.name);

	return (
		<div
			className="row poke-card-detail center-text"
			style={{ background: backgroundByType[typesPkmn[0]] }}
		>
			<img
				className="poke-card-detail-img"
				src={imagePokemon.replace("{id}", id)}
			/>

			<h4>{`#${id}`}</h4>
			<h2>{capitalizeFirstLetter(name)}</h2>
			<h3 className="left-text">Types</h3>
			<h4 className="left-text">{typesPkmn.toString()}</h4>

			<h3 className="left-text">Peso</h3>
			<h4 className="left-text">{`${weight}kg`}</h4>

			<h3 className="left-text">Sprites</h3>
			<h4>
				{spritesPkmn.map((sprite) => (
					<img
						className="poke-sprite"
						key={sprite}
						width={72}
						src={sprite}
					/>
				))}
			</h4>

			<h3 className="left-text">Movimientos</h3>
			<h5 className="left-text">{movesPkmn.toString()}</h5>
		</div>
	);
};
