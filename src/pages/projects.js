import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import ProjectsStyles from "./projects.module.scss"
import SEO from "../components/seo"

const ProjectsPage = () => {
  return (
    <Layout>
      <SEO title="Projetos" />
      <h1>Projetos</h1>
      <div className={ProjectsStyles.project}>
        <h2>Este blog</h2>
        <p>
          Criamos este blog, para maiores informações, clique{" "}
          <Link to="/" className={ProjectsStyles.link}>
            aqui
          </Link>
          .
        </p>
      </div>
      <hr />
      <div className={ProjectsStyles.project}>
        <h2>Jogo simples</h2>
        <p>
          Estamos em estágios iniciais de criação deste projeto para outra
          disciplina. Fique de olho por mais atualizações!
        </p>
      </div>
    </Layout>
  )
}

export default ProjectsPage
