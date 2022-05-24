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

	// Function that shortens the number of words for the movie overview text
	const shortentext = (str, num) => {
		if (str.length > num) {
			return str.slice(0, num) + "...";
		} else {
			return str;
		}
	};

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
				<div className="absolute w-full top-[20%] p-4 md:p-8">
					<h1 className="text-3xl md:text-5xl font-bold">{randomMovie.title}</h1>
					<div className="my-4">
						<button className="border bg-gray-300 text-black border-gray-300 py-2 px-5">
							Play Movie
						</button>
						<button className="border  text-white border-gray-300 py-2 px-5 ml-4">Watch Later</button>
					</div>
					<p className="text-gray-400 text-sm mt-2 mb-4">Released: {randomMovie.release_date}</p>
					<p className="w-full md:max-w-[700%] lg:max-w-[50%] xl:max-w-w[35%] text-gray-200">
						{shortentext(randomMovie.overview, 250)}
					</p>
				</div>
			</div>
		</div>
	);
};

export default Main;
