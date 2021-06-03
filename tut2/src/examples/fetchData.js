// import React from "react"
// import { useStaticQuery, graphql } from "gatsby"

// const ComponentName = () => {
//   const data = useStaticQuery(graphql`
//     {
//       site {
//         siteMetadata {
//           author
//           description
//           simpleData
//           title
//           person {
//             age
//             name
//           }
//           complexData {
//             age
//             name
//           }
//         }
//       }
//     }
//   `)
//   return (
//     <div>
//       <h2>{data.site.siteMetadata.person.name}</h2>
//       {data.site.siteMetadata.complexData.map((item, index) => {
//         return (
//           <p key={index}>
//             {item.name}: {item.age}
//           </p>
//         )
//       })}
//     </div>
//   )
// }

// export default ComponentName

import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  query FirstQuery {
    site {
      info: siteMetadata {
        author
        description
        simpleData
        title
        person {
          age
          name
        }
        complexData {
          age
          name
        }
      }
    }
  }
`

const FetchData = () => {
  // название компонента должно обязательно быть с большой буквы, иначе будет ошибка
  //   const data = useStaticQuery(getData)
  const {
    site: {
      info: { title },
    },
  } = useStaticQuery(getData)
  return (
    <div>
      {/* <h2>Name: {data.site.info.person.name}</h2> */}
      <h2>site title is: {title}</h2>
    </div>
  )
}

export default FetchData
