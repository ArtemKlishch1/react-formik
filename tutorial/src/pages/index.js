import React from "react"
import { Link } from "gatsby"
import Navbar from "../components/Navbar"

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>hello people!</h1>
      <div>
        <Link to="/about">Go to about page</Link>
      </div>
      <div>
        <Link to="/company/history">history</Link>
      </div>
    </div>
  )
}
