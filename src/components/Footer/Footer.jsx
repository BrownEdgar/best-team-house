import './Footer.scss'
import { useSelector } from 'react-redux'

export default function Footer() {

  const data = useSelector(state => state.footer)

  return (
    <div className='Footer'>
      <div className="Footer__up">
        <div className="container">

          <div className="info">
            <img src="/darkLogo.png" alt="logo" />
            <p>Start your search today and find <br /> your dream property!</p>
            <ul className='icons'>
              <i className="bi bi-facebook"></i>
              <i className="bi bi-instagram"></i>
              <i className="bi bi-twitter"></i>
              <i className="bi bi-linkedin"></i>
            </ul>
          </div>

          {
            data.map((list, index) => {
              return <div className="list" key={index}>
                <h3>{list.title}</h3>
                <ul>
                  {
                    list.data.map((elem, index) => {
                      return <li key={index}>{elem}</li>
                    })
                  }
                </ul>
              </div>
            })
          }
        </div>
      </div>
      <div className="Footer__down">
        <div className="container">
          <p>Copyright © 2021 Brandoxide. All rights reserved.</p>
          <span>
            <a href='#'>Terms And Agreements</a>
            <a href='#'>Privacy Policy</a>
          </span>
        </div>
      </div>

    </div>
  )
}
