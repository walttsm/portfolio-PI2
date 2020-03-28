import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import BlogStyles from "./blog.module.scss"
import SEO from "../components/seo"

const BlogPage = () => {
  const posts = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              titulo
              data
              autor
            }
            html
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Blog" />
      <h1>Postagens do blog</h1>
      <ol>
        {posts.allMarkdownRemark.edges.map(post => {
          return (
            <li className={BlogStyles.post}>
              <h2>
                <Link to={`/blog/${post.node.id}`}>
                  {post.node.frontmatter.titulo}
                </Link>
              </h2>
              <div>
                <p>
                  <em>
                    Escrito por: {post.node.frontmatter.autor} - Em:{" "}
                    {post.node.frontmatter.data}
                  </em>
                </p>
              </div>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogPage
