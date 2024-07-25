import React from 'react'
import Carousel from '../../components/Carousel'
import Campaigns from '../../components/Campaigns'
import MenuWrapper from '../../components/product/MenuWrapper'
const Home = () => {
  return (
    // <React.Fragment>
    <div>
      <Carousel />
      <Campaigns />
      <MenuWrapper></MenuWrapper>
    </div>
      
    // </React.Fragment>
  )
}

export default Home