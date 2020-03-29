import React from "react"
import { FaGithub, FaInstagram, FaLinkedin, FaSteam } from "react-icons/lib/fa"

import Layout from "../components/layout"
import SEO from "../components/seo"

import aboutStyles from "./about.module.scss"
import erickImg from "../assets/images/erick.png"
import walterImg from "../assets/images/walter.jpg"

const AboutPage = () => (
  <Layout>
    <SEO title="About Us" />
    <h1>Quem somos</h1>
    <div className={aboutStyles.container}>
      <div className={aboutStyles.imgSocial}>
        <img className={aboutStyles.img} alt="Foto de Erick" src={erickImg} />
        <div className={aboutStyles.social}>
          <a href="/about">
            <FaInstagram />
          </a>
          <a href="https://github.com/erickhoga">
            <FaGithub />
          </a>
          <a href="https://steamcommunity.com/id/erickhoga">
            <FaSteam />
          </a>
          <a href="https://www.linkedin.com/in/erick-hoga-46597a156/">
            <FaLinkedin />
          </a>
        </div>
      </div>
      <div className={aboutStyles.info}>
          <h2>Erick Hoga</h2>
        <div className={aboutStyles.infoText}>
          <p>Olá, tenho 22 anos atualmente estudante no instituto Unifil em ciência da computação, hoje moro em Londrina(PR) porém já morei 9 anos no Japão e tenho intenção de trabalhar/estudar lá na área de desenvolvimento de jogos.
            <br></br><br></br>
            Fiz alguns cursos entre eles: <br/> <br/>
            - Técnico de informática (Senai); <br/> <br/>
            - Curso de japonês (Vicente Rijo); <br/> <br/>
          </p>
        </div>
      </div>
    </div>
    <hr />
    <div className={aboutStyles.container}>
      <div className={aboutStyles.imgSocial}>
        <img className={aboutStyles.img} alt="Foto de Walter" src={walterImg} />
        <div className={aboutStyles.social}>
          <a href="https://www.instagram.com/walttsm/">
            <FaInstagram />
          </a>
          <a href="https://github.com/walttsm">
            <FaGithub />
          </a>
          <a href="https://steamcommunity.com/id/walttsm">
            <FaSteam />
          </a>
          <a href="https://www.linkedin.com/in/walter-marinho-47a98b190/">
            <FaLinkedin />
          </a>
        </div>
      </div>

      <div className={aboutStyles.info}>
        <h2>Walter Marinho</h2>
        <div className={aboutStyles.infoText}>
          <p>Olá, meu nome é Walter e vou te falar um pouco sobre mim.</p>
          <p>
            Nasci em Apucarana-PR, e atualmente moro em Londrina-PR, e estudo
            Ciência da computação na UNIFIL. Atualmente tenho feito alguns
            projetos em diversas linguagens, como java, python e javascript.
            Estou me direcionando para o estudo de React e React Native.
          </p>
          <p>Alguns de meus Hobbies são:</p>
          <ol>
            <li>Jogos</li>
            <li>Fotografia</li>
            <li> Esportes</li>
          </ol>
          <p>
            Caso quiser, fique à vontade para me seguir nas redes sociais. Vamos
            interagir!
          </p>
        </div>
      </div>
    </div>
  </Layout>
)

export default AboutPage
