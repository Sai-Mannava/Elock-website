import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '/Users/saimannava/saimannavawebsite/src/assets/IMG_1441 2.jpeg'
const header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Sai Mannava</h1>
        <h5 className="text-light">Emerging Developer</h5>
        <CTA />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default header