import React, { useEffect } from "react";
import { useState } from "react";
import "./index.css";

export const CSearch = ({ onSearch }) => {
	const [value, setValue] = useState("");

	const onHandler = (e) => {
		if (e.which == 13) onSearch(value);
	};

	return (
		<input
			className="nosubmit"
			onChange={(e) => setValue(e.target.value)}
			onKeyDown={(e) => onHandler(e)}
			value={value}
			type="search"
			placeholder="Buscar"
		/>
	);
};
