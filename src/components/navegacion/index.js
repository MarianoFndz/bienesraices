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
    </Nav>
  )
}

export default Navegacion
