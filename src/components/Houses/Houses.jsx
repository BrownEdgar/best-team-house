import { getHouses } from '../../features/houses/housesSlice'
import HouseCard from '../HouseCard/HouseCard'
import MoreButton from '../MoreButton/MoreButton'
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
            return <HouseCard key={house.id} house={house} />
          })
        }
        <MoreButton text={'View All Property'} subClass='deals' />
      </div>
    </div>
  )
}
