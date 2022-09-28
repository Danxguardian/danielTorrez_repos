import React, { useEffect } from "react";
import { useState } from "react";
import "./index.css";

export const CSearch = ({ onSearch }) => {
	const [value, setValue] = useState("");

	const onHandler = (e) => {
		if (e.code === "Enter" && value.length > 0) onSearch(value);
		else setValue(e.target.value);
	};

	return (
		<input
			className="nosubmit"
			onChange={(e) => onHandler(e)}
			onKeyUp={(e) => onHandler(e)}
			value={value}
			type="search"
			placeholder="Buscar"
		/>
	);
};
