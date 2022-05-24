import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Movie from "./Movie";

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

	//Condition Statement to check if "movie" state has been updated with a valid object
	if (rowMovie === undefined) {
		return <div></div>;
	}

	return (
		<React.Fragment>
			<h2 className="text-white font-normal uppercase tracking-wider text-center text-3xl md:text-4xl lg:text-5xl p-6 underline">
				{title}
			</h2>
			<div className="relative text-white flex items-center">
				<div>
					{rowMovie.map((item, id) => (
						<Movie key={id} item={item} />
					))}
				</div>
			</div>
		</React.Fragment>
	);
};

export default Row;
