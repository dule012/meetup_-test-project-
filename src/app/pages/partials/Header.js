import React from 'react'
import { Link } from 'react-router-dom'

const Header = (props) => {
    return (
        <header>
            <Link to={(props.pathname === '/belgrade' || props.pathname === '/novisad') ? '/' : props.pathname.slice(0, props.pathname.indexOf('/', 1))}>  <i className="fa back-arrow" style={{ display: props.pathname !== '/' ? 'block' : 'none' }}>&#xf060;</i></Link>
            Meetup
        < input type="text" name="search" value={props.inputValue} onChange={props.searchEvents} placeholder="Search Events..." style={{ display: props.pathname === '/belgrade' || props.pathname === '/novisad' ? 'block' : 'none' }} />
        </header >
    )
}

export default Header