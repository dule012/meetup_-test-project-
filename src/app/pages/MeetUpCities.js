import React, { Component } from 'react'
import { fetchBelgradeEvents, fetchNoviSadEvents } from '../services/fetchCityEvents'
import Header from './partials/Header'
import Footer from './partials/Footer'

class MeetUpCities extends Component {
    constructor(props) {
        super(props)
        this.state = {
            arrOfEvents: [],
            inputValue: '',
            searchEvents: this.searchEvents
        }
    }

    componentDidMount() {
        if (this.props.match.params.meetupCity === 'belgrade') {
            fetchBelgradeEvents().then((data) => {
                console.log(data)
                this.setState({
                    arrOfEvents: data
                })
            })
        } else {
            fetchNoviSadEvents().then((data) => {
                this.setState({
                    arrOfEvents: data
                })
                console.log(data)
            })
        }
    }

    searchEvents = (e) => {

        const filteredArrOfEvents = this.state.arrOfEvents.filter((el) => {
            return el.name.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1
        })

        this.setState({
            inputValue: e.target.value,
            filteredArrOfEvents: filteredArrOfEvents
        })
        console.log(e.target.value)
    }

    render() {
        return (
            <React.Fragment>
                <Header searchEvents={this.state.searchEvents} inputValue={this.state.inputValue} />

                {this.state.inputValue !== '' ? this.state.filteredArrOfEvents.map((el, i) => {
                    return (<div className='events' key={i}>
                        <img src={el.photo} alt="EventImage" />
                        <p>{el.name}</p>
                    </div>)
                }) : this.state.arrOfEvents.map((el, i) => {
                    return (<div className='events' key={i}>
                        <img src={el.photo} alt="EventImage" />
                        <p>{el.name}</p>
                    </div>)
                })}

                <Footer />
            </React.Fragment>
        )
    }
}

export default MeetUpCities