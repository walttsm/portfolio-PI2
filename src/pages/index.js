import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Olá, seja bem-vindo!</h1>
    <p>
      Somos a DevUni e este é o portal desenvolvido por nós como componente
      avaliativo da disciplina de Projeto Interdisciplinar.
    </p>
    <p>
      Para accessar o blog e ver nossas postagens, acesse a aba 'Blog' usando a
      navegação acima.
    </p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
