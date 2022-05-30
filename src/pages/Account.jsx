import React from "react";
import SavedShows from "../components/SavedShows";
import homeBgImage from "../image/home-bg.jpeg";

const Account = () => {
	return (
		<React.Fragment>
			<div className="w-full text-white">
				<img className="w-full h-[400px] object-cover" src={homeBgImage} alt="home-bg" />
				<div className="bg-black/60 fixed top-0 left-0 w-full h-[550px]"></div>
				<div className="absolute top-[20%] p-4 md:p-8">
					<h1 className="text-3xl md:text-5xl font-bold tracking-wide">My Shows</h1>
				</div>
			</div>
			<SavedShows />
		</React.Fragment>
	);
};

export default Account;
