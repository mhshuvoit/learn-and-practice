import React from 'react'
import basketball from '../assets/images/basketball.png'
import Tshirt from '../assets/images/t-shirt.png'
import Game from '../assets/images/game.png'

function Products() {
    return (
        <div>
            {/* <!-- plant --> */}
            <div id="plant" class="section  product">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 ">
                            <div class="titlepage" style={{marginTop:'60px'}}>
                                <h2><strong class="black"> Our</strong>  Products</h2>
                                <span>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected randomised words which don't look even slightly believable</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="clothes_main section ">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                            <div class="sport_product">
                                <figure><img src={basketball} alt="img" /></figure>
                                <h3> $<strong class="price_text">50</strong></h3>
                                <h4>basket ball</h4>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 ">
                            <div class="sport_product">
                                <figure>
                                    <img src={Tshirt} />
                                    </figure>
                                    <h3> $<strong class="price_text">50</strong></h3>
                                    <h4> T-Shirt</h4>
                                    </div>
                            </div>
                            <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 ">
                                <div class="sport_product">
                                    <figure><img src={Game} alt="img" /></figure>
                                    <h3> $<strong class="price_text">50</strong></h3>
                                    <h4>Game</h4>
                                </div>
                            </div>




                            <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                                <div class="sport_product">
                                    <figure><img src={basketball} alt="img" /></figure>
                                    <h3> $<strong class="price_text">50</strong></h3>
                                    <h4>basket ball</h4>
                                </div>
                            </div>
                            <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 ">
                                <div class="sport_product">
                                    <figure><img src={Tshirt} alt="img" /></figure>
                                    <h3> $<strong class="price_text">50</strong></h3>
                                    <h4>T-Shirt</h4>
                                </div>
                            </div>
                            <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 ">
                                <div class="sport_product">
                                    <figure><img src={Game} alt="img" /></figure>
                                    <h3> $<strong class="price_text">50</strong></h3>
                                    <h4>Game</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Products
