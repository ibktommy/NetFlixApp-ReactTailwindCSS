import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

const Row = ({ title, fetchURL }) => {
	const [rowMovie, setRowMovie] = useState([]);

	// UseEffect Hook to run our API request when Component mounts or Updates
	useEffect(() => {
		axios
			.get(fetchURL)
			.then((response) => {
				setRowMovie(response.data.results);
			})
			.catch((error) => {
				console.log(error.message);
			});
	}, [fetchURL]);

	console.log(rowMovie);
	return (
		<React.Fragment>
			<div>
				<h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
				<div className="relative text-white flex items-center"></div>
			</div>
		</React.Fragment>
	);
};

export default Row;
