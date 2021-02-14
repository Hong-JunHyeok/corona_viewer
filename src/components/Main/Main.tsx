import React from "react"
import "./Main.scss"
import { allCoronaData } from "selectors/corona/allCoronaData"
import { useRecoilValue } from "recoil"
import { CoronaType } from "types/CoronaType"
import DataCard from "components/Common/DataCard"

function Main() {
    const coronaData: CoronaType = useRecoilValue(allCoronaData)
    const { TotalCase, TotalDeath, TotalRecovered, NowCase, updateTime } = coronaData
    return (
        <div className="Main">
            <div className="Main_totalData">
                <h1 className="Main_totalData_title">국내 총 코로나 데이터 ({updateTime})</h1>
                <div className="Main_totalData_content">
                    <DataCard>
                        총 확진자 : <div className="Main_totalData_data">{TotalCase}명</div>
                    </DataCard>
                    <DataCard>
                        총 사망자 :{" "}
                        <div className="Main_totalData_data warning">{TotalDeath}명</div>
                    </DataCard>
                    <DataCard>
                        총 완치자 :{" "}
                        <div className="Main_totalData_data safe">{TotalRecovered}명</div>
                    </DataCard>
                    <DataCard>
                        현 확진자 : <div className="Main_totalData_data warning">{NowCase}명</div>
                    </DataCard>
                </div>
            </div>
            <div className="Main_eachRegionData"></div>
        </div>
    )
}

export default Main
