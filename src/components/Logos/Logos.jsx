import logoSlice from '../../features/logo/logoSlice'

export default function Logos(){
    return(
        <div>
            {
                logoSlice.map(logos => {
                    return(
                        <div key={logos.id}>
                            <img src={logos.img} alt="" />
                        </div>
                    )
                })
            }
        </div>
    )
}

