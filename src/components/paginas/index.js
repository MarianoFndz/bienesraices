import React from "react"
import Image from "gatsby-image"
import Layout from "../layout"
import { graphql } from "gatsby"
import ListadoPropiedades from "../listadoPropiedades"
import { ContenidoPagina } from "./styled"

const Propiedades = ({
  data: {
    allStrapiPaginas: { nodes },
  },
}) => {
  const { nombre, contenido, imagen } = nodes[0]

  return (
    <Layout>
      <main className="contenedor">
        <h1>{nombre}</h1>
        <ContenidoPagina>
          <Image fluid={imagen.sharp.fluid} />
          <p>{contenido}</p>
        </ContenidoPagina>
      </main>
      {nombre === "Propiedades" && <ListadoPropiedades />}
    </Layout>
  )
}

export default Propiedades

export const query = graphql`
  query($id: String!) {
    allStrapiPaginas(filter: { id: { eq: $id } }) {
      nodes {
        nombre
        contenido
        imagen {
          sharp: childImageSharp {
            fluid(maxWidth: 1500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
