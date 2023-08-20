import React, { useContext, useEffect, useState } from "react";
import Message from "./Message";
import { ChatContext } from "../context/ChatContext";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/firebase";

const Messages = () => {
	const [messages, setMessages] = useState([]);
	const { data } = useContext(ChatContext);

	useEffect(() => {
		const ubSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
			doc.exists() && setMessages(doc.data().messages);
		});

		return () => {
			ubSub();
		};
	}, [data.chatId]);

	return (
		<div className="messages">
			{messages.map((m) => (
				<Message message={m} key={m.id} />
			))}
		</div>
	);
};

export default Messages;
