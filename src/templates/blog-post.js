import React from "react"

import Layout from "../components/layout"
import { graphql } from "gatsby"
import Styles from "./blog-post.module.scss"

export const query = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        titulo
        data
        autor
      }
      html
      fields {
        readingTime {
          text
        }
      }
    }
  }
`

const BlogPost = props => {
  return (
    <Layout>
      <h1>{props.data.markdownRemark.frontmatter.titulo}</h1>
      <p className={Styles.info}>
        <em>
          {props.data.markdownRemark.frontmatter.data} - Autor:{" "}
          {props.data.markdownRemark.frontmatter.autor} -{" "}
          {props.data.markdownRemark.fields.readingTime.text}
        </em>
      </p>
      <div
        className={Styles.text}
        dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
      ></div>
    </Layout>
  )
}

export default BlogPost
