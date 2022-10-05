import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";

import { CPokeCard } from "../../01_Components/CPokeCard";
import { CPokeCardDetail } from "../../01_Components/CPokeCardDetail";
import { CSearch } from "../../01_Components/CSearch";
import { showModal } from "../../05_Store/Actions/AModal";
import "./index.css";

const PMain = ({ mainJSONData, previous, next, findByID, onSearch }) => {
	const dispatch = useDispatch();
	const { results = [] } = mainJSONData.pokemonResultList;
	const pokemonDetail = mainJSONData.pokemonDetail;

	const pkmnDetailRef = useRef(null);

	useEffect(() => {
		if (
			pokemonDetail &&
			/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
				navigator.userAgent
			)
		)
			pkmnDetailRef.current.scrollIntoView({
				behavior: "smooth",
				block: "end",
			});
	}, [pokemonDetail]);

	return (
		<>
			<div className="center-text">
				<img
					src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
					width="256px"
				/>
			</div>

			<div className="row">
				<h1 className="center-text text-light">Simple App</h1>
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
					<div className="row">
						<div className="col-12">
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
				</div>
				{pokemonDetail && (
					<div ref={pkmnDetailRef} className="col">
						<CPokeCardDetail pokemon={pokemonDetail} />
					</div>
				)}
			</div>
		</>
	);
};

export default PMain;
