import React from "react"
import "./Main.scss"
import { allCoronaData } from "selectors/corona/allCoronaData"
import { useRecoilValue } from "recoil"

function Main() {
    const coronaData = useRecoilValue(allCoronaData)
    console.log(coronaData)
    return <div className="Main"></div>
}

export default Main
