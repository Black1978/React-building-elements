import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Testing = () => {
    const [user, setUser] = useState({})
    const id = useLocation().pathname.split('/')[2]

    useEffect(() => {
        const cancelToken = axios.CancelToken.source()
        console.log('useEffect mounts')

        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`, { cancelToken: cancelToken.token })
            .then((res) => {
                setUser(res.data)
            })
            .catch((err) => {
                if (axios.isCancel(err)) {
                    console.log('cancelled')
                } else {
                    //todo: handle error
                }
            })
        return () => {
            cancelToken.cancel()
            console.log('useEffect unmounts')
        }
    }, [id])

    return (
        <div style={{ margin: '20px', padding: '20px', border: '1px solid black' }}>
            <h2>Testing</h2>
            <Link to='/'>
                <button>Return to homepage</button>
            </Link>
            <div style={{ marginTop: '20px' }}>
                <p>Name: {user.name}</p>
                <p>Username: {user.username}</p>
                <p>Email: {user.email}</p>
                <Link to='/users/1' style={{ margin: '10px' }}>
                    Fetch User 1
                </Link>
                <Link to='/users/2' style={{ margin: '10px' }}>
                    Fetch User 2
                </Link>
                <Link to='/users/3' style={{ margin: '10px' }}>
                    Fetch User 3
                </Link>
            </div>
        </div>
    )
}

export default Testing
