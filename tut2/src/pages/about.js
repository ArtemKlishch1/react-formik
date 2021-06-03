import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const About = () => {
  return (
    <Layout>
      <main className="page">
        <section className="about-page">
          <article>
            <h2>I'm baby coloting book poke taxidermy</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
              adipisci laudantium commodi delectus sunt eius repellat obcaecati
              laborum illum dolore.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium, ea.
            </p>
            <Link to="/contact" className="btn">
              contact
            </Link>
          </article>
          <StaticImage
            src="../assets/images/about.jpeg"
            alt="Person Pouring Salt in Bowl"
            className="about-img"
            placeholder="blurred"
          />
        </section>
      </main>
    </Layout>
  )
}

export default About
