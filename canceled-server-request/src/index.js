import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import User from './User'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <BrowserRouter>
        <Switch>
            <Route path={'/'} exact>
                <App />
            </Route>
            <Route path={'/user'}>
                <User />
            </Route>
        </Switch>
    </BrowserRouter>
)
