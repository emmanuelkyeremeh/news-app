import React from 'react'
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import Nav from "./Nav"
import Home from "./Home"
import Sports from "./Sports"
import Entertainment from "./Entertainment"
import Business from "./Business"

const App = () => {
    return (
        <Router>
            <div>
                <Nav/>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/business" component={Business} />
                    <Route path="/sports" component={Sports} />
                    <Route path="/entertainment" component={Entertainment} />
                </Switch>
            </div>
        </Router> 
    )
}

export default App
