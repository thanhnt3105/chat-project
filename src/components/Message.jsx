import React from "react";

const Message = () => {
	return (
		<div className="message owner">
			<div className="messageInfo">
				<img
					src="https://images.pexels.com/photos/17864182/pexels-photo-17864182/free-photo-of-woman-and-tree-branches.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
					alt=""
				/>
				<span>just now</span>
			</div>
			<div className="messageContent">
				<p>Hello</p>
				<img
					src="https://images.pexels.com/photos/17864182/pexels-photo-17864182/free-photo-of-woman-and-tree-branches.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
					alt=""
				/>
			</div>
		</div>
	);
};

export default Message;