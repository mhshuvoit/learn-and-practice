import Logo from '../assets/images/logo.png'
import searchIcon from '../assets/images/search_icon.png'
import { Link } from "@reach/router";

function Nav() {
    return (
        <header class="section" >
            {/* <!-- header inner --> */}
            <div class="header" style={{backgroundColor:'#136af8'}}>
                <div class="container">
                    <div class="row">
                        <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                            <div class="full">
                                <div class="center-desk">
                                    <div class="logo"> <a href="index.html"><img src={Logo} alt="#" /></a> </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                            <div class="menu-area">
                                <div class="limit-box">
                                    <nav class="main-menu">
                                        <ul class="menu-area-main">
                                            <li> <Link to='/'
                                            >Home</Link></li>
                                            <li> <Link to='/about'
                                            >About</Link> </li>
                                            <li><Link to='/testimonial'
                                            >Testimonial</Link></li>
                                            <li><Link to='/shop'
                                            >Shop</Link></li>
                                            <li><Link to='/contact'
                                            >Contact</Link></li>
                                            <li class="last"><a href="#"><img src={searchIcon} alt="icon" /></a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- end header inner --> */}
        </header>
    )
}

export default Nav
