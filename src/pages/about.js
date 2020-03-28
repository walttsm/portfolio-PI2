import React from "react"
import { FaGithub, FaInstagram, FaLinkedin, FaSteam } from "react-icons/lib/fa"

import Layout from "../components/layout"
import SEO from "../components/seo"

import aboutStyles from "./about.module.scss"
import walterImg from "../assets/images/walter.jpg"

const AboutPage = () => (
  <Layout>
    <SEO title="About Us" />
    <h1>Quem somos</h1>
    <div className={aboutStyles.container}>
      <div className={aboutStyles.imgSocial}>
        <img className={aboutStyles.img} alt="Foto de Erick" src="" />
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
        <div className={aboutStyles.infoText}>
          <p>Coloca o texto aqui erick</p>
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
