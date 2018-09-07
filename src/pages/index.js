import React from 'react'
import Link from 'gatsby-link'

import Tabs from '../components/data-tabs'

const Home = () => (
  <div>
    <Tabs />
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default Home
