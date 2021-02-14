import Footer from "components/Common/Footer"
import NavBar from "components/Common/NavBar"
import React from "react"
import { SpinnerRoundOutlined } from "spinners-react"

const loadingDivStyle = {
    width: "100%",
    height: "80vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
}

function LoadingPage() {
    return (
        <>
            <NavBar />
            <div style={loadingDivStyle}>
                <SpinnerRoundOutlined color="#339af0" />
                Loading...
            </div>
            <Footer />
        </>
    )
}

export default LoadingPage
