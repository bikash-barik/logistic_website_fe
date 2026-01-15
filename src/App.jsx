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
    <Footer/>
    </>
  )
}

export default App
