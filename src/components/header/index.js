import React from "react"
import Navegacion from "../navegacion"
import { Logo, Contenido, header } from "./styled"

const Header = () => {
  return (
    <header css={header}>
      <Contenido>
        <Logo to="/">BienesRaices</Logo>
        <Navegacion />
      </Contenido>
    </header>
  )
}

export default Header
