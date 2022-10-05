import React, { useEffect } from "react";
import { useState } from "react";
import "./index.css";

export const CPokeTypePill = ({ style, children }) => {
	return (
		<div style={style} className="pkmnType">
			<h6>{children}</h6>
		</div>
	);
};
