import { Helmet } from 'react-helmet'
import Router from './router'

// for css
import { Bootstrap } from '../assets/css/bootstrap.min.css'
import { Style } from '../assets/css/style.css'
import { Responsive } from "../assets/css/responsive.css"
import { carousel } from '../assets/css/owl.carousel.min.css'



function App() {
  return (
    <div>
      <Helmet>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        {/* <!-- mobile metas --> */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="viewport" content="initial-scale=1, maximum-scale=1" />
        {/* <!-- site metas --> */}
        <title>assignment 3</title>
        <meta name="keywords" content="" />
        <meta name="description" content="" />
        <meta name="author" content="" />
        {/* <!-- bootstrap css --> */}
        <link rel="stylesheet" href={Bootstrap} />
        {/* <!-- style css --> */}
        <link rel="stylesheet" href={Style} />
        {/* <!-- Responsive--> */}
        <link rel="stylesheet" href={Responsive} />
        {/* <!-- Scrollbar Custom CSS --> */}
        {/* <!-- Tweaks for older IEs--> */}
        <link rel="stylesheet" href="https://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" />
        {/* <!-- owl stylesheets -->  */}
        <link rel="stylesheet" href={carousel} />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.css" media="screen"></link>


        {/* <!-- Javascript files--> */}
        {/* <!-- JavaScript Bundle with Popper --> */}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/2.6.0/umd/popper.min.js"> </script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>
      </Helmet>
      <Router />
    </div>
  )
}

export default App

