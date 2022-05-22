import axios from "axios";
import React, { useState, useEffect } from "react";
import requests from "../Requests";

const Main = () => {
	const [movies, setMovies] = useState([]);

	// Making API call using useEffect Hook whenever Component Did Mount
	useEffect(() => {
		axios.get(requests.requestPopular).then((response) => {
			setMovies(response.data);
		});
	}, []);
	console.log(movies);

	return <div>Main</div>;
};

export default Main;
