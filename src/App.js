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
  gettheSubject = () => {
    this.state.messages.map(stuffFromApi => {
        console.log(stuffFromApi)
    })
  }

  render() {
    console.log("this.state.messages", this.state.messages);
    return (
      <div>
        <Toolbar />
        <MessageList messages={this.state.messages} />
      </div>
    );
  }
}

export default App;
