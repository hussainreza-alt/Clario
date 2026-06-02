import { useState } from 'react'
import { Cta, Dashboard, FAQ, Features, Footer1, Hero, Nav, Pricing, Testimonial, Testimonials } from './components'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return(
    <>
    <Nav/>
    <Hero/>
    <Features/>
    <Dashboard/>
    <Testimonials/>
    <Pricing/>
    <Testimonial/>
    <FAQ/>
    <Cta/>
    <Footer1/>
    </>
  )
}

export default App
