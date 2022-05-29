import React from "react";
import { Link } from "react-router-dom";
import homeBgImage from "../image/home-bg.jpeg";

const Login = () => {
	return (
		<React.Fragment>
			<div className="w-full h-screen">
				<img src={homeBgImage} alt="home-bg" className="absolute w-full h-full object-cover" />
				<div className="fixed top-0 left-0 w-full h-screen bg-black/60"></div>
				<div className="fixed w-full px-4 py-24 z-50">
					<div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
						<div className="max-w-[320px] mx-auto py-16">
							<h1 className="text-2xl font-bold">Login To Your Account</h1>
							<form className="w-full flex flex-col py-4 gap-4">
								<input
									className="p-3 bg-gray-700 rounded focus:bg-gray-500"
									type="email"
									placeholder="Email"
									autoComplete="email"
								/>
								<input
									className="p-3 bg-gray-700 rounded focus:bg-gray-500 transition-all"
									type="password"
									placeholder="Password"
									autoComplete="current-password"
								/>
								<button className="bg-red-600 py-3 mt-4 mb-2 rounded font-bold tracking-wider hover:bg-red-900 transition-all">
									Click to Login
								</button>
								<div className="flex justify-between items-center text-sm text-gray-400">
									<p>
										<input type="checkbox" className="mr-2" />
										Remember Me
									</p>
									<p>Need Help?</p>
								</div>
								<p className="py-3">
									<span className="text-gray-400">You don't have an Account?</span>{" "}
									<Link to="/register" className="underline text-red-600 uppercase font-bold">
										Register
									</Link>
								</p>
							</form>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Login;
