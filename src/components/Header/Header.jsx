import Navigation from '../Navigation/Navigation'
import './Header.scss'
import { useSelector } from 'react-redux'
export default function Header() {
	const header = useSelector(state => state.header)

	return (
		<div className="HeaderBG">
			<div className="container Header">
				<div className="Header__left">
					<Navigation />
					<div className="Header__content">
						<h3>{header.slogan}</h3>
						<h1>{header.title}</h1>
						<p>{header.description}</p>
					</div>
					<div className="Header__form">
						<form>
							<input type="email" name="email" placeholder='Enter your email... ' />
							<button>Get Started</button>
						</form>
					</div>
				</div>
				<div className="Header__right">
					<div className="Header__buttons">
						<button className='signin'>Sign In</button>
						<button className='register'>Register</button>
					</div>
				</div>
			</div>
		</div>
	)
}