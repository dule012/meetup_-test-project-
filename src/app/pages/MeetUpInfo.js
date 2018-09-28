import React, { Component } from 'react'

class MeetUpInfo extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        document.querySelector('.description').innerHTML = localStorage.getItem('description')
    }
    render() {
        return (
            <React.Fragment>
                <p className="nameInfo">{localStorage.getItem('name')}</p>
                <img className="imgInfo" src={localStorage.getItem('photo')} alt="EventImage" />
                <p className="descriptionInfo"></p>
            </React.Fragment>
        )
    }
}

export default MeetUpInfo