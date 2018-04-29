import React from "react";
import { render } from "react-dom";
import Hello from "./Hello";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Vaibhav"
    };
  }

  updateName = () => {
    console.log("this", this);
    this.setState({
      name: "Gupta"
    });
  };
  render() {
    console.log("in here");
    return (
      <div style={styles}>
        <button onClick={this.updateName}>Change name</button>
        <Hello name={this.state.name} />
        <h2>Start editing to see some magic happen {"\u2728"}</h2>
      </div>
    );
  }
}
render(<App />, document.getElementById("root"));
