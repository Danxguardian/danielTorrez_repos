import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CLoader } from "./01_Components/CLoader/index";
import { CModal } from "./01_Components/CModal";

import CONFIG from "./04_Constans/constans";
import PTestPage from "./02_Pages/PTestPage/index";
import CTestPage from "./03_Controllers/CTestPage";

import * as modalActions from "./05_Store/Actions/AModal";

console.log("env", process.env);
console.log("config", CONFIG);

export const App = () => {
	const dispatch = useDispatch();
	const loading = useSelector((state) => state.loader);
	const modal = useSelector((state) => state.modal);
	useEffect(() => {
		/* dispatch(showLoader("Nice")); */
	}, []);

	return (
		<>
			<div className="container col">
				<CTestPage RenderComponent={PTestPage} />
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
			{/* implementar dialogue errors */}
		</>
	);
};
