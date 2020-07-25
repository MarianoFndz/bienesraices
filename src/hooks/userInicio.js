import { graphql, useStaticQuery } from "gatsby"

const useInicio = () => {
  const resultado = useStaticQuery(graphql`
    query {
      allDatoCmsPagina(filter: { nombre: { eq: "Inicio" } }) {
        nodes {
          id
          nombre
          contenido
          imagen {
            fluid(maxWidth: 3080) {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }
  `)

  return resultado.allDatoCmsPagina.nodes.map(inicio => ({
    nombre: inicio.nombre,
    contenido: inicio.contenido,
    imagen: inicio.imagen,
  }))
}

export default useInicio
