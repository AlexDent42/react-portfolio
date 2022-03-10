import React from 'react'
import './services.css'
import {BsCheck2} from 'react-icons/bs'

const Services = () => {
  return (
    <section id="services">
      <h5>What I offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX design </h3>
          </div>
            <ul className="service__list">
              <li>
                <BsCheck2 className="service__list-icon" />
                <p>Lorem ipsum, dolor sit amet consectetur. Doloribus, ex.</p>
              </li>
              <li>
                <BsCheck2 className="service__list-icon" />
                <p>Lorem ipsum, dolor sit amet consectetur. Doloribus, ex.</p>
              </li>
              <li>
                <BsCheck2 className="service__list-icon" />
                <p>Lorem ipsum, dolor sit amet consectetur. Doloribus, ex.</p>
              </li>
              <li>
                <BsCheck2 className="service__list-icon" />
                <p>Lorem ipsum, dolor sit amet consectetur. Doloribus, ex.</p>
              </li>
              <li>
                <BsCheck2 className="service__list-icon" />
                <p>Lorem ipsum, dolor sit amet consectetur. Doloribus, ex.</p>
              </li>
              <li>
                <BsCheck2 className="service__list-icon" />
                <p>Lorem ipsum, dolor sit amet consectetur. Doloribus, ex.</p>
              </li>
            </ul>
          
        </article> 
        {/*END OF UI/UX*/}
        <article className="service">
          <div className="service__head">
            <h3>Web development </h3>
          </div>
            <ul className="service__list">
              <li>
                <BsCheck2 className="service__list-icon" />
                <p>Lorem ipsum, dolor sit amet consectetur. Doloribus, ex.</p>
              </li>
              <li>
                <BsCheck2 className="service__list-icon" />
                <p>Lorem ipsum, dolor sit amet consectetur. Doloribus, ex.</p>
              </li>
              <li>
                <BsCheck2 className="service__list-icon" />
                <p>Lorem ipsum, dolor sit amet consectetur. Doloribus, ex.</p>
              </li>
              <li>
                <BsCheck2 className="service__list-icon" />
                <p>Lorem ipsum, dolor sit amet consectetur. Doloribus, ex.</p>
              </li>
              <li>
                <BsCheck2 className="service__list-icon" />
                <p>Lorem ipsum, dolor sit amet consectetur. Doloribus, ex.</p>
              </li>
              <li>
                <BsCheck2 className="service__list-icon" />
                <p>Lorem ipsum, dolor sit amet consectetur. Doloribus, ex.</p>
              </li>
            </ul>
          
        </article> 
        {/*END OF Web development*/}
        <article className="service">
          <div className="service__head">
            <h3>Content creation </h3>
          </div>
            <ul className="service__list">
              <li>
                <BsCheck2 className="service__list-icon" />
                <p>Lorem ipsum, dolor sit amet consectetur. Doloribus, ex.</p>
              </li>
              <li>
                <BsCheck2 className="service__list-icon" />
                <p>Lorem ipsum, dolor sit amet consectetur. Doloribus, ex.</p>
              </li>
              <li>
                <BsCheck2 className="service__list-icon" />
                <p>Lorem ipsum, dolor sit amet consectetur. Doloribus, ex.</p>
              </li>
              <li>
                <BsCheck2 className="service__list-icon" />
                <p>Lorem ipsum, dolor sit amet consectetur. Doloribus, ex.</p>
              </li>
              <li>
                <BsCheck2 className="service__list-icon" />
                <p>Lorem ipsum, dolor sit amet consectetur. Doloribus, ex.</p>
              </li>
              <li>
                <BsCheck2 className="service__list-icon" />
                <p>Lorem ipsum, dolor sit amet consectetur. Doloribus, ex.</p>
              </li>
            </ul>
          
        </article> 
        {/*END OF Content creation*/}
      </div>
    </section>
  )
}

export default Services