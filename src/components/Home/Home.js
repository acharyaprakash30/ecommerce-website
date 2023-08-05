import React from 'react'
import Product from '../Product/Product'
import Parallax from '../Parallax/Parallax'
import Gallery from '../Gallery/Gallery'
import Hero from '../Hero/Hero'

const Home = () => {
  return (
    <>
        <Hero />
        <Product />
        <Parallax />
        <Gallery />
    </>
  )
}

export default Home