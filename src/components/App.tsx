import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Main from "./Main"
import "styles/reset.scss"

function App() {
    return (
        <Router>
            <Route exact path="/">
                <Main />
            </Route>
            <Route exact></Route>
        </Router>
    )
}

export default App
