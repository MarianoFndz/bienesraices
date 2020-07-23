import React from "react"
import { ListadoIconos } from "./styled"
import useIconos from "./hookPeticionIconos"

const Iconos = ({ wc, estacionamiento, habitaciones }) => {
  const { iconos } = useIconos()

  const imagenesIconos = iconos.edges
  const WCIcono = imagenesIconos[2].node.publicURL
  const EstacionamientoIcono = imagenesIconos[1].node.publicURL
  const HabitacionesIcono = imagenesIconos[0].node.publicURL

  return (
    <ListadoIconos>
      <li>
        <img src={WCIcono} alt="icono wc" />
        <p>{wc}</p>
      </li>
      <li>
        <img src={EstacionamientoIcono} alt="icono estacionamiento" />
        <p>{estacionamiento}</p>
      </li>
      <li>
        <img src={HabitacionesIcono} alt="icono habitaciones" />
        <p>{habitaciones}</p>
      </li>
    </ListadoIconos>
  )
}

export default Iconos
