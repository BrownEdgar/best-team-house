import { useSelector } from 'react-redux'
import { getLogo, getMenu } from '../../features/navigationSlice'
import './Navigation.scss'
export default function Navigation() {
  const logo = useSelector(getLogo);
  const menu = useSelector(getMenu);
  return (
    <div className="Navigation">
      <div className="Navigation__left">
        <img src={logo} />
      </div>
      <ul className="Navigation__right">
        {
          menu.map((elem, index) => {
            return (
              <li key={index}>{elem}</li>
            )

          })
        }
      </ul>
    </div>
  )
}
