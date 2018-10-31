import React, { Component } from "react";
import Toolbar from "./components/Toolbar";
import MessageList from "./components/MessageList";
import Message from "./components/Message";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    };
  }
  populateMesages = () => {
    var pushedMessages = this.state.messages.map(results => results);
    console.log(pushedMessages);
  };
  // handleClick = () => {
  //   var clickedButton = { handleClick };
  //   console.log("It was clicked");
  // };
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
        <Toolbar />
        <MessageList messages={this.state.messages} />
      </div>
    );
  }
}

export default App;
