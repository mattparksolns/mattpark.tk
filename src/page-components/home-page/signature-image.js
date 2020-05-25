import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const SignatureImage = () => {
  const data = useStaticQuery(graphql`
      query {
          placeholderImage: file(relativePath: { eq: "images/signature.png" }) {
              childImageSharp {
                  fluid {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
      }
  `)
  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
}
export default SignatureImage
