import React from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import requests from "../Requests";

const Home = () => {
	return (
		<div>
			<Main />
			<Row title="Top Rated Movies" fetchURL={requests.requestTopRated} />
			<Row title="Trending Movies" fetchURL={requests.requestTrending} />
			<Row title="Horror Movies" fetchURL={requests.requestHorror} />
			<Row title="Upcoming Movies" fetchURL={requests.requestUpcoming} />
			<Row title="Popular Movies" fetchURL={requests.requestPopular} />
		</div>
	);
};

export default Home;
