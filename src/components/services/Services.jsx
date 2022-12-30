import React from 'react'
import './services.css'
import ME from '/Users/saimannava/saimannavawebsite/src/assets/IMG_1470.PNG'
import ME1 from'/Users/saimannava/saimannavawebsite/src/assets/IMG_1490.jpeg'
//import ME2 from '/Users/saimannava/saimannavawebsite/src/assets/IMG_1510 2.jpeg'
const services = () => {
  return (
    <section id='services'>
      <h5>Hobbies</h5>
      <div className='pic1'>
        <img src={ME} alt='#'></img>
        <img src={ME1} alt='#'></img>
      </div>
      
      <div className='description'>
      Stress is a big thing for engineers, there are a lot of academics, projects, and events that can put a lot of stress on the mind. Running is an activity that keeps me stable, whether it is running by myself, with a friend, or even with a team.  Software companies like Google, Microsoft, and even Uber are big companies, and working for those companies will have its demands. I intend to keep up with those demands by running whenever I get free time for stress relief and well-being.

      </div>
      </section>
  )
}

export default services