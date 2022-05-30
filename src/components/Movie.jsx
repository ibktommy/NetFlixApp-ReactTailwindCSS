import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";

const Movie = ({ item }) => {
	const [like, setLike] = useState(false);
	const [saved, setSaved] = useState(false);
	const { user } = UserAuth();

	// Creating a Movie ID reference from our Firestore Database
	const movieID = doc(db, "users", `${user?.email}`);

	// Function to save movie to Database when the Heart Icon is clicked
	async function saveMovie() {
		if (user?.email) {
			setLike(!like);
			setSaved(true);
			await updateDoc(movieID, {
				savedMovies: arrayUnion({
					id: item.id,
					title: item.title,
					img: item.backdrop_path,
				}),
			});
		} else {
			alert("PLEASE LOG IN YOUR ACCOUNT TO SAVE A MOVIE");
		}
	}

	return (
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
				<p onClick={saveMovie}>
					{like ? (
						<FaHeart className="absolute top-4 left-4 fill-gray-300" />
					) : (
						<FaRegHeart className="absolute top-4 left-4 fill-gray-300" />
					)}
				</p>
			</div>
		</div>
	);
};

export default Movie;
