import { useState } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Section2 from './components/Section2'
import Section3 from './components/Section3'
import Section4 from './components/Section4'
import Commitment from './components/Commitment'
import Growth from './components/Growth'
import CountriesServed from './components/CountriesServed'
import Clientele from './components/Clientele'
import Section5 from './components/Section5'
import Section6 from './components/Section6'
import Section7 from './components/Section7'
import Section8 from './components/Section8'


import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Nav/>
    <Hero/>
    <Section2/>
    <Section3/>
    <Section4/>
    <Commitment/>
    <Growth/>
    <CountriesServed/>
    <Clientele/>
    <Section5/>
    <Section6/>
    <Section8/>
    <Section7/>
    <Footer/>
    </>
  )
}

export default App
