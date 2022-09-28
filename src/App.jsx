import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CLoader } from "./01_Components/CLoader/index";
import { CModal } from "./01_Components/CModal";

import * as modalActions from "./05_Store/Actions/AModal";
import PMain from "./02_Pages/PMain/index";
import CMain from "./03_Controllers/CMain";
import { getPokeRequest } from "./05_Store/Actions/AMain";

console.log("env", process.env);

export const App = () => {
	const dispatch = useDispatch();
	const loading = useSelector((state) => state.loader);
	const modal = useSelector((state) => state.modal);
	useEffect(() => {
		dispatch(getPokeRequest({}));
	}, []);

	return (
		<>
			<div className="container col">
				<CMain RenderComponent={PMain} />
			</div>

			{modal.status && (
				<CModal
					type={modal.type}
					title={modal.title}
					message={modal.message}
					btnAccept={modal.accept}
					btnCancel={modal.cancel}
				/>
			)}
			{loading.status && <CLoader title={loading.title} />}
		</>
	);
};
