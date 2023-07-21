import React from 'react'
import Img1 from '../images/IMG_20230116_191612.jpg'
import './Styles.css'



function About() {
  return (
    <section id="about">
    <div id="my-image">
        <img src={Img1}/>
    </div>

    <div id="about-para">

        <p>
          I believe that I can be a good team player with the ability to work under minimum guidance especially when carrying out challenging assignment. I consider myself as a very ambitious, motivated, career oriented person, willing to accept challenges,
          energetic and results oriented, with excellent leadership abilities,and an active and hardworking person who is patient and diligent, with great adaptability to changing working conditions.
        </p>

    </div>

</section>

  )
}

export default About
