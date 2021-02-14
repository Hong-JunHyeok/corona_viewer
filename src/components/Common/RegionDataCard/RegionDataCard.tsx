import React from "react"
import "./RegionDataCard.scss"

interface PropsType {
    region: {
        countryName: string
        newCase: string
        totalCase: string
        recovered: string
        death: string
        percentage: string
        newCcase: string
        newFcase: string
    }
}

function RegionDataCard({ region }: PropsType) {
    return (
        <div className="RegionDataCard">
            <h1 className="">{region.countryName}</h1>
            <div className="">총 확진자 : {region.newCase}</div>
            <div className="warning">총 사망자 : {region.death}</div>
            <div className="safe">총 완치자 : {region.recovered}</div>
        </div>
    )
}

export default RegionDataCard
