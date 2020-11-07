import "./App.css";
import React from "react";
import ReactDOM from "react-dom";
import Slider from "./slider/Slider";
import backgr1 from "./image/backgr1.jpg";
import logo from "./image/logo.png";
import img1 from "./image/img1.jpg";
import ic_menu from "./image/ic_menu.png";
import ic_cart from "./image/ic_cart.png";

class App extends React.Component {
  render() {
    return (
      <div class="card">
        <nav class="navbar navbar-expand-lg navbar-light bg-light" id="menu">
          <img src={logo} id="imgLogo" width="20%" />

          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link" href="#">
                  Home <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Features
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Pricing
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Dropdown link
                </a>
                <div
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
        <div id="header"></div>

        <div id="carouselId" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselId" data-slide-to="0" class="active"></li>
            <li data-target="#carouselId" data-slide-to="1"></li>
            <li data-target="#carouselId" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner" role="listbox">
            <div class="carousel-item active">
              <img src={backgr1} alt="First slide" width="100%" />
            </div>

            <div class="carousel-item">
              <img src={backgr1} alt="First slide" width="100%" />
            </div>

            <div class="carousel-item">
              <img src={backgr1} alt="First slide" width="100%" />
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselId"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselId"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>

        <div class="card-body">
          
          <h5 style={{ marginTop: "10px" }}>TOP SẢN PHẨM BÁN CHẠY</h5>

          <div className="row">
            <div class="card" class="col-sm-6" class="col-md-3">
              <img class="card-img-top" src={img1} alt="" />
              <div class="card-body">
                <h4 class="card-title">5.000.000 ₫</h4>
                <p class="card-text">Bộ Bàn Ăn 4 Ghế Gỗ Sồi</p>
              </div>
            </div>
            <div class="card" class="col-sm-6" class="col-md-3">
              <img class="card-img-top" src={img1} alt="" />
              <div class="card-body">
                <h4 class="card-title">5.000.000 ₫</h4>
                <p class="card-text">Bộ Bàn Ăn 4 Ghế Gỗ Sồi</p>
              </div>
            </div>
            <div class="card" class="col-sm-6" class="col-md-3">
              <img class="card-img-top" src={img1} alt="" />
              <div class="card-body">
                <h4 class="card-title">5.000.000 ₫</h4>
                <p class="card-text">Bộ Bàn Ăn 4 Ghế Gỗ Sồi</p>
              </div>
            </div>
            <div class="card" class="col-sm-6" class="col-md-3">
              <img class="card-img-top" src={img1} alt="" />
              <div class="card-body">
                <h4 class="card-title">5.000.000 ₫</h4>
                <p class="card-text">Bộ Bàn Ăn 4 Ghế Gỗ Sồi</p>
              </div>
            </div>
          </div>

          <h5 style={{ marginTop: "10px" }}>SẢN PHẨM MỚI </h5>

          <div className="row">
            <div class="card" class="col-sm-6" class="col-md-3">
              <img class="card-img-top" src={img1} alt="" />
              <div class="card-body">
                <h4 class="card-title">5.000.000 ₫</h4>
                <p class="card-text">Bộ Bàn Ăn 4 Ghế Gỗ Sồi</p>
              </div>
            </div>
            <div class="card" class="col-sm-6" class="col-md-3">
              <img class="card-img-top" src={img1} alt="" />
              <div class="card-body">
                <h4 class="card-title">5.000.000 ₫</h4>
                <p class="card-text">Bộ Bàn Ăn 4 Ghế Gỗ Sồi</p>
              </div>
            </div>
            <div class="card" class="col-sm-6" class="col-md-3">
              <img class="card-img-top" src={img1} alt="" />
              <div class="card-body">
                <h4 class="card-title">5.000.000 ₫</h4>
                <p class="card-text">Bộ Bàn Ăn 4 Ghế Gỗ Sồi</p>
              </div>
            </div>
            <div class="card" class="col-sm-6" class="col-md-3">
              <img class="card-img-top" src={img1} alt="" />
              <div class="card-body">
                <h4 class="card-title">5.000.000 ₫</h4>
                <p class="card-text">Bộ Bàn Ăn 4 Ghế Gỗ Sồi</p>
              </div>
            </div>
          </div>


        </div>
        <div class="card-footer text-muted"> Footer </div>
      </div>
    );
  }
}

export default App;
