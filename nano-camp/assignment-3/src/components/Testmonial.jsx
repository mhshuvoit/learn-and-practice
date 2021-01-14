import React from 'react'
import johnImage from '../assets/images/john-image.png'
import iconImage from '../assets/images/icon-1.png'

function Testmonial() {
    return (
        <div>
            <div id="plant" class="section_Clients layout_padding padding_bottom_0">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 ">
                            <div class="titlepage" style={{marginTop:'60px'}}>
                                <h2> Testmonial</h2>
                                <span style={{textAlign: 'center'}}>available, but the majority have suffered alteration in some form, by injected randomised words which don't look even slightly believable</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="section Clients_2 layout_padding padding-top_0"></div>
            <div class="container"></div>
            <div class="row"></div>
            <div class="col-sm-12"></div>

            <div id="testimonial" class="carousel slide" data-ride="carousel">

            {/* <!-- Indicators --> */}
            <ul class="carousel-indicators">
                <li data-target="#testimonial" data-slide-to="0" class="active"></li>
                <li data-target="#testimonial" data-slide-to="1"></li>
                <li data-target="#testimonial" data-slide-to="2"></li>
            </ul>

            {/* <!-- The slideshow --> */}
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <div class="titlepage">
                        <div class="john">
                            <div class="john_image"><img src={johnImage} style={{maxWidth:'100%'}} /></div>
                            <div class="john_text">JOHN DUE<span style={{color:'#fffcf4'}}>(ceo)</span></div>
                            <p class="lorem_ipsum_text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, asIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as </p>
                            <div class="icon_image"><img src={iconImage}/></div>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="titlepage">
                        <div class="john">
                            <div class="john_image"><img src={johnImage} style={{maxWidth:'100%'}} /></div>
                            <div class="john_text">JOHN DUE<span style={{color:'#fffcf4'}}>(ceo)</span></div>
                            <p class="lorem_ipsum_text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, asIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as </p>
                            <div class="icon_image"><img src={iconImage} /></div>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="titlepage">
                        <div class="john">
                            <div class="john_image"><img src={johnImage}style={{maxWidth:'100%'}} /></div>
                            <div class="john_text">JOHN DUE<span style={{color:'#fffcf4'}}>(ceo)</span></div>
                            <p class="lorem_ipsum_text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, asIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as </p>
                            <div class="icon_image"><img src={iconImage}/></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Left and right controls --> */}
            <a class="carousel-control-prev" href="#testimonial" data-slide="prev">
                <span class="carousel-control-prev-icon"></span>
            </a>
            <a class="carousel-control-next" href="#testimonial" data-slide="next">
                <span class="carousel-control-next-icon"></span>
            </a>
        </div>
        </div>
    )
}

export default Testmonial
