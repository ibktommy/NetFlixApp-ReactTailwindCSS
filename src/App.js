import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
	return (
		<React.Fragment>
			<AuthContextProvider>
				<Navbar />
				<Routes>
					<Route exact path="/" element={<Home />}></Route>
				</Routes>
			</AuthContextProvider>
		</React.Fragment>
	);
}

export default App;
