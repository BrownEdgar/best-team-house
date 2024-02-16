import MoreButton from '../MoreButton/MoreButton';
import './About.scss'
import {useSelector} from 'react-redux'
export default function About() {
    const about = useSelector(state => state.about);
  return (
      <div className="container">
        <div className="About">
        <div className="About__img">
        <img src='/aboutus.jpg' />
        </div>
        <div className="About__content">
            <h3>{about.name}</h3>
            <h1>{about.title}</h1>
            <p>{about.description}</p>
         <MoreButton text={"Learn More"} />
        </div>
    </div>
   </div>
  )
}
