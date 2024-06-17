import { useState } from 'react'

import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import Category from './component/Category'
import FeatureSectionFruits from './component/FeatureSectionFruits'
import FeatureSectionBreakfast from './component/FeatureSectionBreakfast'
import Banner from './component/Banner'
import BlockCard from './component/BlockCard'
import BlockSection from './component/BlockSection'
import News from './component/News'
import FeatureSection from './component/FeatureSection'
import Footer from './component/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <Hero/>
     <Category/>
     <FeatureSectionFruits/>
     <FeatureSectionBreakfast/>
     <Banner/>
     <BlockSection/>
     <News/>
     <FeatureSection/>
     <Footer/>
    </>
  )
}

export default App
