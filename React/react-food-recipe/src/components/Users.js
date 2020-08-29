import React from "react";
class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      messages: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value,
    });
  }
  submitMessage() {
    const currentMessage = this.state.input;
    this.setState({
      input: "",
      messages: this.state.messages.concat(currentMessage),
    });
  }
  render() {
    return (
      <div className="users">
        <h3>Leave a Message:</h3>
        <input
          value={this.state.input}
          id="message"
          onChange={this.handleChange}
        />

        <button onClick={this.submitMessage}>Add Message</button>
        <ul>
          {this.state.messages.map((message, idx) => {
            return <li key={idx}>{message}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default Users;
