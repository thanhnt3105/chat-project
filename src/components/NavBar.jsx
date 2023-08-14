import React from "react";

const NavBar = () => {
	return (
		<div className="navbar">
			<span className="logo">Lama Chat</span>
			<div className="user">
				<img
					src="https://images.pexels.com/photos/17864182/pexels-photo-17864182/free-photo-of-woman-and-tree-branches.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
					alt=""
				/>
				<span>John</span>
				<button>Logout</button>
			</div>
		</div>
	);
};

export default NavBar;
