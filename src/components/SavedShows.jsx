import React, { useState, useEffect } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import { AiOutlineClose } from "react-icons/ai";

const SavedShows = () => {
	const [rowMovie, setRowMovie] = useState([]);
	const { user } = UserAuth();

	// Function to Make The Arrow Icons Work - Slide the images when the icons are clicked
	const sliderLeft = () => {
		let slider = document.getElementById("slider");
		slider.scrollLeft = slider.scrollLeft - 300;
	};
	const sliderRight = () => {
		let slider = document.getElementById("slider");
		slider.scrollLeft = slider.scrollLeft + 300;
	};

	// Fetching and Mounting saved Movie from Cloud Firestore to our Component
	useEffect(() => {
		onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
			setRowMovie(doc.data().savedMovies);
		});
	}, [user?.email]);

	// Deleting saved Movie from Cloud Firestore
	const movieRef = doc(db, "users", `${user?.email}`);

	const deleteMovie = async (movieID) => {
		try {
			const newSavedMovie = rowMovie.filter((item) => item.id !== movieID);
			await updateDoc(movieRef, {
				savedMovies: newSavedMovie,
			});
		} catch (error) {
			console.log(error.message);
		}
	};

	return (
		<div>
			<h2 className="font-normal text-white capitalize tracking-wider text-left text-2xl md:text-4xl lg:text-5xl p-6 underline">
				My Saved Movies
			</h2>
			<div className="relative text-white flex items-center group">
				<MdChevronLeft
					onClick={sliderRight}
					className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
					size={30}
				/>
				<div
					id={"slider"}
					className="relative w-full h-full whitespace-nowrap overflow-x-scroll scroll-smooth scrollbar-hide"
				>
					{rowMovie.map((item, id) => (
						<div
							key={id}
							className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2"
						>
							<img
								className="w-full h-auto block"
								src={`https://image.tmdb.org/t/p/w500/${item?.img}`}
								alt={item.title}
							/>
							<div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white transition-all">
								<p className="text-white whitespace-normal text-xs md:text-sm font-medium flex justify-center items-center h-full text-center">
									{item.title}
								</p>
								<p
									onClick={() => {
										deleteMovie(item.id);
									}}
									className="absolute fill- top-4 right-4"
								>
									<AiOutlineClose className="fill-gray-300" />
								</p>
							</div>
						</div>
					))}
				</div>
				<MdChevronRight
					onClick={sliderLeft}
					className="absolute bg-white right-0 rounded-full opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
					size={30}
				/>
			</div>
		</div>
	);
};

export default SavedShows;
