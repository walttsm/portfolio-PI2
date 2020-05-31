import React from "react"
import { Link } from "gatsby"
import { FaGitlab, FaGithub } from "react-icons/lib/fa"

import Layout from "../components/layout"
import ProjectsStyles from "./projects.module.scss"
import SEO from "../components/seo"
import img1 from "../images/projects/img1.jpg"
import img2 from "../images/projects/img2.jpg"


const ProjectsPage = () => {
  return (
    <Layout>
      <SEO title="Projetos" />
      <h1>Projetos conjuntos</h1>
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
        <h2>Animador de algoritmos</h2>
        <p>
          Para estudar os algoritmos de classificação e ordenação,
           fizemos um programa em JAVA que anima cada etapa de ordenação 
           para alguns algoritmos. Abaixo fica um link para o repositório GitLab do projeto.
        </p>

        <p>Link para repositório:
          <a href="https://gitlab.com/walttsm/animador-de-classificadores">
          <FaGitlab />
          </a>
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
      <hr />
      <h1>Projetos Pessoais</h1>
      <h2>Erick</h2>
      <div className={ProjectsStyles.project}>
        <h2>Jogo em Unity</h2>
        <p>
          Um jogo que consiste em uma batalha contra o computador utilizando da mecanica do jo ken po, em formas de objeto que se colidem.<br/><br/>
          Ainda não muito desenvolvido porém com escolhas de personagens e fases e poderes através de combo.<br/><br/>
          <div>
            <img src={img1} alt="foto1" width="600" height="300"/> 
            <img src={img2} alt="foto2" width="600" height="300"/> 
          </div>
          <br/><br/>
          <p>
            Pode ser feito o download através do link_    
            <a href="https://drive.google.com/drive/u/0/folders/1UEzZQTKZDh_A8Rl6uN-6iKfN1OoP4tM0">Download</a>
          </p>
        </p>
      </div>
      <hr />
      <h2>Walter</h2>
        <div className={ProjectsStyles.project}>
          <h2>Setup</h2>
          <p>
            Montei meu setup por conta própria, onde comprei as peças para o desktop e o montei.
            Segue mais detalhes da configuração:<br/><br/>
            <ul>
              <li>Placa-mãe ASUS Prime b350-plus</li>
              <li>Processador Ryzen 1600x six-core @ 3.8 Ghz</li>
              <li>16 Gb Ram DDR4 3000 Mhz</li>
              <li>Placa de vídeo ASUS GTX1080</li>
              <li>Fonte EVGA 750W 80 plus bronze</li>
              <li>Monitor Samsung 144Hz 1ms</li>
            </ul>
            Além disso, utilizo um Notebook DELL Inspiron 5537 para trabalhos que exigem portabilidade.
            <img src="imagem do setup" alt="Computador"/> 
            <img src="imagem do pc" alt="Computador"/> 
            </p>
          </div>
      <hr />
      <div className={ProjectsStyles.project}>
          <h2>Sistema de ponto PHP</h2>
          <p>
            Usando PHP em conjunto com a biblioteca XAMPP, desenvolvi um pequeno sistema de pontos,
             com o objetivo de me familiarizar com relações com bancos de dados e familiaridade 
             com queries de consulta em bancos.
          </p>
          <p>Link para repositório: <a href="https://github.com/walttsm/sistema-ponto-php"><FaGithub/></a></p>
      </div>
      <hr />
      <div className={ProjectsStyles.project}>
          <h2>Gerador de declarações</h2>
          <p>
            Usando python em conjunto com ReportLab, criei um gerador de declarações para bancas de TCC de forma automatizada.
          </p>
          <p>Link para repositório: <a href="https://gitlab.com/npi-unifil/gerador-de-declara-es"><FaGitlab/></a></p>
      </div>
      <hr />
    </Layout>
  )
}

export default ProjectsPage
