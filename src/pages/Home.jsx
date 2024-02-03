import React from 'react'
import Banner from '../components/sections/Banner'
import Categories from '../components/sections/Categories'
import { AboutHome } from '../components/_index'
import Bluebanner from '../components/sections/bluebanner'

function Home() {
  return (
    <div className="home-page">
      <Banner/>
      <Categories/>
      <AboutHome/>
      <Bluebanner/>
    </div>
  )
}

export default Home