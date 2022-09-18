import './App.css'
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function App() {
    const [products, setProducts] = useState([
        { id: 0, title: 'T-short', quantity: 0 },
        { id: 1, title: 'Jeance', quantity: 0 },
        { id: 2, title: 'Black sneakers', quantity: 0 },
    ])
    const [selectedId, setSelectedId] = useState(null)
    const selectedGood = products.find((item) => item.id === selectedId)

    const handleDeacreament = (id) => {
        setProducts((prev) => {
            return prev.map((item) => {
                if (item.id === id) {
                    return { ...item, quantity: item.quantity - 1 }
                } else {
                    return item
                }
            })
        })
    }
    const handleIncreament = (id) => {
        setProducts((prev) => {
            return prev.map((item) => {
                if (item.id === id) {
                    return { ...item, quantity: item.quantity + 1 }
                } else {
                    return item
                }
            })
        })
    }
    const handleChoose = (id) => {
        setSelectedId(id)
    }
    console.log('re-rendering')
    return (
        <div>
            <div style={{ border: 'solid red 5px', margin: '10px', padding: '10px' }}>
                <h2 style={{ textDecoration: 'underline' }}>useState bind solution</h2>
                <h3>All products</h3>
                {products.map((item) => {
                    return (
                        <div key={item.id} className='productItem'>
                            <span>
                                {item.title}{' '}
                                <button onClick={() => handleChoose(item.id)}>Choosen</button>
                            </span>
                            <div className='itemQuantity'>
                                <button
                                    className={0 >= item.quantity && 'disabled'}
                                    onClick={() => handleDeacreament(item.id)}
                                    disabled={0 >= item.quantity}
                                >
                                    -
                                </button>
                                <span>{item.quantity}</span>
                                <button onClick={() => handleIncreament(item.id)}>+</button>
                            </div>
                        </div>
                    )
                })}
                <h3>Selected products</h3>
                <span>{selectedGood?.title}</span>
                <span>{selectedGood?.quantity}</span>
            </div>
            <div style={{ border: 'solid red 5px', margin: '10px', padding: '10px' }}>
                <h2 style={{ textDecoration: 'underline' }}>
                    use AbortController (useEffect interruption)
                </h2>
                <Link to={'/user'}>User</Link>
            </div>
        </div>
    )
}

export default App
