import React, { useState, useEffect, Fragment } from "react"
import { css } from "@emotion/core"
import usePropiedades from "../hooks/usePropiedades"
import PropiedadPreview from "./propiedadesPreview.js"
import ListadoPropiedadesCSS from "../css/listadoPropiedades.module.css"
import useFiltro from "../hooks/useFiltro"

const ListadoPropiedades = () => {
  const resultado = usePropiedades()
  const [propiedades] = useState(resultado)
  const [filtradas, guardarFiltradas] = useState([])

  const { categoria, FiltroUI } = useFiltro()

  useEffect(() => {
    if (categoria) {
      const filtro = propiedades.filter(
        propiedad => propiedad.categorias.nombre === categoria
      )
      guardarFiltradas(filtro)
    } else {
      guardarFiltradas(propiedades)
    }
  }, [categoria])

  return (
    <>
      <h2
        css={css`
          margin-top: 5rem;
        `}
      >
        Nuestras Propiedades
      </h2>

      {FiltroUI()}

      <ul className={ListadoPropiedadesCSS.propiedades}>
        {filtradas.map(propiedad => (
          <PropiedadPreview key={propiedad.id} propiedad={propiedad} />
        ))}
      </ul>
    </>
  )
}

export default ListadoPropiedades
