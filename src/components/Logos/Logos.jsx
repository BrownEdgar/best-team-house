import './Logos.scss'
import logoSlice from '../../features/logo/logoSlice'



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

