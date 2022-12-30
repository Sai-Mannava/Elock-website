import React from 'react'
import './experience.css'
const Experience = () => {
  return (
    <section id='experience'>
      <h5>Experience</h5>
      <div className="website">
      Instead of using a full stack framework, I wanted to use react to build this website because its the web architecture that a lot of companies are using today such as Facebook and Netflix. The companies that aren’t using react and angular use old architecture thats uses languages from the 90s like PHP. Many companies are looking for developers that could make this transition to react and angular based websites because the demand for dynamic components has increased. As a result, I wanted to showcase this skill by building this website using react. 
      </div>
      <div className="application">
      The challenge for E-lock I will face is developing software for the device. E-lock will use circuits, tracking bugs, and an arduino computer which all have been invented. However, the software that connects to the circuit wires is an application I am developing. During the recent Sacs Hackathon, I developed E-lock as my project and I accessed Digi-Key which is a cloud-based hardware API. As a result, I developed an E-lock prototype using Digi-Key’s arduino computer software. Furthermore, I also accessed the Flex API which has SMS messaging software which I tested for the prototype. E-lock is a product that is 75% software and 25% physical electronics and will change the bike security market.
      </div>
      </section>
  )
}

export default Experience