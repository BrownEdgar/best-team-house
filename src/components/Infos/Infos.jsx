import React from "react"
import './Infos.scss'

export default function Infos({infos}){
    return(
        <div>
            {
                infos.map(info => {
                    <div className="posts_item">
                        <h3>{post.title}</h3>
                    </div>
                })
            }
        </div>
    )
}

