import logo from "./logo.svg";
import "./App.css";
import React from "react";
import ReactDOM from "react-dom";


function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* header nhen */}
        <div class="card">
          <div class="card-header">
            Header
          </div>

          {/* body  */}
          <div class="card-body">
            <div className="Slide">

            </div>
            <h4 class="card-title">Title</h4>
            
            <p class="card-text">Text</p>
          </div>

          {/* footer */}
          <div class="card-footer text-muted">
            Footer
          </div>
        </div>


      </div>
    );
  }
}

export default App;
