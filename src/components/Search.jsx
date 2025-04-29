import { useState } from "react";

function Search(){
	const [pokemon, setPokemon] = useState("pikachu")
	
	let formData = document.getElementById("pokeForm");
	let pokemonName = document.getElementById("pokemonName")

	formData.addEventListener("submit", async (e) => {
		e.preventDefault();
		setPokemon(pokemonName.value)

		try{
			let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
			let data = await res.json();
			console.log(data)

		} catch (error) {
			console.error(error);
		}
	})



	return (
		<form className="d-flex justify-content-center row m-5" id="pokeForm">
			<div className="d-flex col-md-8 gap-2">
				<input className="form-control" id="pokemonName" placeholder="Search Pokemon..."/>
				<button type="submit" className="btn btn-primary">Lookup</button>
			</div>
		</form>
	)
}

export default Search;