import React from 'react'
import './Footer.css'

import {BsFacebook} from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'
import { BsPinterest } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer className='footer'>
          <div className="container">
              <div className="container__top">
                  <a href="#" className='link'><BsFacebook className='footer-icon'/></a>
                  <a href="#" className='link'><BsInstagram className='footer-icon'/></a>
                  <a href="#" className='link'><BsTwitter className='footer-icon'/></a>
                  <a href="#" className='link'><BsPinterest className='footer-icon'/></a>
              </div>
              
              <div className="container__bottom">
                  <ul>
                      <caption className='list-title'>About</caption>
                      <li>Company</li>
                      <li>Details</li>
                      <li>Plannings</li>
                      <li>About Us</li>
                  </ul>
                  <ul>
                      <caption className='list-title'>Company</caption>
                      <li>Company</li>
                      <li>Details</li>
                      <li>Plannings</li>
                      <li>About Us</li>
                  </ul>
                  <ul>
                      <caption className='list-title'>Legal</caption>
                      <li>Company</li>
                      <li>Details</li>
                      <li>Plannings</li>
                      <li>About Us</li>
                  </ul>
                  <ul>
                      <caption className='list-title'>Information</caption>
                      <li>Company</li>
                      <li>Details</li>
                      <li>Plannings</li>
                      <li>About Us</li>
                  </ul>
              </div>
          </div>
   </footer>
  )
}

export default Footer