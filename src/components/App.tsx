import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import * as Pages from "pages"
import "styles/reset.scss"

function App() {
    return (
        <Router>
            <Route exact path="/">
                <Pages.MainPape />
            </Route>
            <Route exact></Route>
        </Router>
    )
}

export default App
