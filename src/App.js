import React, { Component } from "react";
import Message from "./components/Message";
import MessageList from "./components/MessageList";
import Toolbar from "./components/Toolbar";
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

  render() {
    console.log("this.state.messages", this.state.messages);
    return (
      <div>
        <Message />
        <MessageList />
        <Toolbar />
      </div>
    );
  }
}

export default App;
