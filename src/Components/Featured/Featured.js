import React from 'react'
import './Featured.css'
import image_house from '../../assets/house1.jpg'
import image_bedroom_center from '../../assets/bed1.jpg'
import image_bedroom_left from '../../assets/bed2.jpg'
import image_kitchen from '../../assets/kitchen.jpg'
import image_bathroom from '../../assets/bath1.jpg'

const Featured = () => {
  return (
    <section className='featured'>
          <h1 className='featured-text'>Top Featured Listings</h1>
          <p>Selected listings by City, State, & Zip based on views.</p>
          <div className="container featured">
              <img src={image_house} alt="house" className='main-image' />
              <img src={image_bedroom_center} alt="bedroom" className='bedroom-center' />
              <img src={image_bedroom_left} alt="bedroom bis" className='bedroom-right' />
              <img src={image_kitchen} alt="kitchen" className='kitchen' />
              <img src={image_bathroom} alt="bathroom" className='bathroom' />
              <div className='bottom'>
              <div className='description-left'>
                  <div className="top">
                      <h1>123 Acme St. Dallas, TX</h1>
                      <h2>House for sale <span className='amount'>$2,677,000</span></h2>
                  </div>
                  <div className="description-left">
                      <div className="bottom-left">
                          <div className="bottom-left-top">
                              <h3>Bedrooms</h3>
                              <span>5</span>
                          </div>
                          <div className="bottom-left-bottom">
                                <h3>Bathrooms</h3>
                          </div>
                          <span>7</span>
                      </div>
                      <div className="bottom-right">
                          <div className="bottom-right-top">
                              <h3>Square Feet:</h3>
                              <span>8,138</span>
                          </div>
                          <div className="bottom-right-bottom">
                              <h3>Est payment:</h3>
                              <span>$14,747/mo</span>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="description-right">
                      <p>A beautiful modern day hime in the city with a full-size pool. Spacious and luxurious home located in Texas. Including media room, workout facility, and built-in sauna</p>
                      <a href="#">View Listing</a>
              </div>
              </div>
          </div>
    </section>
  )
}

export default Featured