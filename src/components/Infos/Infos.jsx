import React from "react"
import './Infos.scss'
import infoSlice from "../../features/info/infoSlice"

const data_slice = infoSlice.data

export default function Infos({infos}){
    return(
        <div>
            {
                infoSlice.data.map((data) => {
                    return <div className="info_item">
                                <h3>{data.title}</h3>
                            </div>
                })
            }
        </div>
    )
}