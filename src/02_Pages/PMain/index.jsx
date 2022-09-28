import React, { useState } from "react";
import { CPokeCard } from "../../01_Components/CPokeCard";
import { CPokeCardDetail } from "../../01_Components/CPokeCardDetail";
import { CSearch } from "../../01_Components/CSearch";
import "./index.css";

const PMain = ({ mainJSONData, previous, next, findByID, onSearch }) => {
	const { results = [] } = mainJSONData.pokemonResultList;
	const pokemonDetail = mainJSONData.pokemonDetail;
	return (
		<>
			<div className="row">
				<h1 className="center-text">Listado de Pokemon</h1>
				<div className="col-12 px-0">
					<CSearch onSearch={onSearch}></CSearch>
				</div>
			</div>
			<div className="row">
				<div className="col-lg-8 col-sm-12">
					<div className="row">
						{results.map((pokemon) => {
							return (
								<div key={pokemon.url} className="col-6">
									<CPokeCard
										pokemon={pokemon}
										findByID={findByID}
									/>
								</div>
							);
						})}
					</div>
				</div>
				{pokemonDetail && (
					<div className="col">
						<CPokeCardDetail pokemon={pokemonDetail} />
					</div>
				)}
			</div>
			<div className="row">
				<div>
					<button className="action-btn" onClick={previous}>
						{`< Atras`}
					</button>
					<button
						className="action-btn right-position"
						onClick={next}
					>
						{`Siguiente >`}
					</button>
				</div>
			</div>
		</>
	);
};

export default PMain;
