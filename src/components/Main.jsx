import React, { useState, useEffect } from "react";
import requests from "../Requests.js";
import axios from "axios";

const Main = () => {
	const url = requests.requestPopular;
	const [movies, setMovies] = useState([]);

	// Making API call using useEffect Hook whenever Component Did Mount
	useEffect(() => {
		axios
			.get(url)
			.then((response) => {
				setMovies(response.data.results);
			})
			.catch((error) => console.log(error.message));
	}, [url]);

	// Get A Random Movie Data Object From our Request
	const randomMovie = movies[Math.floor(Math.random() * movies.length)];

	//Condition Statement to check if "movie" state has been updated with a valid object
	if (randomMovie === undefined) {
		return <div></div>;
	}

	return (
		<div className="w-full h-[550px] text-white">
			<div className="w-full h-full">
				<div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
				<img
					className="w-full h-full object-cover"
					src={`https://image.tmdb.org/t/p/original${randomMovie.backdrop_path}`}
					alt={randomMovie.title}
				/>
			</div>
		</div>
	);
};

export default Main;
