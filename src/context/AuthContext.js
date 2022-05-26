import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
} from "firebase/auth";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
	const [user, setUser] = useState([]);

	function register(email, password) {
		return createUserWithEmailAndPassword(auth, email, password);
	}

	function logIn(email, password) {
		return signInWithEmailAndPassword(auth, email, password);
	}

	function logOut() {
		return signOut(auth);
	}

	useEffect(() => {
		const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
		});
		return () => {
			unSubscribe();
		};
	});

	return (
		<AuthContext.Provider value={{ register, logIn, logOut, user }}>{children}</AuthContext.Provider>
	);
}

export function UserAuth() {
	return useContext(AuthContext);
}