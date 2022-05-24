import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Movie from "./Movie";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

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
			<div className="relative text-white flex items-center group">
				<MdChevronLeft
					className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
					size={30}
				/>
				<div
					id={"slider"}
					className="relative w-full h-full whitespace-nowrap overflow-x-scroll scroll-smooth scrollbar-hide"
				>
					{rowMovie.map((item, id) => (
						<Movie key={id} item={item} />
					))}
				</div>
				<MdChevronRight
					className="absolute bg-white right-0 rounded-full opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
					size={30}
				/>
			</div>
		</React.Fragment>
	);
};

export default Row;
