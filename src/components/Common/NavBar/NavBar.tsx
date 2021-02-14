import React from "react"
import "./NavBar.scss"
import { RiVirusFill } from "react-icons/ri"

function NavBar() {
    return (
        <div className="NavBar">
            <RiVirusFill color={"pink"} />
            <h1 className="NavBar_projectTitle">Corona Viewer</h1>
        </div>
    )
}

export default NavBar
