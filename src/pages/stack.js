import React from "react"

import Layout from "../components/layout"

const StackPage = () => {
  return (
    <Layout>
      <h1>Nossa stack</h1>
      <h2>Tecnologias:</h2>
      <p>Nossa principal stack consiste em:</p>
      <ol>
        <li>NodeJS</li>
        <li>React</li>
      </ol>
      <p>Mas também trabalhamos com:</p>
      <ul>
        <li>PHP e Laravel</li>
        <li>Bancos de dados em mySQL</li>
        <li>Java</li>
      </ul>
    </Layout>
  )
}

export default StackPage
