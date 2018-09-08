import React from 'react'
import Link from 'gatsby-link'

const Tabs = () => (
  <div>
    <section className="hero is-danger welcome is-small ">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">Welcome, American Red Cross</h1>
          <h2 className="subtitle">
            Here is a 360 degree view of the latest incidents in your area.
          </h2>
        </div>
        <br />
      </div>
    </section>
    <br />
    <section className="info-tiles mw8 center ">
      <div className="tile is-ancestor has-text-centered">
        <div className="tile is-parent">
          <article className="tile is-child box">
            <p className="title">439k</p>
            <p className="subtitle">Total Reports</p>
          </article>
        </div>
        <div className="tile is-parent">
          <article className="tile is-child box">
            <p className="title">59k</p>
            <p className="subtitle">Victims Affected</p>
          </article>
        </div>
        <div className="tile is-parent">
          <article className="tile is-child box">
            <p className="title">3.4k</p>
            <p className="subtitle">Locations</p>
          </article>
        </div>
        <div className="tile is-parent">
          <article className="tile is-child box">
            <p className="title">19</p>
            <p className="subtitle">Active Operations</p>
          </article>
        </div>
      </div>
    </section>
  </div>
)

export default Tabs
