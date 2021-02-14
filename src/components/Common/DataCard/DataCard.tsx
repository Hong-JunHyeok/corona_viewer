import React from "react"
import "./DataCard.scss"

interface PropsType {
    children: React.ReactNode
}

function DataCard({ children }: PropsType) {
    return <div className="DataCard">{children}</div>
}
export default DataCard
