import React from 'react'
import Nav from '../components/Nav'
import Intro from '../components/Inro'
import Products from '../components/Products'
import About from '../components/About'
import Testmonial from '../components/Testmonial'
import Contact from '../components/Contact'
import Footer from '../components/footer'

function Home() {
    return (
        <div>
            <Nav/>
            <Intro/>
            <Products/>
            <About/>
            <Testmonial/>
            <Contact/>
            <Footer/>
        </div>
    )
}

export default Home
