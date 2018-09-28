import React from 'react'

const Header = (props) => {
    return (
        <header>
            Meetup
            <input type="text" name="search" value={props.inputValue} onChange={props.searchEvents} placeholder="Search Events..." />
        </header>
    )
}

export default Header