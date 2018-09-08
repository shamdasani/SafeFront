import React from 'react'
import Link from 'gatsby-link'

import Tabs from '../components/data-tabs'
import Map from '../components/map'
import Social from '../components/social'
import {fetchWeather} from '../components/social'
import TestFetch from '../components/testFetch'

const Home = () => (
  <div>
    <Tabs />
    <Map />
    <Social />
    <TestFetch />
  </div>
)

export default Home
