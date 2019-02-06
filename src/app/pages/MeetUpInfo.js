import React, { Component } from 'react'
import Header from './partials/Header'
import Footer from './partials/Footer'

class MeetUpInfo extends Component {

    componentDidMount() {
        document.querySelector('.descriptionInfo').innerHTML = localStorage.getItem('description')
    }
    render() {
        return (
            <React.Fragment>
                <Header pathname={this.props.location.pathname} />
                <p className="nameInfo">{localStorage.getItem('name')}</p>
                <img className="imgInfo" src={localStorage.getItem('photo')} alt="EventImage" />
                <p className="descriptionInfo"></p>
                <Footer />
            </React.Fragment>
        )
    }
}

export default MeetUpInfo