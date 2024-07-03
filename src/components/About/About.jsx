import React from 'react'
import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import profile_img from '../../assets/about_profile.svg';


const About = () => {
  return (
    <div className='about'>
          <div className="about-title">
                    <h1>About me</h1>
                    <img src={theme_pattern} alt="" />
          </div>
          <div className="about-section">
                    <div className="about-left">
                              <img src={profile_img} alt="" />
                    </div>
                    <div className="about-right">
                              <div className="about-para">
                                        <p>I am a frontend developer from california, USA with 10 years of experience in tesla and meta.</p>
                                        <p>I am a frontend developer from california, USA with 10 years of experience in tesla and meta.</p>
                              </div>
                              <div className="about-skills">
                                        <div className="about-skill"><p>HTML & CSS</p> <hr style={{width:"50%"}} /></div>
                                        <div className="about-skill"><p>React JS</p> <hr style={{width:"70%"}} /></div>
                                        <div className="about-skill"><p>Javascript</p> <hr style={{width:"60%"}} /></div>
                                        <div className="about-skill"><p>Next JS</p> <hr style={{width:"50%"}} /></div>
                              </div>
                    </div>
          </div>
          <div className="about-achievements">
                    <div className="about-achievement">
                              <h1>5+</h1>
                              <p>YEARS OF EXPERIENCE</p>
                    </div>
                    <hr />
                    <div className="about-achievement">
                              <h1>70+</h1>
                              <p>PROJECTS COMPLETED</p>
                    </div>
                    <hr />
                    <div className="about-achievement">
                              <h1>16+</h1>
                              <p>HAPPY CLIENTS</p>
                    </div>
          </div>
    </div>
  )
}

export default About