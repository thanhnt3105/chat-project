import React from "react";

const Search = () => {
	return (
		<div className="search">
			<div className="searchForm">
				<input type="text" placeholder="Find an user" />
			</div>
			<div className="userChat">
				<img
					src="https://images.pexels.com/photos/17864182/pexels-photo-17864182/free-photo-of-woman-and-tree-branches.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
					alt=""
				/>
				<div className="userChatInfo">
					<span>Jane</span>
				</div>
			</div>
		</div>
	);
};

export default Search;
