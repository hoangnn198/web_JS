import "./App.css";
import React from "react";
import Navbar from './components/custom/Navbar'
import logo from './image/logo.png'
import ListProduct from "./components/product/ListProduct";
// function Items() {
//   return (

//     )
// }

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div >
        {/* Thanh search */}
        <div className="tagSearch col-sm-12 col-md-12 col-lg-12 col-xl-12">
          <h6>Thanh search</h6>
        </div >

        {/* Containers  */}
        <div className="containers col-sm-12 col-md-12 col-lg-10 col-xl-10">

          {/* Logo + Navbar */}
          <Navbar />


          {/* Slider  */}
          <div className="slider col-sm-12 col-md-12 col-lg-12 col-xl-12" id="sliders">

            {/* Left Slider  */}
            <nav className="col-xl-3 navbar-expand-lg" id="leftSlider">

              <ListProduct />
            </nav >





            {/* Right Slider  */}
            <div className="rightSlider col-sm-9 col-md-9 col-lg-9 col-xl-9">
              <h6> Slider </h6>
            </div >

          </div >


          {/* Quảng cáo  */}
          <div className="marketing col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <h6>Quảng cáo  </h6>
          </div >


          {/* Title  */}
          <div className="titleProduct col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <h6> Title Product </h6>
          </div >

          {/*  Sản phẩm */}
          <div className="product col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <h6> Product </h6>
          </div >

          {/* Quảng cáo  */}
          <div className="marketing col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <h6>Quảng cáo  </h6>
          </div >

          {/* Sản phẩm 1 */}
          <div className="product1 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <h6> Sản phẩm 1 </h6>
          </div >

          {/* Sản phẩm 2 */}
          <div className="product2 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <h6> Sản phẩm 2 </h6>
          </div >

          {/* Đối tác */}
          <div className="partner col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <h6> Đối tác </h6>
          </div >


        </div >

        {/* Footer  */}
        <div className="footer col-sm-12 col-md-12 col-lg-12 col-xl-12">
          <h6>Footer</h6>
        </div >
      </div >
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
