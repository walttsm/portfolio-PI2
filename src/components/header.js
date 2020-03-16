import { Link } from "gatsby"
import React from "react"

import HeaderStyles from "./header.module.scss"

import logo from "../images/logo-devuni.jpg"

const Header = () => (
  <header>
    <Link className={HeaderStyles.logo} to="/">
      <img src={logo} alt="DevUni" />
    </Link>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">Blog</Link>
        </li>
        <li>
          <Link to="/">Projetos</Link>
        </li>
        <li>
          <Link to="/">Tech Stack</Link>
        </li>
        <li>
          <Link to="/">Quem somos</Link>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header
