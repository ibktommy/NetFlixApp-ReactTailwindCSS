import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../firebase";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
	const [user, setUser] = useState([]);

	async function register(email, password) {
		await createUserWithEmailAndPassword(auth, email, password);
		try {
			await setDoc(doc(db, "users", email), {
				savedMovies: [],
			});
		} catch (error) {
			console.log(error.message);
		}
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
