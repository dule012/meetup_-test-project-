import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import fetchCities from '../services/fetchCities'
import fetchCityEvents from '../services/fetchCityEvents'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    componentDidMount() {
        fetchCities().then((data) => {
            // console.log(data)
        })

        fetchCityEvents().then((data) => {
            console.log(data)
        })
    }
    render() {
        return (
            <div>adads</div>
        )
    }
}
export default Home