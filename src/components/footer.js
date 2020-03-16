import React from "react"

import footerStyles from "./footer.module.scss"

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <hr />
      <p>
        DevUni,© {new Date().getFullYear()}, Criado por Erick Hoga e Walter
        Marinho utilizando
        {` `}
        <a className={footerStyles.link} href="https://www.gatsbyjs.org">
          Gatsby.
        </a>
      </p>
    </footer>
  )
}

export default Footer
