const urlSlug = require("url-slug")

exports.createPages = async ({ actions, graphql, reporter }) => {
  const resultado = await graphql(`
    query {
      allDatoCmsPagina {
        nodes {
          nombre
          id
          slug
        }
      }
      allDatoCmsPropiedad {
        nodes {
          nombre
          id
          slug
        }
      }
    }
  `)

  if (resultado.errors) {
    reporter.panic("No hubo resultados", resultado.errors)
  }

  const paginas = resultado.data.allDatoCmsPagina.nodes
  const propiedades = resultado.data.allDatoCmsPropiedad.nodes

  paginas.forEach(pagina => {
    actions.createPage({
      path: pagina.slug,
      component: require.resolve("./src/components/paginas"),
      context: {
        id: pagina.id,
      },
    })
  })

  propiedades.forEach(propiedad => {
    actions.createPage({
      path: propiedad.slug,
      component: require.resolve("./src/components/propiedades"),
      context: {
        id: propiedad.id,
      },
    })
  })
}
