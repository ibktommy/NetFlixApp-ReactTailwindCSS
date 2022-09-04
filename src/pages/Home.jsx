import React from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import requests from "../Requests";

const Home = () => {
	return (
		<div>
			<Main />
			<Row rowID="5" title="Popular Movies" fetchURL={requests.requestPopular} />
			<Row rowID="1" title="Top Rated Movies" fetchURL={requests.requestTopRated} />
			<Row rowID="2" title="Trending Movies" fetchURL={requests.requestTrending} />
			<Row rowID="3" title="Horror Movies" fetchURL={requests.requestHorror} />
			<Row rowID="4" title="Upcoming Movies" fetchURL={requests.requestUpcoming} />
		</div>
	);
};

export default Home;
