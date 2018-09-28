import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <React.Fragment>
            <Link to="/belgrade">
                <div>
                    Belgrade
                </div>
            </Link>
            <Link to="/novisad">
                <div>
                    Novi Sad
                </div>
            </Link>
        </React.Fragment>
    )
}

export default Home