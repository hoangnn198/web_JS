import React, { Component } from 'react';
import img1 from '../image/img2.jpg'



export default class Item extends Component {
    onPressItem() {
        alert('aaaaaaaaaaa')
    }
    render() {
        return (
            <div class="col-sm-3">
                <div class="card">
                    <img class="card-img-top" src={img1} alt="" />
                    <div class="card-body">
                        <h6 class="card-title">Bộ Bàn Ăn Gỗ Cao Su</h6>
                        <p class="card-text">2.490.000 đ</p>
                    </div>

                    <button onClick={() => this.onPressItem()}>
                        click me!
                    </button>
                </div>


            </div>
        );
    }
}
