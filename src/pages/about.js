import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About Us" />
    <h1>Quem somos</h1>
    <div>
      <img alt="Foto de Erick" />
      <h2>Erick Hoga</h2>
      <p>O conteúdo do erick.</p>
    </div>
    <hr />
    <div>
      <img alt="Foto de Walter" />
      <h2>Walter Marinho</h2>
      <p>O conteúdo do walter.</p>
    </div>
  </Layout>
)

export default AboutPage
