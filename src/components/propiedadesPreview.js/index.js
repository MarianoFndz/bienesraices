import React from "react"
import Iconos from "../iconos"
import Image from "gatsby-image"
import urlSlug from "url-slug"
import { Card, Boton, Contenido } from "./styled"

const PropiedadPreview = ({ propiedad }) => {
  const {
    nombre,
    imagen,
    wc,
    estacionamiento,
    habitaciones,
    precio,
  } = propiedad

  console.log(imagen)

  return (
    <Card>
      <Image fluid={imagen.sharp.fluid} />
      <Contenido>
        <h3> {nombre} </h3> <p className="precio"> $ {precio} </p>
        <Iconos
          wc={wc}
          estacionamiento={estacionamiento}
          habitaciones={habitaciones}
        />
        <Boton to={"/" + urlSlug(nombre)}> Visitar Propiedad </Boton>
      </Contenido>
    </Card>
  )
}

export default PropiedadPreview
