import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from './partials/Header'
import Footer from './partials/Footer'

class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <Header pathname={this.props.location.pathname}/>
                <h3>Select city:</h3>
                <Link to="/belgrade" style={{ textDecoration: 'none' }}>
                    <div className='belgrade'>
                        Belgrade
                </div>
                </Link>
                <Link to="/novisad" style={{ textDecoration: 'none' }}>
                    <div className="noviSad" >
                        Novi Sad
                </div>
                </Link>
                <Footer />
            </React.Fragment>
        )
    }
}

export default Home