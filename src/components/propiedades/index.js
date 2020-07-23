import React from "react"
import Iconos from "../iconos"
import Image from "gatsby-image"
import Layout from "../layout"
import { graphql } from "gatsby"
import { Contenido, Sidebar } from "./styled"

const Propiedades = ({
  data: {
    allStrapiPropiedades: { nodes },
  },
}) => {
  const {
    nombre,
    descripcion,
    wc,
    estacionamiento,
    habitaciones,
    agentes,
    imagen,
    precio,
  } = nodes[0]

  return (
    <Layout>
      <h1> {nombre} </h1>
      <Contenido>
        <main>
          <Image fluid={imagen.sharp.fluid} /> <p> {descripcion} </p>
        </main>{" "}
        <Sidebar>
          <p className="precio"> {precio} </p>
          <Iconos
            wc={wc}
            estacionamiento={estacionamiento}
            habitaciones={habitaciones}
          />
          <div className="agente">
            <h2> Vendedor: </h2> <p> {agentes.nombre} </p>
            <p> Tel: {agentes.telefono} </p> <p> Email: {agentes.email} </p>
          </div>
        </Sidebar>
      </Contenido>
    </Layout>
  )
}

export default Propiedades

export const query = graphql`
  query($id: String!) {
    allStrapiPropiedades(filter: { id: { eq: $id } }) {
      nodes {
        nombre
        descripcion
        wc
        habitaciones
        precio
        estacionamiento
        agentes {
          nombre
          telefono
          email
        }
        imagen {
          sharp: childImageSharp {
            fluid(maxWidth: 3080, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
