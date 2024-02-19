import './Logos.scss'
export default function Logos({logos}){
    return(
        <div>
            {
                logos.map(logos => {
                    <div className="posts_item">
                        <h3>{logos.img}</h3>
                    </div>
                })
            }
        </div>
    )
}

