import React from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import requests from "../Requests";

const Home = () => {
	const url = requests;
	return (
		<div>
			<Main />
			<Row title="Top Rated Movies" fetchURL={url.requestTopRated} />
			<Row title="Trending Movies" fetchURL={url.requestTrending} />
			<Row title="Horror Movies" fetchURL={url.requestHorror} />
			<Row title="Upcoming Movies" fetchURL={url.requestUpcoming} />
			<Row title="Popular Movies" fetchURL={url.requestPopular} />
		</div>
	);
};

export default Home;
