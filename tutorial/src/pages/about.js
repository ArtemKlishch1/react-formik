import React from "react"
import Layout from "../components/Layout"
import * as aboutStyles from "../examples/about.module.css"
import styled from "styled-components"

const about = () => {
  return (
    // <Layout>
    //   {/* <div className="about-heading"> */}
    //   <div className={aboutStyles.page}>
    //     <h1>hello from the about page</h1>
    //     <h1>hello world</h1>
    //     <p className={aboutStyles.text}>
    //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
    //       recusandae dolores sapiente ipsum, illo quidem sint corporis
    //       repudiandae, magnam nostrum fugit rem molestias quasi aperiam,
    //       provident ratione inventore soluta ducimus?
    //     </p>
    //   </div>
    // </Layout>
    <Layout>
      <Wrapper>
        <h1>hello from the about page</h1>
        <h1>hello world</h1>
        <p className="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          recusandae dolores sapiente ipsum, illo quidem sint corporis
          repudiandae, magnam nostrum fugit rem molestias quasi aperiam,
          provident ratione inventore soluta ducimus?
        </p>
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.section`
  color: red;
  h1 {
    color: yellowgreen;
  }
  .text {
    text-transform: uppercase;
  }
`

export default about
