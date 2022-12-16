import React from 'react'
import AnimeCard from './AnimeCard';

function MainContent(props) {
	return (
		<main>
			<div className="main-head">
				<div 
					className="search-box">
					<input 
						type="search"
						placeholder="Search for an anime..."
						required
						value={props.search}
						onChange={e => props.SetSearch(e.target.value)}/>
						<button className="button" onClick={()=>
						{
							props.HandleSearch(1);
						}}> Go </button>
				</div>
			</div>
			
			<div className="anime-list">
				{props.animeList.map(anime => (
					<AnimeCard
						anime={anime}
						key={anime.mal_id} />
				))}
			</div>
			<button></button>
		</main>
	)
}

export default MainContent
