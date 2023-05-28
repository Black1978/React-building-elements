import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <Link to='testing'>
                <button>Testing</button>
            </Link>
            <Link to='registration'>
                <button>Registration</button>
            </Link>
        </div>
    )
}

export default Home
