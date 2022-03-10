import React from 'react'
import './about.css'
import ME from '../../assets/programmer.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {BsFolderCheck} from 'react-icons/bs'

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About me</h2>
        <div className="container about__container">
          <div className="about__me">
            <div className="about__me-image">
              <img src={ME} alt="" />
            </div>
          </div>

          <div className="about__content">
            <div className="about__cards">
              <article className="about__card">
                <FaAward className="about__icon"/>
                <h5>Experience</h5>
                <small>3+ years working</small>
              </article>
              <article className="about__card">
                <FiUsers className="about__icon"/>
                <h5>Clients</h5>
                <small>20+ Worldwide</small>
              </article>
              <article className="about__card">
                <BsFolderCheck className="about__icon"/>
                <h5>Projects</h5>
                <small>20+ completed</small>
              </article> 
            </div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum sunt temporibus et consequuntur voluptatum blanditiis iure, expedita tempora voluptate quisquam vero aperiam repellat ratione nostrum voluptates sequi. Repellat eaque quo laudantium, deleniti veniam optio eum possimus perspiciatis ad cum ut ex nisi accusantium! Animi deserunt explicabo optio labore, at pariatur deleniti ea odio et placeat!
            </p>
            <a href="#contact" className="btn btn-primary">Let's talk </a>
          </div>
        </div>

    </section>
  )
}

export default About