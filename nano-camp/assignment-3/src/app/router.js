import { Router } from '@reach/router'

import HomePage from '../pages/Home'
import AboutPage from '../pages/About'
import Testimonial from '../pages/Testimonial'
import ShopPage from '../pages/Shop'
import ContactPage from '../pages/Contact'
import NotFound from '../pages/NotFound'

function RouterJS() {
    return (
        <Router>
            <HomePage path="/" />
            <AboutPage path='/about' />
            <Testimonial path="/testimonial" />
            <ShopPage path="/shop" />
            <ContactPage path="/contact" />
            <NotFound default />
        </Router>
    )
}

export default RouterJS