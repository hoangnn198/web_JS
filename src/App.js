import "./App.css";
import React from "react";
import ReactDOM from "react-dom";
import Navbar from './custom/Navbar'
import Slider from "./custom/Slider";
import logo from "./image/logo.png";
import img1 from "./image/img1.jpg";
import Item from "./custom/Item";
import { Alert } from "bootstrap";

// function Items() {
//   return (

//     )
// }

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        {
          id: 1,
          img: { img1 },
          title: "Bộ Bàn Ghế Ăn 4 Ghế Hoàng Kim MGN",
          price: "2.490.00 đ"
        },
        {
          id: 2,
          img: { img1 },
          title: "Bộ Bàn Ghế Ăn 4 Ghế Hoàng Kim MGN",
          price: "2.490.00 đ"
        },
        {
          id: 3,
          img: { img1 },
          title: "Bộ Bàn Ghế Ăn 4 Ghế Hoàng Kim MGN",
          price: "2.490.00 đ"
        },
        {
          id: 4,
          img: { img1 },
          title: "Bộ Bàn Ghế Ăn 4 Ghế Hoàng Kim MGN",
          price: "2.490.00 đ"
        },
      ]
    }
  }
  onPress() {
    alert("AAAAAAAAAAAAAA")
  }


  render() {
    return (
      <div>

        <Navbar />
        <Slider />

        <div class="container">
          <h3>SẢN PHẨM</h3>
          <div class="row" style={{ marginTop: "10px" }} >

            <Item />
            <Item />
            <Item />

          </div>





        </div>
        <div>
          <nav aria-label="Page navigation example" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: "20px" }}>
            <ul class="pagination">
              <li class="page-item"><a class="page-link" href="#">Previous</a></li>
              <li class="page-item"><a class="page-link" href="#">1</a></li>
              <li class="page-item"><a class="page-link" href="#">2</a></li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
              <li class="page-item"><a class="page-link" href="#">Next</a></li>
            </ul>
          </nav>
        </div>
        <footer>
          <p>Footer</p>
        </footer>
      </div>
    );
  }
}

export default App;
{
  /* <div class="card" >
        <div className="header">
         <img src={logo} id="imgLogo" width="20%" />
         </div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light" id="menu">
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
          <img src={ic_search} id="imgSearch" height = "40px" width = "40px" />
        </nav>
 
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
      </div> */
}
