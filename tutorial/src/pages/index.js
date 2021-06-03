import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import { page, text } from "../examples/home.module.css"
import { ExampleButton } from "../examples/button"

export default function Home() {
  return (
    <Layout>
      <ExampleButton>Click me</ExampleButton>
      {/* <div className="home-heading"> */}
      <div className={page}>
        <h1>hello people!</h1>
        <h1>hello people!</h1>
        <h1>hello people!</h1>
        <p className={text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          recusandae dolores sapiente ipsum, illo quidem sint corporis
          repudiandae, magnam nostrum fugit rem molestias quasi aperiam,
          provident ratione inventore soluta ducimus?
        </p>
      </div>
      <div>
        <Link to="/about">Go to about page</Link>
      </div>
      <div>
        <Link to="/company/history">history</Link>
      </div>
    </Layout>
  )
}
