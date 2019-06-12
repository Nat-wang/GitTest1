import React from "react";
import ReactDOM from "react-dom";
import "./index.css";


class Test extends React.Component{
  constructor(props){
    super(props);
    this.state={
      value: ""
    };
    this.handleTyping = this.handleTyping.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTyping(e){
    this.setState({value: e.target.value});
  }
  handleSubmit(e){
    //Send to server
    //___.emit("command", e.target.value)
    //run a code checker
    e.preventDefault();
    alert("Sent code to server");
    console.log(this.state.value);
    this.setState({value:""});

  }


  render(){
      return(
        <section>
          <form id="main"onSubmit={this.handleSubmit}>
          <label htmlFor="box"id="box_label">
          Type your code here:
          <br/>
              <textarea id="box"className="main_box"rows="10" cols="60"value={this.state.value} onChange={this.handleTyping}>
              </textarea>
              <input id="box_btn"className="main_button"type="submit" value="Run Code"/>
          </label>
          </form>
        </section>
      );
  }
};
ReactDOM.render(
  <Test/>,
  document.getElementById("root")
);
