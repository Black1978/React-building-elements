import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function User() {
    const [user, setUser] = useState('')
    const id = useLocation().pathname.split('/')[2]

    useEffect(() => {
        // const controller = new AbortController()
        // const signal = controller.signal
        // fetch(`https://jsonplaceholder.typicode.com/users/${id}`, { signal })
        //     .then((res) => res.json())
        //     .then((data) => {
        //         setUser(data)
        //     })
        //     .catch((err) => {
        //         if (err.name === 'AbortError') {
        //             console.log('canseled!')
        //         }
        //     })
        // return () => {
        //     controller.abort()
        // }
        const cancelToken = axios.CancelToken.source()
        axios
            .get(`https://jsonplaceholder.typicode.com/users/${id}`, {
                cancelToken: cancelToken.token,
            })
            .then((res) => res.data)
            .then((data) => setUser(data))
            .catch((err) => {
                if (axios.isCancel(err)) {
                    console.log('cancelled!')
                }
            })
        return () => {
            cancelToken.cancel()
        }
    }, [id])
    return (
        <div>
            <p>User name: {user.name}</p>
            <p>User username: {user.username}</p>
            <p>User email: {user.email}</p>
            <Link to={'/user/1'}>User 1</Link>
            <br />
            <Link to={'/user/2'}>User 2</Link>
            <br />
            <Link to={'/user/3'}>User 3</Link>
        </div>
    )
}

export default User
