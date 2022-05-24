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

	//Condition Statement to check if "movie" state has been updated with a valid object
	if (rowMovie === undefined) {
		return <div></div>;
	}

	return (
		<React.Fragment>
			<div>
				<h2 className="text-white font-normal uppercase tracking-wider text-center text-3xl md:text-4xl lg:text-5xl p-6 underline">
					{title}
				</h2>
				<div className="relative text-white flex items-center">
					<div>
						{rowMovie.map((item, id) => (
							<div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
								<img
									className="w-full h-auto block"
									src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
									alt={item.title}
								/>
								<div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white transition-all">
									<p className="text-white whitespace-normal text-xs md:text-sm font-medium flex justify-center items-center h-full text-center">
										{item.title}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Row;
