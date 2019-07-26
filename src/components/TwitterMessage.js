import React from "react";

class TwitterMessage extends React.Component {
<<<<<<< HEAD
    constructor(props) {
        super();

        this.state = {
            remainingChars: props.maxChars,
            value: ''
        };
    }

    handleChange = e => {
        this.setState({
            value: e.target.value,
            remainingChars: this.props.maxChars - e.target.value.length})
    }

    render() {
        return (
            <div>
            <p>Max Chars: {this.props.maxChars}</p>
            <p>Remaining Chars: {this.state.remainingChars}</p>
            <strong>Your message:</strong>
            <input type="text" value={this.state.value}
            onChange={this.handleChange} />
            </div>
        );
    }
=======
  constructor(props) {
    super();

    this.state = {
      remainingChars: props.maxChars,
           value: ''
    };
  }

  handleChange = e => {
    this.setState({
            value: e.target.value,
            remainingChars: this.props.maxChars - e.target.value.length})
  }

  render() {
    return (
      <div>
      <p>Max Chars: {this.props.maxChars}</p>
      <p>Remaining Chars: {this.state.remainingChars}</p>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message"
        onchange={this.handleChange}/>
      </div>
    );
  }
>>>>>>> 0c25432c70d3491d6421ee8014b0a291afb447f5
}

export default TwitterMessage;
