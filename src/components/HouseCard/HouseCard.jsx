import PropTypes from 'prop-types'
import './HouseCard.scss'

HouseCard.propTypes = {
  house: PropTypes.shape({
    title: PropTypes.string,
    beds: PropTypes.number,
    baths: PropTypes.number,
    area: PropTypes.number,
    price: PropTypes.number,
    img: PropTypes.string
  })
}

export default function HouseCard({ house }) {
  return (
    <div className="HouseCard">
      <div className="HouseCard__img">
        <img src={house.img} alt={house.title} />
      </div>
      <div className="HouseCard__content">
        <h2>{house.title}</h2>
        <p className='options'>
          <span>{house.beds} Beds</span>
          <span className='middleSpan'>{house.baths} Baths</span>
          <span>{house.area} Sq.Ft</span>
        </p>
        <p className='price'>${house.price.toFixed(2)}</p>
      </div>
    </div>
  )
}
