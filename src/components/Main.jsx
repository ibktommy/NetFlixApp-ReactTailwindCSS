import axios from "axios";
import React, { useState, useEffect } from "react";
import requests from "../Requests";

const Main = () => {
	const [movies, setMovies] = useState([]);

	// Getting one movie at each page refresh

	const movie = movies[Math.floor(Math.random() * movies.length)];

	// Making API call using useEffect Hook whenever Component Did Mount

	useEffect(() => {
		axios.get(requests.requestPopular).then((response) => {
			setMovies(response.data.results);
		});
	}, []);
	// console.log(movie);

	return (
		<div className="w-full h-[550px] text-white">
			<div className="w-full h-full">
				<img src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} />
			</div>
		</div>
	);
};

export default Main;
