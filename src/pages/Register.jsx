import React from "react";
import homeBgImage from "../image/home-bg.jpeg";

const Register = () => {
	return (
		<React.Fragment>
			<div className="w-full h-screen">
				<img src={homeBgImage} alt="home-bg" className="absolute w-full h-full object-cover" />
			</div>
		</React.Fragment>
	);
};

export default Register;
