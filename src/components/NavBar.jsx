import { signOut } from "firebase/auth";
import React, { useContext } from "react";
import { auth } from "../firebase/firebase";
import { AuthContext } from "../context/AuthContext";

const NavBar = () => {
	const { currentUser } = useContext(AuthContext);
	return (
		<div className="navbar">
			<span className="logo">Lama Chat</span>
			<div className="user">
				<img src={currentUser.photoURL} alt="" />
				<span>{currentUser.displayName}</span>
				<button onClick={() => signOut(auth)}>Logout</button>
			</div>
		</div>
	);
};

export default NavBar;
