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
        <header className="Header">
          <h1>Đây là Header</h1>
        </header>

        {/* thanh điều hướng */}
        <nav className="Nav">
          <a href="#">Trang chủ</a>
          <a href="#">Giới thiệu</a>
          <a href="#">Sản phẩm</a>
          <a href="#">Liên hệ</a>
        </nav>

        {/* Slide ảnh */}
        <div className="Slide">
          <h1>Đây là slide ảnh</h1>
        </div>


        <div className="Content">

        </div>

        <footer className="Footer">
          <h1>Đây là footer</h1>
        </footer>


      </div>
    );
  }
}

export default App;
