import React from 'react'
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import './Styles.css';

const Education = () => {
  return (
    <section id="education">

    <h1 class="section-heading mb75px">
        <span>
            <i class="fas fa-briefcase"></i>
        </span>
        <span> Education </span>
    </h1>


    <div class="timeline">
        <div class="timeline-box ">
          <h3 class="box1-heading">Government Degree college Barsar<br/><span class="heading-color">B.COM </span><br/><br/><span class="duration">Aug 2019 - Present</span></h3>
        </div>

        <div class="timeline-box ">
            <h3 class="box1-heading">Government senior secondory school Shahtalai<br/><span class="heading-color">Intermediate</span><br/><br/><span class="duration">2016 - 2017</span></h3>
        </div>

        <div class="timeline-box ">
            <h3 class="box1-heading">Government senior secondory school Shahtalai<br/><span class="heading-color">Matriculate</span><br/><br/><span class="duration">2014 - 2015</span></h3>
        </div>

        <div id="timeline-divider">
            <div class="timeline-traveller">
                <div style={{marginLeft:"-14.5px"}}>
                    {/* <i class="fas fa-plane"></i> */}
                    <AirplanemodeActiveIcon  className='aeroplane' style={{fontSize:"2rem", marginRight:"20px"}}/>
                </div>
            </div>
        </div>
    </div>

  </section>
  )
}

export default Education
