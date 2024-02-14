import { getHouses } from '../../features/houses/housesSlice'
import './Houses.scss'
import { useSelector } from 'react-redux'

export default function Houses() {
  const houses = useSelector(getHouses)
  return (
    <div className='container'>
      <div className="Houses">
        <h1>Best Property Deals</h1>
        {
          houses.map(house => {
            return <div className="Houses__card" key={house.id}>
              <div className="Houses__img">
                <img src={house.img} alt={house.title} />
              </div>
              <div className="Houses__content">
                <h2>{house.title}</h2>
                <p className='options'>
                  <span>{house.beds} Beds</span>
                  <span className='middleSpan'>{house.baths} Baths</span>
                  <span>{house.area} Sq.Ft</span>
                </p>
                <p className='price'>${house.price.toFixed(2)}</p>
              </div>
            </div>
          })
        }
        <button>View All Property</button>
      </div>
    </div>
  )
}
