import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import './Heroe.css'

const Heroe = () => {
  return (
		<div className="heroe">
			<div className="content">
				<h1>Find the perfect place</h1>
				<p className="search-text">
					Search the largest selection
					of luxury high-rise
					apartements, multi-family
					homes, and luxury homes.{' '}
				</p>
				<form className="search">
					<div>
						<input
							type="text"
							name="searchbar"
							id="search"
							placeholder="Enter Keyword.."
						/>
					</div>
					<div className="radio">
						<div>
							<input
								type="radio"
								name="type"
								id="radio-rent"
								checked
							/>
							<label htmlFor="radio">
								Rent
							</label>
						</div>
						<div>
							<input
								type="radio"
								name="type"
								id="radio-buy"
								checked
							/>
							<label htmlFor="radio-buy">
								Buy
							</label>
						</div>
						<button type="submit">
							<AiOutlineSearch className="icon" />
						</button>
					</div>
				</form>
			</div>
		</div>
  )
}

export default Heroe