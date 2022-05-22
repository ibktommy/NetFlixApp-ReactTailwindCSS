import axios from "axios";
import React, { useState, useEffect } from "react";
import requests from "../Requests";

const Main = () => {
	const [movies, setMovies] = useState([]);

	// Getting one movie at each page refresh

	const movie = movies[Math.floor(Math.random() * movies.length)];
	const imgSrc = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;

	// Making API call using useEffect Hook whenever Component Did Mount

	useEffect(() => {
		axios.get(requests.requestPopular).then((response) => {
			setMovies(response.data.results);
		});
	}, []);
	console.log(movie);

	return (
		<div className="w-full h-[550px] text-white">
			<div className="w-full h-full">
				<div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
				<img src={imgSrc} alt={movie.title} />
				<div></div>
			</div>
		</div>
	);
};

export default Main;
