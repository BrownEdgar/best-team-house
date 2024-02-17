import PropTypes from 'prop-types'
import './MoreButton.scss'

MoreButton.propTypes = PropTypes.string

export default function MoreButton({ text }) {
  return (
    <button className="MoreButton">{text}</button>
  )
}
