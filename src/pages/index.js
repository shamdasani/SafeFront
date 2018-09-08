import React from 'react'
import Link from 'gatsby-link'

import Tabs from '../components/data-tabs'
import Map from '../components/map'
import Social from '../components/social'
import {fetchWeather} from '../components/social'

const Home = () => (
  <div>
    <Tabs />
    <Map />
    <Social />
    {fetchWeather()}
  </div>
)

export default Home
