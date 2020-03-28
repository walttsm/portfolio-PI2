import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Olá, seja bem-vindo(a)!</h1>
    <p>
      Somos a DevUni e este é o portal desenvolvido por nós como componente
      avaliativo da disciplina de Projeto Interdisciplinar.
    </p>
    <p>
      Para accessar o blog e ver nossas postagens, acesse a aba 'Blog' usando a
      navegação acima.
    </p>
  </Layout>
)

export default IndexPage
