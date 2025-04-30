import { useState } from "react";
import PokeCard from "./PokeCard";

function Search(){
	const [pokemon, setPokemon] = useState("pikachu")
	const [pokeData, setPokeData] = useState([])

	const handleSubmit = async (e) => {
		e.preventDefault();
		// for (let i=0; i < pokeData.length; i++){
		// 	if (pokeData[i].name === pokemon){
		// 		console.log(`${pokemon} in data`)
		// 		return
		// 	}
		// }
		if (pokeData.some(p => p.name === pokemon)) {
			console.log(`${pokemon} already in data.`)
			return;
		}

		try{
			let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
			let data = await res.json();
			setPokeData(prev => [...prev, {
				name: data.name, 
				image: data.sprites.back_default,
				weight: data.weight
			}]);


		} catch (error) {
			console.error(error);
		}
	}



	return (
		<>
			<form onSubmit={handleSubmit} className="d-flex justify-content-center row m-5" id="pokeForm">
				<div className="d-flex col-md-8 gap-2">
					<input className="form-control" id="pokemonName" placeholder="Search Pokemon..." onChange={(e) => setPokemon(e.target.value)}/>
					<button type="submit" className="btn btn-primary">Lookup</button>
				</div>
			</form>
			<h1 className="text-center" style={{textDecoration: 'underline'}}>Found Pokebutts</h1>
			<div className="row">
				{pokeData.map((pokemon, index) => (
					<div className="col-3" key={index}>
						<PokeCard text={pokemon.name} img={pokemon.image} weight={pokemon.weight}/>
					</div>
				))}
			</div>
		</>
	)
}

export default Search;