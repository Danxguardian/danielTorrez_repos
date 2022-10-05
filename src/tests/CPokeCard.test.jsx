import { render } from "@testing-library/react";
import { CPokeCard } from "../01_Components/CPokeCard";
import { getService } from "../07_Services/getServices";

describe("Component CPokeCard", () => {
	test("If CPokeCard is rendered", () => {
		const pokeDummy = {
			name: "bulbasaur",
			url: "https://pokeapi.co/api/v2/pokemon/1/",
		};
		const { getByText } = render(<CPokeCard pokemon={pokeDummy} />);
		expect(getByText("Bulbasaur")).toBeInTheDocument();
	});

	
});
