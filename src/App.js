import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

function App() {
	return (
		<React.Fragment>
			<Navbar />
			<Routes>
				<Route exact path="/" element={<Home />}></Route>
			</Routes>
		</React.Fragment>
	);
}

export default App;
