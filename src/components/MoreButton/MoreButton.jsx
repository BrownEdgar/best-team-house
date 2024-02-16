import PropTypes from 'prop-types'
import './MoreButton.scss'

MoreButton.propTypes = PropTypes.string

export default function MoreButton({ text, subClass }) {
  return (
    <button className={`MoreButton MoreButton-${subClass}`}>{text}</button>
  )
}
