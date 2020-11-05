import logo from "./logo.svg";
import "./App.css";
import React from "react";
import ReactDOM from "react-dom";
import Slider from "./slider/Slider";
import backgr1 from './image/backgr1.jpg'
class App extends React.Component {
  render() {
    return (
      <div class="card">
        <div class="card-header">
        </div>
        <div class="topnav">
          <a href="#">Làng Công nghệ</a>
          <a href="#">Công nghệ</a>
          <a href="#">Khoa học</a>
          <a href="#">Công nghệ</a>
          <a href="#">Khoa học</a>
        </div>
        <div id="carouselId" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li
                data-target="#carouselId"
                data-slide-to="0"
                class="active"
              ></li>
              <li data-target="#carouselId" data-slide-to="1"></li>
              <li data-target="#carouselId" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner" role="listbox">
              <div class="carousel-item active">
                <img src={backgr1} alt="First slide" width = "100%" height = "300px"/>
              </div>

              <div class="carousel-item">
              <img src={backgr1} alt="First slide" width = "100%" height = "300px"/>
              </div>

              <div class="carousel-item">
              <img src={backgr1} alt="First slide" width = "100%" height = "300px"/>
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#carouselId"
              role="button"
              data-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselId"
              role="button"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        <div class="card-body">
          <h4 class="card-title"> Title </h4> <p class="card-text"> Text </p>
        </div>
        <div class="card-footer text-muted"> Footer </div>
      </div>
    );
  }
}

export default App;
