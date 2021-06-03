import React from "react"
import Layout from "../components/Layout"

const Contact = () => {
  return (
    <Layout>
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>What to get in touch</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe
              voluptates nostrum incidunt amet obcaecati quasi rerum doloremque,
              similique earum pariatur.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque, ipsam!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Quibusdam tempore consequatur quia debitis, ullam voluptatum
              ratione eos voluptas ducimus repellendus.
            </p>
          </article>
          <article>
            <form className="form contact-form">
              <div className="form-row">
                <label htmlFor="name">your name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">your email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">message</label>
                <textarea name="message" id="message"></textarea>
              </div>
              <button type="submit" className="btn block">
                submit
              </button>
            </form>
          </article>
        </section>
      </main>
    </Layout>
  )
}

export default Contact
