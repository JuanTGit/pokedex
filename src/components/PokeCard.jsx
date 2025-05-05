
function PokeCard({text, img, weight, onRemove}){
	return(
		<div className="card" style={{width: "12rem"}}>
			<img src={img} className="card-img-top" alt={text}/>
			<div className="card-body text-center">
				<h5>{text}</h5>
				<p className="card-text">{weight} lbs THICCC!</p>
			</div>
			<button className="btn btn-danger" onClick={onRemove}>Remove Pokebutt</button>
		</div>
	)
}

export default PokeCard;