import React from 'react'
import Link from 'gatsby-link'
import { Timeline } from 'react-twitter-widgets'
import ReactDOM from 'react-dom';
import { OpenWeatherMap } from 'react-weather';

const Social = () => (
  <div className='box'
  style={{
    height: '490px',
    width: '360px',
    marginTop: '20px',
    marginBottom:'20px',
    marginLeft: '98px',
    paddingTop: '2px'
  }}>
  <Timeline
    dataSource={{
      sourceType: 'profile',
      screenName: 'redcross'
    }}
    options={{
      username: 'Redcross',
      height: '480'
    onLoad={() => console.log('Timeline is loaded!')}
  />
  </div>


)
render() {
  return (
    <OpenWeatherMap city="Jerusalem" country="IL" appid="9e8b1fc51bb1464177702cfcf02a3fa5" />
  )
}

export default Social
