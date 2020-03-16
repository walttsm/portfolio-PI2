import { Link } from "gatsby"
import React from "react"

import HeaderStyles from "./header.module.scss"

import logo from "../images/logo-devuni.jpg"

const Header = () => (
  <header className={HeaderStyles.header}>
    <div className={HeaderStyles.logoContainer}>
      <Link to="/" className={HeaderStyles.logo}>
        <img src={logo} alt="DevUni" />
      </Link>
    </div>
    <nav className={HeaderStyles.nav}>
      <ul className={HeaderStyles.navList}>
        <Link
          to="/"
          className={HeaderStyles.navListItem}
          activeClassName={HeaderStyles.activeNavListItem}
        >
          <li>Home</li>
        </Link>

        <Link
          to="/blog"
          className={HeaderStyles.navListItem}
          activeClassName={HeaderStyles.activeNavListItem}
        >
          <li>Blog</li>
        </Link>

        <Link
          to="/projects"
          className={HeaderStyles.navListItem}
          activeClassName={HeaderStyles.activeNavListItem}
        >
          <li>Projetos</li>
        </Link>

        <Link
          to="/stack"
          className={HeaderStyles.navListItem}
          activeClassName={HeaderStyles.activeNavListItem}
        >
          <li>Tech Stack</li>
        </Link>

        <Link
          to="/about"
          className={HeaderStyles.navListItem}
          activeClassName={HeaderStyles.activeNavListItem}
        >
          <li>Quem somos</li>
        </Link>
      </ul>
    </nav>
  </header>
)

export default Header
