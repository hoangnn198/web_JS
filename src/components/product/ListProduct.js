import React, { Component } from 'react';

export default class ListProduct extends Component {
    render() {
        return (
            <div>
                {/* màn hình lap top thì hiển thị cái này */}
                <div className="collapse navbar-collapse" >
                    <div className="listProduct">
                        <h5 style={{ backgroundColor: 'red', padding: '10px', textAlign: 'center' }}> DANH MỤC SẢN PHẨM</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <a className="nav-link" href="#" style={{ borderBottomWidth: 1, borderBottomColor: 'red', }}>
                                    <h5> {">> Bộ bàn ghế ăn "}</h5>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#">
                                    <h5> {">> Bộ bàn ghế ăn "}</h5>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <h5> {">> Bộ bàn ghế ăn "}</h5>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <h5> {">> Bộ bàn ghế ăn "}</h5>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* màn hình điện thoại thì hiển thị cái này */}
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#listProduct" aria-controls="listProduct" aria-expanded="false" aria-label="Toggle navigation" style={{ backgroundColor: 'red', }}>
                    <span>DANH MỤC SẢN PHẨM</span>
                </button>

            </div>
        );
    }
}
