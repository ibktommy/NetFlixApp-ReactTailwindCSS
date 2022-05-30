import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
	const { user, logOut } = UserAuth();
	const navigate = useNavigate();

	// Function that handles the actions that take place when we click the LogOut button
	const handleLogOut = async () => {
		try {
			await logOut();
			navigate("/");
		} catch (error) {
			console.log(error.message);
		}
	};

	return (
		<div className="w-full flex items-center justify-between p-4 z-[100] absolute">
			<Link to="/">
				<h1 className="text-red-600 text-4xl font-bold cursor-pointer">NETFLIX</h1>
			</Link>

			{/* Condition to Check if user object is valid in userAuth - if user is logged in */}
			{user?.email ? (
				<div>
					<Link to="/account">
						<button className="text-white pr-4">Account</button>
					</Link>
					<button onClick={handleLogOut} className="bg-red-600 px-6 py-2 rounded cursor-pointer">
						Log Out
					</button>
				</div>
			) : (
				<div>
					<Link to="/login">
						<button className="text-white pr-4">Log In</button>
					</Link>
					<Link to="/register">
						<button className="bg-red-600 px-6 py-2 rounded cursor-pointer">Register</button>
					</Link>
				</div>
			)}
		</div>
	);
};

export default Navbar;
