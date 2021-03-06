import React from "react"
import "./Main.scss"
import { allCoronaData } from "selectors/corona/allCoronaData"
import { eachRegionCoronaData } from "selectors/corona/eachRegionCoronaData"
import { useRecoilValue } from "recoil"
import { CoronaType, EachCoronaType } from "types/CoronaType"
import DataCard from "components/Common/DataCard"
import RegionDataCard from "components/Common/RegionDataCard"

function Main() {
    const coronaData: CoronaType = useRecoilValue(allCoronaData)
    const eachCoronaData: EachCoronaType = useRecoilValue(eachRegionCoronaData)

    const { TotalCase, TotalDeath, TotalRecovered, NowCase, updateTime } = coronaData

    const {
        seoul,
        daegu,
        incheon,
        jeju,
        busan,
        ulsan,
        jeonbuk,
        korea,
        chungbuk,
        chungnam,
        daejeon,
        gangwon,
        gwangju,
        gyeongbuk,
        gyeonggi,
        gyeongnam,
        jeonnam,

        sejong,
    } = eachCoronaData
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
            <div className="Main_eachRegionData">
                <h1>각 지역 코로나 데이터({updateTime})</h1>
                <div>
                    <RegionDataCard region={seoul} />
                    <RegionDataCard region={daegu} />
                    <RegionDataCard region={incheon} />
                    <RegionDataCard region={jeju} />
                    <RegionDataCard region={busan} />
                    <RegionDataCard region={ulsan} />
                    <RegionDataCard region={jeonbuk} />
                    <RegionDataCard region={korea} />
                    <RegionDataCard region={chungbuk} />
                    <RegionDataCard region={chungnam} />
                    <RegionDataCard region={daejeon} />
                    <RegionDataCard region={gangwon} />
                    <RegionDataCard region={gwangju} />
                    <RegionDataCard region={gyeongbuk} />
                    <RegionDataCard region={gyeonggi} />
                    <RegionDataCard region={gyeongnam} />
                    <RegionDataCard region={jeonnam} />

                    <RegionDataCard region={sejong} />
                </div>
            </div>
        </div>
    )
}

export default Main
