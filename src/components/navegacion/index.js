import React from "react"
import { NavLink, Nav } from "./styled"

const Navegacion = () => {
  return (
    <Nav>
      <NavLink to={"/"} activeClassName="pagina-actual">
        Inicio
      </NavLink>
      <NavLink to={"/nosotros"} activeClassName="pagina-actual">
        Nosotros
      </NavLink>
      <NavLink to={"/propiedades"} activeClassName="pagina-actual">
        Propiedades
      </NavLink>
    </Nav>
  )
}

export default Navegacion
