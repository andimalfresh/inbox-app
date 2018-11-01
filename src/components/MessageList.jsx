import React from "react";
import Message from "./Message";
import "../App.css";

const MessageList = (props) => {
    return (
        props.messages.map(message => {
            return <Message message={message} messageRead={props.messageRead} />
        })
    )
}

export default MessageList