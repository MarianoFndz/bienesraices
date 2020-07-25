import React from "react"
import Iconos from "../iconos"
import Image from "gatsby-image"
import { Card, Boton, Contenido } from "./styled"

const PropiedadPreview = ({ propiedad }) => {
  const {
    nombre,
    imagen,
    wc,
    estacionamiento,
    habitaciones,
    precio,
    slug,
  } = propiedad

  return (
    <Card>
      <Image fluid={imagen.fluid} />
      <Contenido>
        <h3> {nombre} </h3> <p className="precio"> $ {precio} </p>
        <Iconos
          wc={wc}
          estacionamiento={estacionamiento}
          habitaciones={habitaciones}
        />
        <Boton to={"/" + slug}> Visitar Propiedad </Boton>
      </Contenido>
    </Card>
  )
}

export default PropiedadPreview
