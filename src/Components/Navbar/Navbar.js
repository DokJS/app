import React,{useState} from 'react'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { FaRegTimesCircle } from 'react-icons/fa'
import {BsFillHouseFill} from 'react-icons/bs'
import './Navbar.css'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

  return (
		<div className="navbar">
			<div className="container">
				<h1>
					<span>
						<BsFillHouseFill />
						Real
					</span>
					Estate
				</h1>
				<button className="btn">Sign In</button>
				<ul className={isOpen ? 'nav-menu active':'nav-menu'}>
					<li>
						<a href="#">Home</a>
					</li>
					<li>
						<a href="#">
							Search
						</a>
					</li>
					<li>
						<a href="#">
							About
						</a>
					</li>
					<li>
						<a href="#">Contact</a>
					</li>
              </ul>
              <div className="hamburger">
                  {
                      isOpen ? (<FaRegTimesCircle onClick={() => setIsOpen(false)} className='icon' />)
                          : (<HiOutlineMenuAlt4 onClick={() => setIsOpen(true)} className='icon' />)
                  }
        
              </div>
			</div>
		</div>
  )
}

export default Navbar