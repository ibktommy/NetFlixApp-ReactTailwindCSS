import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Account from "./pages/Account";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
	return (
		<React.Fragment>
			<AuthContextProvider>
				<Navbar />
				<Routes>
					<Route exact path="/" element={<Home />}></Route>
					<Route
						exact
						path="/account"
						element={
							<ProtectedRoute>
								{" "}
								<Account />{" "}
							</ProtectedRoute>
						}
					></Route>
					<Route exact path="/login" element={<Login />}></Route>
					<Route exact path="/register" element={<Register />}></Route>
				</Routes>
			</AuthContextProvider>
		</React.Fragment>
	);
}

export default App;
