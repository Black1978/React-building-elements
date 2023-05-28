import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Testing from './pages/testing/Testing'
import Registration from './pages/registration/Registration'
import Home from './pages/home/Home'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='testing' element={<Testing />} />
                <Route path='registration' element={<Registration />} />
                <Route path='users/:id' element={<Testing />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
