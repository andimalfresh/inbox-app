import React, { Component } from "react";
import Toolbar from "./components/Toolbar";
import MessageList from "./components/MessageList";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    };
  }
  async componentDidMount() {
    let responce = await fetch("http://localhost:8082/api/messages");
    let json = await responce.json();
    let selected = json.filter(message => message.selected);
    let unRead = json.filter(message => !message.read);

    this.setState({
      messages: json
    });
  }

markAsReadButtonClicked = () => {
  console.log("markAsReadButtonClicked")
}

deleteMessageButtonClicked = () => {
  console.log("yoBischTrashCanClickedSon")
}
messageSelected = () => {
  console.log("yoBischThisSelected")
}

messageRead = async (id) => {
  console.log("messageRead", id)
  
  let message = {
    messageIds: [id],
    command: "read",
    "read": true
  }

  const updateMessages = await fetch('http://localhost:8082/api/messages', {
    method: 'PATCH',
    body: JSON.stringify(message),
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }
  })

  const updatedMessages = this.state.messages.map(message => {
    if (message.id === id) {
      message.read = !message.read
    }
    return message
  })
  this.setState ({
    messages: updatedMessages
  })
}

  render() {
    return (
      <div>
        <Toolbar markAsReadButtonClicked={this.markAsReadButtonClicked} deleteMessageButtonClicked={this.deleteMessageButtonClicked} />
        <MessageList messageSelected={this.messageSelected} messageRead={this.messageRead} messages={this.state.messages} />
      </div>
    );
  }
}

export default App;
