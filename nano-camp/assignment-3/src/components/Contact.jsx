import React from 'react'
import mapIcon from '../assets/images/map-icon.png'

function Contact() {
    return (
        <div>
            <div id="plant" class="contact_us layout_padding mt-5 " >
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 ">
                            <div class="titlepage" style={{marginTop:'60px'}}>
                                <h2><strong class="black"> Contact</strong>  Us</h2>
                                <span style={{textAlign:'center'}}>available, but the majority have suffered alteration in some form, by injected randomised words which don't look even slightly believable</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="contact_us_2 layout_padding paddind_bottom_0">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="soc_text">soC</div>
                        </div>
                        <div class="col-md-6">
                            <div class="email_btn">
                                <form action="/action_page.php">
                                    <div class="form-group">
                                        <input type="text" class="form-control form-control-sm" placeholder="Name" name="Name" />
                                    </div>
                                    <div class="form-group">
                                        <input type="text" class="form-control form-control-sm" placeholder="Email" name="Email" />
                                    </div>
                                    <div class="form-group">
                                        <input type="text" class="form-control form-control-sm" placeholder="Phone" name="Phone" />
                                    </div>
                                    <div class="form-group">
                                        <input type="text" class="form-control form-control-sm" placeholder="Massage" name="text3" />
                                    </div>
                                    <div class="submit_btn">
                                        <button type="submit" class="btn btn-primary"
                                        style={{background:'#081b30', color:'#fff', padding:'11px'}}>Send</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="contact_us_3 layout_padding">
                            <div class="row">
                                <div class="col-md-4">
                                    <h1 style={{ color: '#ffffff'}}>Newsletter</h1>
                                    <p class="long_text">It is a long established fact that a reader will be distracted  a</p>
                                </div>
                                <div class="col-md-8">
                                    <div class="email_text">
                                        <div class="input-group mb-3">
                                            <input
                                            style={{borderBottomLeftRadius:'20px !important', borderTopLeftRadius: '20px !important'}}
                                            type="text" class="form-control" placeholder="Enter your email" />
                                            <div class="input-group-append">
                                                <button class="btn btn-primary"
                                                style={{borderBottomLeftRadius:'20px !important', borderTopLeftRadius: '20px !important', color:'#fff', paddingBottom: '10px', paddingTop: '10px', }} type="Subscribe">Subscribe</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div id="footer" class="Address layout_padding">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="titlepage">
                                <div class="main">
                                    <h1 class="address_text">Address</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="address_2">
                        <div class="row">
                            <div class="col-sm-12 col-md-12 col-lg-4">
                                <div class="site_info">
                                    <span class="info_icon"><img src={mapIcon} /></span>
                                    <span style={{marginTop:'10px'}}>No.123 Chalingt Gates, Supper market New York</span></div>
                            </div>
                            <div class="col-sm-12 col-md-12 col-lg-4">
                                <div class="site_info">
                                    <span class="info_icon"><img src={mapIcon} /></span>
                                    <span style={{marginTop:'21px'}}>( +71 7986543234 )</span></div>
                            </div>
                            <div class="col-sm-12 col-md-12 col-lg-4">
                                <div class="site_info">
                                    <span class="info_icon"><img src={mapIcon} /></span>
                                    <span style={{marginTop:'21px'}}>demo@gmail.com</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
