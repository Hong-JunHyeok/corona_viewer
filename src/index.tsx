import React, { Suspense } from "react"
import ReactDOM from "react-dom"
import App from "components/App"
import reportWebVitals from "./reportWebVitals"
import { RecoilRoot } from "recoil"
import * as Pages from "pages"

ReactDOM.render(
    <React.StrictMode>
        <RecoilRoot>
            <Suspense fallback={<Pages.LoadingPage />}>
                <App />
            </Suspense>
        </RecoilRoot>
    </React.StrictMode>,
    document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
