import React, { Component } from 'react';
import logo from '../../image/logo.png'

export default class NavBar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: 'red', justifyContent: 'space-between' }}>
                    <a className="navbar-brand" href="#">
                        <img src={logo} className="logoShop" />
                    </a>
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <div className="collapse navbar-collapse" id="bannerTop">
                            <div className="bannerTop">
                                <h4> Banner Quảng cáo</h4>
                            </div>
                        </div>
                    </nav>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style={{ backgroundColor: 'red', }}>
                        <span className="navbar-toggler-icon" />
                    </button>
                </nav>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent" >

                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#"><strong style={{ color: '#000' }}>TRANG CHỦ</strong> <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><strong style={{ color: '#000' }}>GIỚI THIỆU</strong></a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <strong style={{ color: '#000' }}>SẢN PHẨM</strong>
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="#">SẢN PHẨM 1</a>
                                    <a className="dropdown-item" href="#">SẢN PHẨM 2</a>
                                    <div className="dropdown-divider" />
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><strong style={{ color: '#000' }}>TIN TỨC</strong></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><strong style={{ color: '#000' }}>LIÊN HỆ</strong></a>
                            </li>
                        </ul>
                    </div>

                </nav>
            </div>

        );
    }
}
