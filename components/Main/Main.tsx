import { useEffect, useState } from 'react'
import Hero from '../Hero/Hero'
import Wedo from '../Wedo/Wedo'
import AboutUs from '../AboutUs/AboutUs'
import Shipping from '../Shipping/Shipping'
import Frequently from '../Frequently/Frequently'
import GetTouch from '../GetTouch/GetTouch'
import OurServices from '../OurServices/OurServices'

function Main() {
  return (
    <main>
      <section className="nav_section">
        <Hero />
      </section>
      <section className="nav_section">
        <OurServices />
        <Wedo />
      </section>
      <section className="nav_section">
        <AboutUs />
      </section>
      <section className="nav_section">
        <Shipping />
      </section>
      <section className="nav_section">
        <Frequently />
        <GetTouch />
      </section>
    </main>
  )
}

export default Main
