import React from 'react';
import { NavLink } from "react-router-dom"

const style = {
  color: "red",
  fontWeight: "bold"
}

const Navbar = () => {
  return (
    <nav>
      <NavLink activeStyle={style} exact to="/">Page1</NavLink>
      <NavLink activeStyle={style} to="/page2">Page2</NavLink>
      <NavLink activeStyle={style} to="/page3">Page3</NavLink>
    </nav>
  )
}

export default Navbar