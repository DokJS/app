import React from 'react'
import image_left from '../../assets/apt1.jpeg'
import image_center from '../../assets/apt2.jpeg'
import image_right from '../../assets/apt3.jpeg'
import './Best.css'

const Best = () => {
  return (
      <section className='best'>
          <h1>Find Best Rated Properties</h1>
          <div>
              <span className='bold'>All</span>
              <span>Commercial</span>
              <span>Residential</span>
              <span>Agricultural</span>
          </div>
          <div className="best container">
              <img src={image_left} alt="modern building" className='img-size' />
              <img src={image_center} alt="classic building" className='img-size' />
              <img src={image_right} alt="geometric building" className='img-size' />
          </div>
          <a href="#">View All</a>
    </section>
  )
}

export default Best