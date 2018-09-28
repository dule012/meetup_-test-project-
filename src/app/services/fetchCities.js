import React from 'react'

const fetchCities = () => {
    return fetch('https://cors-anywhere.herokuapp.com/api.meetup.com/2/cities?&sign=true&photo-host=public&country=rs&radius=10&page=70')
    .then((data)=>{
        return data.json()
    })
    .then((data)=>{
        
    })
}