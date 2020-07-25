import { graphql, useStaticQuery } from "gatsby"

const usePropiedades = () => {
  const datos = useStaticQuery(graphql`
    query {
      allDatoCmsPropiedad {
        nodes {
          nombre
          descripcion
          id
          wc
          precio
          estacionamiento
          habitaciones
          clase {
            nombre
          }
          agente {
            nombre
            telefono
            email
          }
          imagen {
            fluid(maxWidth: 600, maxHeight: 400) {
              ...GatsbyDatoCmsFluid
            }
          }
          slug
        }
      }
    }
  `)

  return datos.allDatoCmsPropiedad.nodes.map(propiedad => ({
    nombre: propiedad.nombre,
    descripcion: propiedad.descripcion,
    imagen: propiedad.imagen,
    id: propiedad.id,
    wc: propiedad.wc,
    estacionamiento: propiedad.estacionamiento,
    habitaciones: propiedad.habitaciones,
    agentes: propiedad.agente,
    precio: propiedad.precio,
    categorias: propiedad.clase,
    slug: propiedad.slug,
  }))
}

export default usePropiedades
