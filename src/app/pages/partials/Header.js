import React from 'react'
import { Link } from 'react-router-dom'

const Header = (props) => {
    return (
        <header>
            <Link to="/">  <i className="fa back-arrow" style={{ display: props.pathname !== '/' ? 'block' : 'none' }}>&#xf060;</i></Link>
            Meetup
        < input type="text" name="search" value={props.inputValue} onChange={props.searchEvents} placeholder="Search Events..." />
        </header >
    )
}

export default Header