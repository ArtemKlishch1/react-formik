import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"

export default function Home() {
  return (
    <Layout>
      <div className="home-heading">
        <h1>hello people!</h1>
        <h1>hello people!</h1>
        <h1>hello people!</h1>
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
