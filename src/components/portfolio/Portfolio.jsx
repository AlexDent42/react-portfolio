import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/port1.png'
import IMG2 from '../../assets/port2.png'
import IMG3 from '../../assets/port3.png'
import IMG4 from '../../assets/port4.png'
import IMG5 from '../../assets/port5.png'
import IMG6 from '../../assets/port6.png'

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My recent work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
            <h3>This is a portfolio item title </h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com" className="btn" target='_blank'>Github</a>
            <a href="https://dribbble.com/alien_pixels" className="btn btn-primary" target='_blank'>Live demo</a>
            </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
            <h3>This is a portfolio item title </h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com" className="btn" target='_blank'>Github</a>
            <a href="https://dribbble.com/alien_pixels" className="btn btn-primary" target='_blank'>Live demo</a>
            </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
            <h3>This is a portfolio item title </h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com" className="btn" target='_blank'>Github</a>
            <a href="https://dribbble.com/alien_pixels" className="btn btn-primary" target='_blank'>Live demo</a>
            </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
            <h3>This is a portfolio item title </h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com" className="btn" target='_blank'>Github</a>
            <a href="https://dribbble.com/alien_pixels" className="btn btn-primary" target='_blank'>Live demo</a>
            </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG5} alt="" />
          </div>
            <h3>This is a portfolio item title </h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com" className="btn" target='_blank'>Github</a>
            <a href="https://dribbble.com/alien_pixels" className="btn btn-primary" target='_blank'>Live demo</a>
            </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG6} alt="" />
          </div>
            <h3>This is a portfolio item title </h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com" className="btn" target='_blank'>Github</a>
            <a href="https://dribbble.com/alien_pixels" className="btn btn-primary" target='_blank'>Live demo</a>
            </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio