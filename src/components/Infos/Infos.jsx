import infoSlice from '../../features/logo/logoSlice'



export default function Logos(){
    return(
        
        <div>
            <h2>Explore the popular residences</h2>
            {
                infoSlice.map(info => {
                    return(
                        <div key={info.id}>
                            <img src={logos.img} alt="" />
                            <p>{info.title}</p>
                            <p>{info.price}</p>
                            <p>{info.state}</p>
                            <p>{info.beds}</p>
                            <p>{info.baths}</p>
                            <p>{info.sqft}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}