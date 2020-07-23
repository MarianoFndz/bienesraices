import React from "react"
import heroCSS from "../../css/hero.module.css"
import { ImageBackground } from "./styled"
import useEncuentra from "./hookPeticionPagina"

const Encuentra = () => {
  const { imagen } = useEncuentra()
  const fluid = imagen.sharp.fluid

  return (
    <ImageBackground tag="section" fluid={fluid} faceIn="soft">
      <div className={heroCSS.imagenbg}>
        <h3 className={heroCSS.titulo}> Encuentra la casa de tus sueños </h3>
        <p> 15 años de experiencia </p>
      </div>
    </ImageBackground>
  )
}

export default Encuentra
