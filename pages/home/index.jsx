import React from 'react'
import Carousel from '../../components/Carousel'
import Campaigns from '../../components/Campaigns'
import MenuWrapper from '../../components/product/MenuWrapper'
import About from '../../components/About'
const Home = () => {
  return (
    // <React.Fragment>
    <div>
      <Carousel />
      <Campaigns />
      <MenuWrapper></MenuWrapper>
      <About></About>
    </div>
      
    // </React.Fragment>
  )
}

export default Home