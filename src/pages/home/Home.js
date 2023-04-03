import React from 'react'
import Page from '../../components/Page'
import Connect from './components/Connect'
import HeaderSection from './components/HeaderSection'
import Rewards from './components/Rewards'
import Testimonies from './components/Testimonies'


const Home = () => {
  return (
    <Page title="Personals | Home Page" sx={{mt:10, px:0.5}}>
      <HeaderSection />
      <Rewards />
      <Testimonies />
      <Connect />
    </Page>
  )
}

export default Home