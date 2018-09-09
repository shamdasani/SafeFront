import React from 'react'
import Link from 'gatsby-link'

import Tabs from '../components/data-tabs'
import Map from '../components/map'
import Social from '../components/social'
import Reports from '../components/reports'

const Home = () => (
  <div>
    <Tabs />
    <Reports />
    <Map />
    <br />
    <br />
    <br />
    <br />

    <Social />
  </div>
)

export default Home
