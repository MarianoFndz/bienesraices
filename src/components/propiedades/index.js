import React from "react"
import Iconos from "../iconos"
import Image from "gatsby-image"
import Layout from "../layout"
import { graphql } from "gatsby"
import { Contenido, Sidebar } from "./styled"

const Propiedades = ({
  data: {
    allDatoCmsPropiedad: { nodes },
  },
}) => {
  const {
    nombre,
    descripcion,
    wc,
    estacionamiento,
    habitaciones,
    agente,
    imagen,
    precio,
  } = nodes[0]

  return (
    <Layout>
      <h1> {nombre} </h1>
      <Contenido>
        <main>
          <Image fluid={imagen.fluid} /> <p> {descripcion} </p>
        </main>{" "}
        <Sidebar>
          <p className="precio"> {precio} </p>
          <Iconos
            wc={wc}
            estacionamiento={estacionamiento}
            habitaciones={habitaciones}
          />
          <div className="agente">
            <h2> Vendedor: </h2> <p> {agente.nombre} </p>
            <p> Tel: {agente.telefono} </p> <p> Email: {agente.email} </p>
          </div>
        </Sidebar>
      </Contenido>
    </Layout>
  )
}

export default Propiedades

export const query = graphql`
  query($id: String!) {
    allDatoCmsPropiedad(filter: { id: { eq: $id } }) {
      nodes {
        nombre
        descripcion
        wc
        habitaciones
        precio
        estacionamiento
        agente {
          nombre
          telefono
          email
        }
        imagen {
          fluid(maxWidth: 3080) {
            ...GatsbyDatoCmsFluid
          }
        }
      }
    }
  }
`
